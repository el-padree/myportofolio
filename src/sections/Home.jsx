import { useEffect, useState } from 'react';
import Button from '../components/Button';
import Marquee from '../components/Marquee';

const Home = ({ language = 'en' }) => {
  const roles = language === 'id'
    ? ['Programmer', 'Desainer', 'Operator Sekolah', 'Bendahara']
    : ['Programmer', 'Designer', 'School Ops', 'Treasurer'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  let logoLaravel = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAADlCAMAAAAP8WnWAAAAkFBMVEX/////LSD/AAD/GAD/IxP/IA7/Khz/d3L/j4v/zsz/6Of/urj/SkH/r6z/Kx3/8PD/OzH/mpb/HQf/ysj/+vr/w8H/4uH/5+b/RDr/9fX/2tn/npr/VEz/1NL/Nir/pqP/iYT/W1T/gHv/bWf/ZV7/tLH/Rz7/cmz/UUn/YVr/g37/vLn/Oi//pKH/nJn/fHZjJkZOAAALRklEQVR4nO2daVfjOgyGm6Qte6CFsvVSGBgYts78/393aZImluNFtmQnOSfvN+a0HT+JF1mS5ckEr+OD5Hbr8PkB6eopnSZ5Nv3quiEBdJbNkp3y7PS+67Yw6+giy5NK8/Tgruv2MOr4dzpPBE3TdddNYtPhz2CTlOWrrlvFotflsnlldd/M0/+uu24ZWQ+34mD7vcmS5q/nYQ+98xdhsGWby8lkIXTRWfbYdQMJUpG0eQepk2kz2H764NX+32FP/XXTZRs9dX8qIsDZ43UmzDHp05XuN3qquwOx8yWtef8QdNizLprorbXYduWKLa7reXZxFL2Jvlol4oSvs7WgRfb7OG4bPXX9n/hOTFby3pYuh95hvCb66upZHGyW/U2xC9pruXyN1EZfPYKXsbB+/uZDfM23DxGa6KtLYF39OUd+Rxh6L6jvdKCbX+JbeEO/Bde33YEI4+fuWfhqH/0QtJkPP8N2IPqahVsbOxCPtbFOxXcfxA/hYcRy2Yk2e5Sqy7d0+texSUJ/olr4cCfxSfmplooVNXf03XzWnSlPP8h7sy9hD5gyWtP1XJ6n7w6+m7otOY99sa4f1ozP2hTn8nn6Dz1d1V9Kphzr7/XHnB1OnMuLH06xEQvhS8sZ1fS9+yfMKUxwske4mK42uKEnfsfF6FJJNMS44MS5fCr6bjBDDz4SrLmskmh2c8FBb81nDv6yz+zyG/c1fUWzmwvu4U32sy3c1uR9L8ZvUVUCZnf1tKlwSg+p+I959m1ZbarvXoP9zruj6QvN7sXrkgFO59uGbtMPox1cfiqlmL4ts/skI8N9zfVRCRCaSQ8NQ6+Gg6av2qGnksLsJsPdv6emeNLVIXLvKcB5mb4qs5sIB5uhtCaPcb4bEQ4+MtmJrhLsIXuzmwaH2zsdfSN8NxDO3NllSWO7NrspcPihj3AeyHD4EJw+mOUP5+SvuPoUh970pP2JNtzk/A8mBGd4Br5wUmvtyy1cwNrPQgEnmwaqbd7JVNzjSr3XE87HRyj1YmnoKeFsIThT8G7iCefr3d2C+Qf6ITRwJteKdcXwgCP45cE+K5uLzdHCaZ1i9uCdMxwxovIzDanXfD2c2p2Jmapd4aRJ3cNJ9ZWLrar9ECa49lqCm6rd4KRUF88o5l8wiio/hBlO6jDTDBUUcIE7/+2yhzH9kGIBs8BJwR/hNRqmage4e8bMgXuwgO3aZ4Vr+w+s3ggHuNt585v0nI+TaTOK0hsUnOz5sfqR8HB3ac32iyVueVg3NHtFwu1CcPUjtnsA8XDnNRyP23TV9IRdH8fB7daS6pkggndecGrT10niXO4EN5m8FEM/Q2xh/eCoYcurZ5D06gZ3UMIhJmtPOJrbFM4LPYRrm75YtWf0/sBltLAlNLunvYKb3944+m6AJLP7q4yi9QbuQvbd4ENwCl/KYtk3OMlvgQ7BKXYufYSTTN8Ekz6t3HP2Ek52X9hDcGpvQU/hYNa4LQSn8/P0Fg6fFnPfCt7t1WM4XAjO5FvtMxzG8WD0ivcb7mftMobgLPGMvsOZnH2W4N0A4LQhOOiCVQbvBgCndrBvEcG7QcC1QyO44N1A4KSgVpahgndDgYMhuEZGf8tw4GB0oumhBg0JDs4iiODdsODE+R8RvBsY3G7lrtKAp/bg3eDg9lGFFJGGPUC40xIOEb4b4SSNcIVGuEIjXKkRrtAIJ2mEKzTCFRrhSo1whUY4SSNcoRGu0AhXanhwdyHg1v2AOy/zyZIp4jmg4VbfeR/gmhAi4qAzEq7OVO8WTqwGgDjojIIT8kLxyaQ78cKJWRmFbBl7GLitEBXafbIbOHCoZC9zCMAOB0so7QLlncCJh0qmyIPONjiphFIR4OoAbgWPbzyIBzFS7UFnMxyMoc+qAFd0OHDwpjy0jQqYGuE0pyAjw2kqTdkPP5ngYObeS/ORuHDa83/n1oPOWjgpc09cUWLCwelMCiFaDhxq4Uy5YvHg4HSmCCHCjL1nKW1IDfeamU5oxoKTpjO1tWVK6VLB2eo0RIJDVoSTMvbEZLw2nOHDlaLAOVSE0x2sb8MhzrNHgHOsCKcZRhLcFzjLrUmpDQ/nXhFO+Q0AZ5taK4WGU5emsEj1rgU4dPWPsHDtKkJItUdpA7dGH0AICLe4QxV50EieX99LuHOXijvh4OanmXU6MwmujJuLvPpRzBaiUji4pHlrbodzaoGiGVUvdapyFRCuQfO+laJ9LK7pqYgzriHgvkCLaHU8t9KBxv3zQh2RDAH3KZwdJVdgBRnbVRfF1gTkh1sl4iUOcv0VD9UHnSvhqzlywwWpevwhvDuXQsy8cKCuPKaKEEaXG6GbO5XdYIULUWkcZnBjjqk3YoQzehE8BXLvE1yUpxEbXJDq/vLJ9m7ggtzLAM675J3BhbhRQ6pYdpt3AxfiLhTpoMuZQ2S1ER0uyC02j62CUp3Ahbh/CB4uK7tCB3Ahbo6Cg23fFaLDSV4Eluv2WoOtUmQ4XKlIRz2mmnk3LlyIe/aggwTMuzHh/Et86KUebJXiwVmPM3sIxCWXrXk3FpyhoqS/tpZSiVHgHoLc42IYbJViwM0WG7xTFCu4fVcbOTHgkhm7FwEOtqXGyIkC1zSDXD6ulG2wVYoJx+VFWG1sg61SPDguLwJmsFWKBsfkRbCsbFCx4MhX3JTa6sxIpcLCPdVNmZ8yvDi4sr1YGx0W7j4VGkP1JcDBhunlYeEmJ6AbUTam0sqG6uWB4aTboPx3OW6DrVJoOLk3+e1PXQdbpfBwxaJL8iy4D7ZKMeBkr5v5FhFZPx3bnt6mVhw46MLBV6KceA62SpHgpFu90DFv+57NpGhwsgcdc3eW92CrFBEOlsOzh77BKuJ1RWFUOHgjlWUHtKVHgeLCTSbH4Noh/d7Vc2WDig0H81p12SHUwVYpPhxMKVe9FTjYCCHXLuCgW73lA1kTVjaobuDgaQ6woZYGG8kz0RFc4V1XuELgYKNd4dohnPyOdhnz9JUNqkM42W580sbZfNUpHNxez8AcyuEGJMCxB7P5BlulW2+4nCvn51s6Q7xEVDXE6Oi77BVucPn+AYfI1uLyuTdlj93g3vZPmi3Prs4C4/9F1/FzlgZ4zkVb5kyD7Uw4uJT9cfsuuEqXJyr1Rb/buJZUJN7167b7PN3FcHFzJbcbtpUy3+fpLjY4nlQX032e7mKCc7lSwyjW7AsWuHvOvLJrkDfzTvkxBjjpGht6qovmPk930eGUd28SteD5TSrciuspQ/FkGdLg4H23GH8vWvrrbvCiwEkzG8+BGaFpM+oMTICDaxKPOQhFzcn2hoPWhP8ViUZBq8c5m94Tjt8O1Ih0m7IXnHTHPU9emU5noESCU0N94EIcmDHI/+yRO9zRt98d9wRpLjWyyhXO9/8h6tLribrBgTifNpc0iHxOajrBeZXd4JLHLOYApy1cE0vO649D8U6QkMRzOs1Vjn4I9+KdfAdmfLR28UPg4Ni8CHQhLrWr5Vq8k+t0GkH48zt2OHtpveiyXCRZy6l4p1PyWFDhLle2Fe8McDqNRSg/hLl453swLwJdCH+iqXhnWC8CXa9Ti8Gkh9sGKLvBLYsfAle8M5AXgS7zqX5M8c63fg02KFM9BmXxzk/v7OYupHcM+Bfv7I+0lVQtxTujeBHo0lSvMRbvjOZFoEtZd0hfvNN2SK5vemw7wMnFO/ujK3CkalfrSyjeaalFPABJfojr1b54p7UW8SAE/BBZmWCXE4t39kiiH6J6XU2KW8deBLqUN2NUg42n7Eanat1pUqofXgS6RD/EfrD1xotAl+iHSHrmRaALOJH75kWgq164EbWIB6gfk2uez3rqRaBrsZk/D2NjM2rUKD79D8TY8k+qm6VHAAAAAElFTkSuQmCC';
  let logoLivewire = 'data:image/png;base64,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';
  
  useEffect(() => {
    const role = roles[currentRoleIndex % roles.length];
    const typingSpeed = isDeleting ? 80 : 120;

    const timeout = setTimeout(() => {
      if (!isDeleting && typedText.length < role.length) {
        setTypedText(role.slice(0, typedText.length + 1));
      } else if (isDeleting && typedText.length > 0) {
        setTypedText(role.slice(0, typedText.length - 1));
      } else if (!isDeleting && typedText.length === role.length) {
        setTimeout(() => setIsDeleting(true), 1200);
      } else if (isDeleting && typedText.length === 0) {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => prev + 1);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, currentRoleIndex]);

  const handlePhotoMove = (event) => {
    const card = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - card.left) / card.width - 0.5) * 16;
    const y = ((event.clientY - card.top) / card.height - 0.5) * -16;
    setTilt({ x, y });
  };

  const handlePhotoLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <>
      <section className="home-section fade-in-item" id="home">
        <div className="home-container">
          <div className="home-copy">
            <p className="home-welcome">{language === 'id' ? 'Halo, selamat datang di portofolio saya' : 'Hello, welcome to my showcase'}</p>
            <h1 className="home-title">
              {language === 'id' ? 'Hai, saya ' : "Hi, I'm "}<strong>Hanif Fadillah, {language === 'id' ? '' : 'The'}</strong>
              <span className="home-role">{typedText}</span>
            </h1>
            <p className="home-subtitle">
              {language === 'id'
                ? 'Developer fullstack (dalam masa belajar), desainer UI/UX, dan operator sekolah otodidak yang berfokus membangun ekosistem web modern. Saya juga menghidupkan ide kreatif melalui visual acara dan editing video yang berdampak.'
                : 'A self-taught fullstack developer (on learning), UI/UX designer, and school operator dedicated to building modern web ecosystems. Alongside technical systems, I bring creative ideas to life by crafting impactful event visuals and editing engaging video content.'}
            </p>
            <div className="home-actions">
              <a href="mailto:hanifadilh2@gmail.com" className="btn btn-primary">{language === 'id' ? 'Hubungi' : 'Contact Me'}</a>
              <a href="#biodata" className="btn btn-secondary">{language === 'id' ? 'Mulai' : 'Get Started'}</a>
            </div>
          </div>
          <div className="home-photo-wrapper">
            <div
              className="home-photo-card"
              onMouseMove={handlePhotoMove}
              onMouseLeave={handlePhotoLeave}
              style={{ transform: `perspective(900px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)` }}
            >
              <div className="photo-edge-box box1" aria-hidden="true">
                <img src="../logo192.png" alt=""  style={{display:'block',margin:'auto', width:'clamp(20px, 20vw, 90px)'}} />
              </div>
              <div className="photo-edge-box box2" aria-hidden="true">
                <img src="../laravel.svg" alt="" style={{display:'block',margin:'6px auto',width:'clamp(20px, 17vw, 80px)'}} />
              </div>
              <div className="photo-edge-box box3" aria-hidden="true">
                <img src="../livewire.png" alt="" width="80px" style={{display:'block',margin:'6px auto', width:'clamp(20px, 18vw, 80px)'}} />
              </div>
              <div className="photo-edge-box box4" aria-hidden="true">
                <img src="https://cdn.simpleicons.org/express/ffffff" alt="" width="80px" style={{display:'block',margin:'6px auto',width:'clamp(20px, 18vw, 80px)'}} />
              </div>
              <div className="home-photo-glow" />
              <div className="home-photo-placeholder">
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Marquee speed={18} className="mt-6">
        <span className="dot" style={{ color: 'var(--bg)', fontWeight: 800, marginRight: '0.1rem' }}>Fullstack Developer</span>
        <span className="dot" style={{ color: 'var(--bg)', fontWeight: 800, marginRight: '0.1rem' }}>UI/UX Designer</span>
        <span className="dot" style={{ color: 'var(--bg)', fontWeight: 800, marginRight: '0.1rem' }}>Contact Us</span>
        <span className="dot" style={{ color: 'var(--bg)', fontWeight: 800, marginRight: '0.1rem' }}>Self Taught</span>
        <span className="dot" style={{ color: 'var(--bg)', fontWeight: 800, marginRight: '0.1rem' }}>Hire Me</span>
        <span className="dot" style={{ color: 'var(--bg)', fontWeight: 800, marginRight: '0.1rem' }}>School Operator</span>
        <span className="dot" style={{ color: 'var(--bg)', fontWeight: 800, marginRight: '0.1rem' }}>IT Support</span>
        <span className="dot" style={{ color: 'var(--bg)', fontWeight: 800, marginRight: '0.1rem' }}>Treasurer</span>
      </Marquee>
    </>
  );
};

export default Home;
