import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin } from 'lucide-react';
import ContactForm from '../components/contact/ContactForm';
import portfolioData from '../data/portfolio.json';
import { pageTransition, slideUp, staggerContainer, staggerItem } from '../utils/animations';

const Contact = () => {
  const { personal } = portfolioData;

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: personal.email,
      href: `mailto:${personal.email}`,
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Location',
      value: personal.location,
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      href: personal.github,
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      href: personal.linkedin,
    },
  ];

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      {/* Hero Section */}
      <section className="section-container bg-gradient-to-br from-blue-50 to-indigo-100">
        <motion.div
          initial="initial"
          animate="animate"
          variants={slideUp}
          className="text-center"
        >
          <h1 className="text-5xl font-bold mb-6 text-gradient">Get In Touch</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Have a project in mind or want to discuss opportunities? Feel free to reach out!
          </p>
        </motion.div>
      </section>

      {/* Contact Content */}
      <section className="section-container bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={slideUp}
            className="flex flex-col h-full"
          >
            <div className="card h-full flex flex-col">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Send Me a Message
              </h2>
              <div className="flex-grow">
                <ContactForm />
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="flex flex-col h-full"
          >
            <div className="card h-full flex flex-col">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Contact Information
              </h2>

              <div className="space-y-6 mb-8 flex-grow">
                {contactInfo.map((info, idx) => (
                  <motion.div
                    key={idx}
                    variants={staggerItem}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {info.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold text-gray-600 mb-1">
                        {info.label}
                      </h3>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-lg text-gray-900 hover:text-primary transition-colors break-all word-break break-words"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-lg text-gray-900 break-words">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <motion.div variants={staggerItem} className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Connect With Me
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all transform hover:scale-110"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* Additional Info */}
              <motion.div variants={staggerItem} className="mt-auto">
                <div className="bg-gradient-to-br from-primary to-secondary text-white rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">Let's Build Something Amazing!</h3>
                  <p className="text-white/90">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;

