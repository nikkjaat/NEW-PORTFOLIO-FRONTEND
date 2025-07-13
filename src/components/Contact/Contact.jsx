import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";
import styles from "./Contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      console.log(response);

      const data = await response.json();

      if (data.success) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);

      setTimeout(() => {
        setSubmitStatus("");
      }, 3000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "nikhilmeharwal@gmail.com",
      link: "mailto:nikhilmeharwal@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 8859 407 873",
      link: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Chandigarh",
      link: "https://www.google.com/maps/place/Chandigarh/@30.732402,76.6883117,12z/data=!3m1!4b1!4m6!3m5!1s0x390fed0be66ec96b:0xa5ff67f9527319fe!8m2!3d30.7333148!4d76.7794179!16zL20vMDFmMXE4?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/nikkjaat",
      username: "@nikkjaat",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/nikhil-choudhary-273a38291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      username: "Nikhil Choudhary",
    },
    // {
    //   icon: Instagram,
    //   name: "Twitter",
    //   url: "https://twitter.com",
    //   username: "@nikkjaatt",
    // },
  ];

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Get In Touch</h2>
          <p className={styles.sectionDescription}>
            Ready to start your next project? Let's discuss how I can help bring
            your ideas to life.
          </p>
        </div>

        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <h3 className={styles.infoTitle}>Let's Connect</h3>
            <p className={styles.infoDescription}>
              I'm always open to discussing new opportunities, interesting
              projects, or just having a chat about technology and development.
            </p>

            <div className={styles.contactMethods}>
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className={styles.contactMethod}
                  target={item.title === "Location" ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                >
                  <div className={styles.methodIcon}>
                    <item.icon size={20} />
                  </div>
                  <div className={styles.methodInfo}>
                    <span className={styles.methodTitle}>{item.title}</span>
                    <span className={styles.methodValue}>{item.value}</span>
                  </div>
                </a>
              ))}
            </div>

            <div className={styles.socialSection}>
              <h4 className={styles.socialTitle}>Follow Me</h4>
              <div className={styles.socialLinks}>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={styles.socialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    <social.icon size={20} />
                    <span className={styles.socialUsername}>
                      {social.username}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.contactForm}>
            <h3 className={styles.formTitle}>Send Message</h3>

            {submitStatus === "success" && (
              <div className={styles.successMessage}>
                <Send size={20} />
                Thank you! Your message has been sent successfully.
              </div>
            )}

            {submitStatus === "error" && (
              <div className={styles.errorMessage}>
                <Send size={20} />
                Sorry, there was an error sending your message. Please try
                again.
              </div>
            )}

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="Your full name"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.label}>
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="What's this about?"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className={styles.textarea}
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={styles.submitButton}
              >
                {isSubmitting ? (
                  <>
                    <div className={styles.spinner} />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
