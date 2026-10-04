import React, { useEffect, useRef } from 'react';
import { IoArrowForward, IoSparkles } from 'react-icons/io5';
import Marquee from '../components/Marquee'
import CoverflowCarousel from '../components/CoverflowCarousel';

const projects = [
  {
    title: 'Todoku App',
    category: 'Web Application',
    categoryId: 'Aplikasi Web',
    blurb: 'Todoku is a modern task management web app designed to boost efficiency. It features secure Google OAuth login, an eye-friendly dark mode, and a dynamic traffic dashboard to track your daily productivity.',
    blurbId: 'Todoku adalah aplikasi manajemen tugas modern untuk meningkatkan efisiensi. Dilengkapi login Google OAuth yang aman, dark mode yang nyaman, dan dashboard aktivitas harian.',
    tags: ['Bootstrap', 'PHP', 'MySQL'],
    slides: ['/todoku_1.png', '/todoku_2.png', '/todoku_3.png'],
    link: 'https://todoku.wuaze.com/login.php',
  },
  {
    title: 'Haflah Akhirussanah 2025/2026',
    category: 'Event Visuals',
    categoryId: 'Visual Acara',
    blurb: 'Created a premium videotron visual asset for an elementary school Haflah (graduation event). Blended elegant motion graphics to deliver a grand and memorable stage atmosphere.',
    blurbId: 'Membuat aset visual videotron premium untuk acara Haflah sekolah dasar. Motion graphic yang elegan menghadirkan suasana panggung yang berkesan.',
    tags: ['Canva', 'Capcut', 'Powerpoint'],
    slides: ['/haflah_1.jpeg', '/haflah_2.jpeg', '/haflah_3.jpeg'],
    link: 'https://youtu.be/-Ac3Z_crVoM?si=nlkfe9NKm7DuPtIF'
  },
  {
    title: 'Financial Reporting',
    category: 'Finance Ledger',
    categoryId: 'Buku Keuangan',
    blurb: 'An automated Excel financial system for an MA student organization to track income and event expenses.',
    blurbId: 'Sistem keuangan Excel otomatis untuk mencatat pemasukan dan pengeluaran organisasi siswa MA. Logika kondisi membantu mengelompokkan arus kas.',
    tags: ['MsExcel', 'Cash Flow Management'],
    slides: ['/bendahara_1.png', 'bendahara_2.png', 'bendahara_3.png'],
    link: '../public/donwload/finance_reporting.xlsx'
  }
];

// SUB-KOMPONEN: Khusus menghandle auto-slide per card
const ProjectCard = ({ project, language }) => {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const totalSlides = project.slides.length;
    if (totalSlides <= 1) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % totalSlides;
      const slideWidth = track.clientWidth;
      track.scrollLeft = slideWidth * currentIndex;
    }, 3000);

    return () => clearInterval(interval);
  }, [project.slides.length]);

  return (
    <article className="project-card fade-in-item">
      <div className="project-visual" aria-hidden="true">
        <div className="project-visual__track" ref={trackRef}>
          {project.slides.map((slide, index) => (
            <div className="project-visual__slide" key={`${project.title}-${index}`}>
              <img src={slide} alt="" />
            </div>
          ))}
        </div>
      </div>

      <div className="project-card__body">
        <div className="project-meta">
          <span className="project-category">{language === 'id' ? project.categoryId : project.category}</span>
          <span className="project-pill">
            <IoSparkles /> {language === 'id' ? 'Pilihan' : 'Featured'}
          </span>
        </div>

        <h3>{project.title}</h3>
        <p>{language === 'id' ? project.blurbId : project.blurb}</p>

        <ul className="project-tags">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
          {language === 'id' ? 'Lihat studi kasus' : 'See case study'} <IoArrowForward />
        </a>
      </div>
    </article>
  );
};

// KOMPONEN UTAMA
const Projects = ({ language = 'en' }) => {
  return (
    <React.Fragment>
    <section className="projects-section" id="projects">
      <div className="projects-shell fade-in-item">
        <div className="projects-heading">
          <p className="section-label">{language === 'id' ? 'Proyek Pilihan' : 'Selected Projects'}</p>
          <h2 className="section-title">{language === 'id' ? 'Cerita yang dibentuk dari karya nyata.' : 'Stories shaped through real work.'}</h2>
          <p className="section-copy">
            {language === 'id'
              ? 'Saya telah membangun dan menyempurnakan berbagai proyek, dari aplikasi produktivitas hingga antarmuka yang rapi. Setiap proyek mengajarkan bagaimana desain dan interaksi dapat terasa modern sekaligus personal.'
              : 'I’ve built and refined several projects from productivity apps to polished interfaces each one teaching me how design and interaction can feel both modern and personal.'}
          </p>
        </div>

        <CoverflowCarousel
          ariaLabel={language === 'id' ? 'Carousel proyek pilihan' : 'Selected projects carousel'}
          previousLabel={language === 'id' ? 'Sebelumnya' : 'Prev'}
          nextLabel={language === 'id' ? 'Berikutnya' : 'Next'}
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} language={language} />
          ))}
          <article className="project-card project-card--add fade-in-item" key="add-project">
            <div className="project-card__add">
              <img src="/create.svg" alt="" width="200" height="200" aria-hidden="true" />
              <h3>{language === 'id' ? 'Tambahkan Proyek' : 'Add a project'}</h3>
              <p>
                {language === 'id'
                  ? 'Punya ide baru? Mari wujudkan menjadi sesuatu yang berani.'
                  : 'Have a new idea in mind? Let’s turn it into something bold.'}
              </p>
            </div>
          </article>
        </CoverflowCarousel>
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
  </React.Fragment>
  );
};

export default Projects;