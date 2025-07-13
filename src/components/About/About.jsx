import React from "react";
import { Code2, Database, Server, Globe } from "lucide-react";
import styles from "./About.module.css";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Frontend Development",
      description: "React, JavaScript, HTML5, CSS3",
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Node.js, Express.js, RESTful APIs",
    },
    {
      icon: Database,
      title: "Database Management",
      description: "MongoDB",
    },
    {
      icon: Globe,
      title: "Full Stack Solutions",
      description: "End-to-end web applications",
    },
  ];

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textSection}>
            <h2 className={styles.sectionTitle}>About Me</h2>
            <h3 className={styles.subtitle}>
              Passionate MERN Stack Developer Eager to Learn and Grow
            </h3>

            <div className={styles.description}>
              <p>
                I'm a highly motivated and detail-oriented Full Stack Developer
                with a strong foundation in the MERN stack. As a fresher, I
                bring fresh energy, quick learning ability, and a strong drive
                to build meaningful and user-centric web applications.
              </p>

              <p>
                I focus on writing clean, maintainable code and continuously
                strive to learn new technologies and best practices. My aim is
                to build efficient, scalable, and impactful digital experiences.
              </p>

              <p>
                I'm currently working on personal projects and open-source
                contributions to sharpen my skills and collaborate with the
                developer community.
              </p>
            </div>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>5+</span>
                <span className={styles.statLabel}>Personal Projects</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>6</span>
                <span className={styles.statLabel}>Months Experience (Intern)</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>10+</span>
                <span className={styles.statLabel}>Tech Stack Skills</span>
              </div>
            </div>
          </div>

          <div className={styles.highlightsSection}>
            <div className={styles.highlights}>
              {highlights.map((item, index) => (
                <div key={index} className={styles.highlight}>
                  <div className={styles.highlightIcon}>
                    <item.icon size={24} />
                  </div>
                  <h4 className={styles.highlightTitle}>{item.title}</h4>
                  <p className={styles.highlightDescription}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
