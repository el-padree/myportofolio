import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/Parallax.css';

gsap.registerPlugin(ScrollTrigger);

const slides = [
  {
    label: 'Creative',
    accent: 'Design',
    tone: 'yellow',
    left: 'Graphics',
    right: 'Motion',
  },
  {
    label: 'Build',
    accent: 'App',
    tone: 'pink',
    left: 'Code',
    right: 'Launch',
  },
  {
    label: 'Self',
    accent: 'Taught',
    tone: 'cyan',
    left: 'Curiosity',
    right: 'Learning',
  },
  {
    label: 'Ship',
    accent: 'Stories',
    tone: 'green',
    left: 'Ideas',
    right: 'Future',
  },
];

const Parallax = ({ language = 'en' }) => {
  const localizedSlides = language === 'id'
    ? [
        { label: 'Desain', accent: 'Kreatif', tone: 'yellow', left: 'Grafis', right: 'Motion' },
        { label: 'Bangun', accent: 'Aplikasi', tone: 'pink', left: 'Kode', right: 'Rilis' },
        { label: 'Belajar', accent: 'Autodidak', tone: 'cyan', left: 'Penasaran', right: 'Belajar' },
        { label: 'Kirim', accent: 'Cerita', tone: 'green', left: 'Ide', right: 'Masa Depan' },
      ]
    : slides;
  const sectionRef = useRef(null);
  const stageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const slideEls = gsap.utils.toArray('.parallax-slide');
      const sideEls = gsap.utils.toArray('.side-tag');

      gsap.set(slideEls, { autoAlpha: 0, scale: 0.72, y: 80 });
      gsap.set(sideEls, { autoAlpha: 0, scale: 0.7, y: 34 });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.5,
          pin: stageRef.current,
        },
      });

      slideEls.forEach((slide, index) => {
        const leftTag = slide.querySelector('.side-tag.left');
        const rightTag = slide.querySelector('.side-tag.right');
        const title = slide.querySelector('.parallax-title');

        timeline
          .fromTo(
            slide,
            { autoAlpha: 0, scale: 0.7, y: 70 },
            {
              autoAlpha: 1,
              scale: 1,
              y: 0,
              duration: 1.2,
              ease: 'power2.out',
            },
            index === 0 ? 0 : '>-0.12'
          )
          .fromTo(
            [leftTag, rightTag],
            { autoAlpha: 0, scale: 0.72, y: 34 },
            { autoAlpha: 1, scale: 1, y: 0, duration: 1.1, ease: 'power2.out' },
            index === 0 ? 0.2 : '>-0.08'
          )
          .to(
            slide,
            {
              autoAlpha: 0,
              scale: 1.8,
              y: -90,
              duration: 1.15,
              ease: 'power2.inOut',
            },
            '>-0.12'
          )
          .to(
            title,
            {
              scale: 0.56,
              duration: 1.15,
              ease: 'power2.inOut',
            },
            '<'
          )
          .to(
            [leftTag, rightTag],
            {
              autoAlpha: 0,
              scale: 1.15,
              y: -24,
              duration: 1,
              ease: 'power2.inOut',
            },
            '<'
          );
      });

      gsap.to('.parallax-bg', {
        yPercent: 18,
        scale: 1.12,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.3,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="parallax-section" aria-label="Parallax scroll headline section">
      <div ref={stageRef} className="parallax-stage">
        <div className="parallax-bg" aria-hidden="true">
          <div className="grid-layer" />
          <div className="shape shape-one" />
          <div className="shape shape-two" />
        </div>

        {localizedSlides.map((slide) => (
          <article key={`${slide.label}-${slide.accent}`} className={`parallax-slide ${slide.tone}`}>
            <div className="side-tag left">{slide.left}</div>
            <div className="side-tag right">{slide.right}</div>

            <h2 className="parallax-title">
              <span>{slide.label}</span>
              <span className="parallax-accent">{slide.accent}</span>
            </h2>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Parallax;
