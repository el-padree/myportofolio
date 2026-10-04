import React from 'react';
import {
  IoMail,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoInstagram,
} from 'react-icons/io5';

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
];

const socialLinks = [
  { label: 'Email', href: 'mailto:hello@example.com', icon: IoMail },
  { label: 'GitHub', href: 'https://github.com', icon: IoLogoGithub, target: '_blank', rel: 'noreferrer' },
  { label: 'Instagram', href: 'https://instagram.com/hanifadilh_', icon: IoLogoInstagram, target: '_blank', rel: 'noreferrer' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: IoLogoLinkedin, target: '_blank', rel: 'noreferrer' },
];

const Footer = ({ language = 'en' }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <span className="site-footer__mark">H</span>
          <div>
            <strong>Hanif Fadillah</strong>
            <small>{language === 'id' ? 'Portofolio pribadi' : 'Personal portfolio'}</small>
          </div>
        </div>

        <nav className="site-footer__nav" aria-label="Footer navigation">
          {footerLinks.map(({ label, href }) => (
            <a key={label} href={href} aria-label={label} title={label}>
              {label}
            </a>
          ))}
        </nav>

        <div className="site-footer__meta">
          {socialLinks.map(({ label, href, icon: Icon, target, rel }) => (
            <a
              key={label}
              href={href}
              target={target}
              rel={rel}
              aria-label={label}
              title={label}
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>

      <div className="site-footer__bottom">
        <span>
          {language === 'id'
            ? 'Dibuat dengan hati dan kode.'
            : 'Built with care and code.'}
        </span>
        <span>© {currentYear}</span>
      </div>
    </footer>
  );
};

export default Footer;
