import React from "react";
import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react";
import styles from "./Hero.module.css";

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/nikkjaat", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/nikhil-choudhary-273a38291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:nikhilmeharwal@gmail.com", label: "Email" },
  ];

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textSection}>
            <h1 className={styles.title}>
              Hi, I'm <span className={styles.highlight}>Nikhil Choudhary</span>
            </h1>
            <h2 className={styles.subtitle}>Full Stack MERN Developer</h2>
            <p className={styles.description}>
              I create modern, scalable web applications using MongoDB,
              Express.js, React, and Node.js. Passionate about clean code, user
              experience, and innovative solutions.
            </p>

            <div className={styles.actions}>
              <a href="#contact" className={styles.primaryButton}>
                Get In Touch
              </a>
              <a
                href="/nikhil_resume.pdf"
                className={styles.secondaryButton}
                download="Nikhil_Choudhary_Resume.pdf" // This forces download with specified filename
              >
                <Download size={18} />
                Download CV
              </a>
            </div>

            <div className={styles.social}>
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={styles.socialLink}
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className={styles.imageSection}>
            <div className={styles.profileImage}>
              <img src="/nik4.jpg" alt="Nikhil Choudhary" />
            </div>
          </div>
        </div>

        <div className={styles.scrollIndicator}>
          <ChevronDown size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
