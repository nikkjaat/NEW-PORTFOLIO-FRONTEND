import React from "react";
import {
  ExternalLink,
  Github,
  Database,
  Server,
  Smartphone,
} from "lucide-react";
import styles from "./Projects.module.css";

const Projects = () => {
  const projects = [
    // {
    //   title: "E-Commerce Platform",
    //   description:
    //     "Full-stack MERN e-commerce application with payment integration, admin dashboard, and real-time inventory management.",
    //   image:
    //     "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
    //   technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    //   liveUrl: "#",
    //   githubUrl: "#",
    //   features: [
    //     "Payment Integration",
    //     "Admin Dashboard",
    //     "Real-time Updates",
    //     "Responsive Design",
    //   ],
    // },
    {
      title: "Task Management App",
      description:
        "Collaborative project management tool with real-time collaboration, file sharing, and team communication.",
      image:
        "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Socket.io",
        "JWT",
        "Cloudinary",
      ],
      liveUrl: "https://trelloclonebynikhil.netlify.app/",
      githubUrl: "https://github.com/nikkjaat",
      features: ["Progress Tracking"],
    },
    {
      title: "Food Delivery App",
      description:
        "Mobile-responsive food delivery platform with order tracking, payment processing, and restaurant management.",
      image:
        "https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React Native", "Express.js", "MongoDB"],
      liveUrl: "https://food-hubb.netlify.app/",
      githubUrl: "https://github.com/nikkjaat",
      features: ["Order Tracking", "Payment Gateway", "Push Notifications"],
    },
    {
      title: "Goods Borrowing Tracker",
      description:
        "A web application to manage and track borrowed goods between vendor or user, featuring item logs, return reminders.",
      image: "/udhaarKhata.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      liveUrl: "https://udharkhata.netlify.app/",
      githubUrl: "https://github.com/nikkjaat",
      features: [
        "Item Logs",
        "Return Reminders",
        "User Authentication",
        "Responsive Design",
        "Chat Feature",
      ],
    },
    // {
    //   title: "Weather Forecast App",
    //   description:
    //     "Modern weather application with location-based forecasts, interactive maps, and weather alerts.",
    //   image:
    //     "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
    //   technologies: ["React", "Express.js", "OpenWeather API", "Google Maps"],
    //   liveUrl: "#",
    //   githubUrl: "#",
    //   features: [
    //     "Location-based",
    //     "Interactive Maps",
    //     "Weather Alerts",
    //     "Responsive Design",
    //   ],
    // },
  ];

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Featured Projects</h2>
          <p className={styles.sectionDescription}>
            A showcase of my recent work and contributions to various projects
          </p>
        </div>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <div className={styles.projectImage}>
                <img src={project.image} alt={project.title} />
                <div className={styles.projectOverlay}>
                  <div className={styles.projectLinks}>
                    <a
                      target="_blank"
                      href={project.liveUrl}
                      className={styles.projectLink}
                      aria-label="View live project"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      className={styles.projectLink}
                      aria-label="View source code"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>
                  {project.description}
                </p>

                <div className={styles.projectFeatures}>
                  {project.features.map((feature, featureIndex) => (
                    <span key={featureIndex} className={styles.featureTag}>
                      {feature}
                    </span>
                  ))}
                </div>

                <div className={styles.projectTech}>
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.projectStats}>
          <div className={styles.stat}>
            <Database size={32} />
            <h4>Full Stack</h4>
            <p>End-to-end solutions</p>
          </div>
          <div className={styles.stat}>
            <Server size={32} />
            <h4>RESTful APIs</h4>
            <p>Scalable backend services</p>
          </div>
          <div className={styles.stat}>
            <Smartphone size={32} />
            <h4>Responsive</h4>
            <p>Mobile-first design</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
