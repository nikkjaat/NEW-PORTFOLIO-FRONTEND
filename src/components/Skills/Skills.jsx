import React from "react";
import styles from "./Skills.module.css";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React.js", level: 90 },
        { name: "JavaScript (ES6+)", level: 90 },
        { name: "HTML5", level: 95 },
        { name: "CSS3/SCSS", level: 90 },
        { name: "Redux/Context API", level: 85 },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 88 },
        { name: "RESTful APIs", level: 92 },
        { name: "JWT Authentication", level: 85 },
        { name: "Socket.io", level: 70 },
      ],
    },
    {
      category: "Database & Tools",
      skills: [
        { name: "MongoDB", level: 88 },
        { name: "Git/GitHub", level: 90 },
        { name: "Cloudinary", level: 70 },
        { name: "Postman", level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Technical Skills</h2>
          <p className={styles.sectionDescription}>
            Here are the technologies and tools I work with to bring ideas to
            life
          </p>
        </div>

        <div className={styles.skillsGrid}>
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className={styles.skillCategory}>
              <h3 className={styles.categoryTitle}>{category.category}</h3>
              <div className={styles.skillsList}>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className={styles.skillItem}>
                    <div className={styles.skillHeader}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillLevel}>{skill.level}%</span>
                    </div>
                    <div className={styles.skillBar}>
                      <div
                        className={styles.skillProgress}
                        style={{ "--progress": `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.additionalSkills}>
          <h3 className={styles.additionalTitle}>
            Additional Skills & Technologies
          </h3>
          <div className={styles.skillTags}>
            {[
              "Responsive Design",
              "Material-UI",
              "Tailwind CSS",
              "Bootstrap",
              "Lucide React",
              "Performance Optimization",
              "SEO",
            ].map((skill, index) => (
              <span key={index} className={styles.skillTag}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
