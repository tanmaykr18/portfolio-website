import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import portfolioData from '../../data/portfolio.json';
import SkillModal from './SkillModal';
import { slideUp, slideDown, fadeIn } from '../../utils/animations';

const Hero = () => {
  const { personal, skills, skillCategories: categories } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Build skill categories dynamically from JSON
  const skillCategories = categories.map(category => ({
    title: category.title,
    icon: category.icon,
    items: skills[category.id] || []
  }));

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={slideRight}
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-4"
              variants={slideDown}
            >
              Hi, I'm <span className="text-gradient">{personal.name}</span>
            </motion.h1>
            
            <motion.h2 
              className="text-2xl md:text-3xl text-gray-700 mb-6"
              variants={slideUp}
            >
              {personal.title}
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-600 mb-8 max-w-xl"
              variants={fadeIn}
            >
              {personal.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-wrap gap-4 mb-8"
              variants={slideUp}
            >
              <Link to="/projects" className="btn-primary">
                View Work
              </Link>
              <Link to="/contact" className="btn-secondary">
                Contact Me
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex space-x-4"
              variants={fadeIn}
            >
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6 text-gray-700" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6 text-gray-700" />
              </a>
              <a
                href={`mailto:${personal.email}?subject=Contact from Portfolio`}
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all hover:scale-110"
                aria-label={`Email ${personal.email}`}
              >
                <Mail className="w-6 h-6 text-gray-700" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side - Skills */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-6"
          >
            <h2 className="text-3xl font-bold text-center mb-6 text-gradient">
              Skills & Expertise
            </h2>
            
            <div className="grid grid-cols-2 gap-4">
              {skillCategories.map((category, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedCategory(category)}
                  className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-all cursor-pointer hover:scale-105"
                >
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-2">{category.icon}</span>
                    <h3 className="text-sm font-bold text-gray-900">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {category.items.slice(0, 3).map((skill, skillIdx) => (
                      <span
                        key={skillIdx}
                        className="px-2 py-0.5 bg-primary/10 text-primary rounded-full text-xs font-medium"
                      >
                        {skill.name}
                      </span>
                    ))}
                    {category.items.length > 3 && (
                      <span className="px-2 py-0.5 bg-primary/10 text-primary rounded-full text-xs font-medium">
                        +{category.items.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Skill Modal */}
      {selectedCategory && (
        <SkillModal
          category={selectedCategory}
          onClose={() => setSelectedCategory(null)}
        />
      )}
    </section>
  );
};

const slideRight = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default Hero;

