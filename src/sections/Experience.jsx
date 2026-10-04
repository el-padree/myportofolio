import React from 'react';
import HorizontalCard from '../components/HorizontalCard';

const experiences = [
  {
    image: '/bendahara_1.png',
    date: '2024 – 2025',
    title: 'Treasurer of OSHAN',
    titleId: 'Bendahara OSHAN',
    description:
      'Organization of Male Students of Hidayatunnajah Islamic Boarding School is a school organization that supports the implementation of school programs and follows the school\'s vision and mission.',
    descriptionId: 'Organisasi Santri Hidayatunnajah adalah organisasi sekolah yang mendukung pelaksanaan program sekolah sesuai visi dan misi sekolah.',
    link: 'https://todoku.wuaze.com/login.php',
  },
  {
    image: '/todoku_1.png',
    date: 'Mei 2026',
    title: 'todoku Web Application',
    titleId: 'Aplikasi Web Todoku',
    description:
      'An indie web application for task management that helps users organize and track their tasks efficiently, featuring Google OAuth login, dark mode, and an activity dashboard.',
    descriptionId: 'Aplikasi indie web untuk manajemen tugas yang membantu pengguna mengatur dan melacak tugas mereka secara efisien, dengan fitur login Google OAuth, dark mode, dan dashboard aktivitas.',
    buttonText: 'View App',
    link: 'https://todoku.wuaze.com/login.php',
  },
  {
    image: '/haflah_1.jpeg',
    date: '28 June 2026',
    title: 'Event Visuals Design',
    titleId: 'Desain Visual Acara',
    description:
      'Created premium visual assets for a school graduation event, blending motion graphics and memorable stage presentation.',
    descriptionId: 'Membuat aset visual premium untuk acara kelulusan sekolah dengan perpaduan motion graphic dan presentasi panggung yang berkesan.',
    buttonText: 'Watch Video',
    link: 'https://youtu.be/-Ac3Z_crVoM?si=nlkfe9NKm7DuPtIF',
  },
  {
    image: '/operator.jpeg',
    date: '2026 - Now',
    title: 'School Operator, Designer, Multimedia.',
    titleId: 'Operator Sekolah, Desainer, Multimedia.',
    description:
      'I was responsible as an operator in Dapodik data collection, designer, and multimedia to support school activities, including information system management and visual material creation.',
    descriptionId: 'Saya bertanggung jawab sebagai operator dalam pendataan Dapodik, desainer, dan multimedia untuk mendukung kegiatan sekolah, termasuk pengelolaan sistem informasi dan pembuatan materi visual.',
    buttonText: 'Learn More',
    link: 'https://dapo.kemendikdasmen.go.id/',
  },
];

const Experience = ({ language = 'en' }) => {
  const handleCardClick = (link) => {
    if (!link) return;
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section 
        id="experience" 
        className=" fade-in-item"
        style={{
            backgroundColor: 'var(--dark-emerald)',
            padding: '4rem 2rem 5rem',
            color: 'var(--black)',
        }}
        >
      <div className="projects-shell">
        <div className="projects-heading">
          <p className="section-label">{language === 'id' ? 'Pengalaman' : 'Experience'}</p>
          <h2 className="section-title">{language === 'id' ? 'Pengalaman dan dampak pilihan' : 'Selected experiences and impact'}</h2>
          <p className="section-copy">
            {language === 'id'
              ? 'Berikut beberapa pengalaman praktis saya dalam pengembangan aplikasi, visual acara, dan sistem keuangan, disajikan dalam timeline vertikal agar mudah diikuti.'
              : 'These are some of my practical experiences across app development, event visuals, and financial systems, presented in a vertical timeline for better flow and clarity.'}
          </p>
        </div>

        <div className="experience-timeline">
          {experiences.map((item) => (
            <HorizontalCard
              key={item.title}
              image={item.image}
              date={item.date}
              title={language === 'id' ? item.titleId : item.title}
              description={language === 'id' ? item.descriptionId : item.description}
              buttonText={item.buttonText ? (language === 'id' ? (item.buttonText === 'View App' ? 'Lihat Aplikasi' : item.buttonText === 'Learn More' ? 'Pelajari' : 'Tonton Video') : item.buttonText) : undefined}
              onButtonClick={() => handleCardClick(item.link)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
