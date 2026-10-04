import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import '../styles/Rubic.css';

const cubeColors = {
    red: 0xFF6B6B,
    orange: 0xff6b00,
    yellow: 0xffe600,
    green: 0x88D498,
    blue: 0x74B9FF,
    white: 0xFFFDF5,
};

function Rubic({ language = 'en' }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
        camera.position.set(6.4, 5.2, 7.2);

        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.shadowMap.enabled = false;

        scene.add(new THREE.HemisphereLight(0xffffff, 0x444444, 2.4));
        const keyLight = new THREE.DirectionalLight(0xffffff, 3.2);
        keyLight.position.set(5, 8, 7);
        keyLight.castShadow = true;
        scene.add(keyLight);

        const cube = new THREE.Group();
        const materials = [
            new THREE.MeshToonMaterial({ color: cubeColors.red }),
            new THREE.MeshToonMaterial({ color: cubeColors.orange }),
            new THREE.MeshToonMaterial({ color: cubeColors.yellow }),
            new THREE.MeshToonMaterial({ color: cubeColors.white }),
            new THREE.MeshToonMaterial({ color: cubeColors.blue }),
            new THREE.MeshToonMaterial({ color: cubeColors.green }),
        ];
        const geometry = new THREE.BoxGeometry(0.96, 0.96, 0.96);
        const edgeGeometry = new THREE.EdgesGeometry(geometry);
        const edgeMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });

        for (let x = -1; x <= 1; x += 1) {
            for (let y = -1; y <= 1; y += 1) {
                for (let z = -1; z <= 1; z += 1) {
                    const cubie = new THREE.Mesh(geometry, materials);
                    cubie.position.set(x * 1.02, y * 1.02, z * 1.02);
                    cubie.castShadow = true;
                    cubie.receiveShadow = true;
                    cubie.add(new THREE.LineSegments(edgeGeometry, edgeMaterial));
                    cube.add(cubie);
                }
            }
        }
        scene.add(cube);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.07;
        controls.enablePan = false;
        controls.enableZoom = false;
        controls.minDistance = 5;
        controls.maxDistance = 10;
        controls.target.set(0, 0, 0);

        let scrollRotation = 0;
        let previousScroll = window.scrollY;
        const handleScroll = () => {
            const nextScroll = window.scrollY;
            scrollRotation += (nextScroll - previousScroll) * 0.0022;
            previousScroll = nextScroll;
        };
        window.addEventListener('scroll', handleScroll, { passive: true });

        const resize = () => {
            const { clientWidth, clientHeight } = canvas.parentElement;
            camera.aspect = clientWidth / clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(clientWidth, clientHeight, false);
        };
        const resizeObserver = new ResizeObserver(resize);
        resizeObserver.observe(canvas.parentElement);
        resize();

        const clock = new THREE.Clock();
        let animationFrame;
        const animate = () => {
            const elapsed = clock.getElapsedTime();
            cube.position.y = Math.sin(elapsed * 1.25) * 0.12;
            cube.rotation.y += 0.0022;
            cube.rotation.x += 0.0007;
            cube.rotation.z += (scrollRotation - cube.rotation.z) * 0.04;
            controls.update();
            renderer.render(scene, camera);
            animationFrame = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            cancelAnimationFrame(animationFrame);
            window.removeEventListener('scroll', handleScroll);
            resizeObserver.disconnect();
            controls.dispose();
            geometry.dispose();
            edgeGeometry.dispose();
            edgeMaterial.dispose();
            materials.forEach((material) => material.dispose());
            renderer.dispose();
        };
    }, []);

    return (
        <section className="rubic-section" aria-label="Interactive Rubik cube">
            <div className="rubic-marquee" aria-hidden="true">
                <div className="rubic-marquee-row rubic-marquee-left">MAKE IT MOVE / MAKE IT MOVE / MAKE IT MOVE /</div>
                <div className="rubic-marquee-row rubic-marquee-right">INTERACTIVE / INTERACTIVE / INTERACTIVE /</div>
                <div className="rubic-marquee-row rubic-marquee-left">PLAY WITH RUBIC / PLAY WITH RUBIC / PLAY WITH RUBIC /</div>
            </div>
            <div className="rubic-copy">
                <span>{language === 'id' ? 'MAIN DENGAN RUBIK' : 'PLAY WITH RUBIC'}</span>
                <h2>{language === 'id' ? <>SEBUAH RUBIK.</> : <>THE RUBIC</>}</h2>
                <p>{language === 'id' ? 'Geser untuk memutar. Scroll untuk mengubah bentuk.' : 'Drag to orbit. Scroll to shift the form.'}</p>
            </div>
            <div className="rubic-stage">
                <canvas ref={canvasRef} className="rubic-canvas" />
            </div>
        </section>
    );
}

export default Rubic;