import React from "react";
import { Heart, Code2 } from "lucide-react";
import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Nikhil Choudhary</h3>
            <p className={styles.footerDescription}>
              Full Stack MERN Developer passionate about creating innovative web
              solutions and delivering exceptional user experiences.
            </p>
            <div className={styles.techStack}>
              <span className={styles.techItem}>React</span>
              <span className={styles.techItem}>Node.js</span>
              <span className={styles.techItem}>MongoDB</span>
              <span className={styles.techItem}>Express</span>
            </div>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Quick Links</h4>
            <nav className={styles.footerNav}>
              {quickLinks.map((link, index) => (
                <a key={index} href={link.href} className={styles.footerLink}>
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Let's Connect</h4>
            <p className={styles.connectText}>
              Ready to start your next project? Let's discuss how we can work
              together.
            </p>
            <a href="#contact" className={styles.ctaButton}>
              Get In Touch
            </a>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            <p>© {currentYear} Nikhil Choudhary. All rights reserved.</p>
          </div>

          <div className={styles.madeWith}>
            <span>Made with</span>
            <Heart size={16} className={styles.heartIcon} />
            <span>and</span>
            <Code2 size={16} className={styles.codeIcon} />
            <span>using React</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
