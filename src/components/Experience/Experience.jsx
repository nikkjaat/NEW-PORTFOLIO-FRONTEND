import React from "react";
import { Briefcase, Calendar, MapPin, Award } from "lucide-react";
import styles from "./Experience.module.css";

const Experience = () => {
  const experiences = [
    {
      title: "MERN Stack Intern",
      company: "Brillica Services Pvt. Ltd.",
      location: "Remote",
      period: "Jun 2023 - Nov 2023",
      description:
        "Completed a 6-month internship focused on developing full-stack web applications using the MERN stack. Worked closely with senior developers and contributed to real-world projects.",
      achievements: [
        "Built and deployed 2 full-stack projects using React and Node.js",
        "Integrated REST APIs and managed state using Context API",
        "Collaborated in an Agile team environment using Git and GitHub",
        "Gained hands-on experience with MongoDB, Express.js, and JWT authentication",
      ],
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Git",
        "REST APIs",
      ],
    },
  ];

  const certifications = [
    {
      title: "MERN Stack Developer",
      issuer: "Brillica Services Pvt. Ltd.",
      year: "2023",
    },
    // {
    //   title: "React Developer Fundamentals",
    //   issuer: "Meta (Coursera)",
    //   year: "2025",
    //   credentialId: "META-REACT-654321",
    // },
  ];

  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Experience</h2>
          <p className={styles.sectionDescription}>
            My internship journey as a MERN Stack Developer
          </p>
        </div>

        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineMarker}>
                <Briefcase size={20} />
              </div>

              <div className={styles.timelineContent}>
                <div className={styles.experienceHeader}>
                  <h3 className={styles.jobTitle}>{exp.title}</h3>
                  <div className={styles.companyInfo}>
                    <span className={styles.company}>{exp.company}</span>
                    <div className={styles.jobMeta}>
                      <span className={styles.location}>
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                      <span className={styles.period}>
                        <Calendar size={14} />
                        {exp.period}
                      </span>
                    </div>
                  </div>
                </div>

                <p className={styles.jobDescription}>{exp.description}</p>

                <div className={styles.achievements}>
                  <h4 className={styles.achievementsTitle}>
                    Key Contributions:
                  </h4>
                  <ul className={styles.achievementsList}>
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className={styles.achievement}>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.technologies}>
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.certifications}>
          <h3 className={styles.certificationsTitle}>
            <Award size={24} />
            Certifications
          </h3>
          <div className={styles.certificationsGrid}>
            {certifications.map((cert, index) => (
              <div key={index} className={styles.certificationCard}>
                <h4 className={styles.certTitle}>{cert.title}</h4>
                <p className={styles.certIssuer}>{cert.issuer}</p>
                <div className={styles.certMeta}>
                  <span className={styles.certYear}>{cert.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
