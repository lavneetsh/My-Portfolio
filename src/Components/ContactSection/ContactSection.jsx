import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  UilEnvelope,
  UilPhone,
  UilMapMarker,
  UilGithub,
  UilLinkedin,
  UilInstagram,
  UilCheckCircle,
  UilTimes
} from '@iconscout/react-unicons';

const ContactSection = () => {
  const form = useRef();
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    emailjs
      .sendForm(
        'service_594oh0c',
        'template_t6n839l',
        form.current,
        'BgOqIxgjdNJ-t_nSr'
      )
      .then(
        () => {
          setStatus({ type: 'success', message: 'Message sent successfully!' });
          setLoading(false);
          form.current.reset();
          setTimeout(() => setStatus({ type: '', message: '' }), 5000);
        },
        (error) => {
          setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
          setLoading(false);
          console.error(error);
        }
      );
  };

  const contactInfo = [
    {
      icon: UilEnvelope,
      title: 'Email',
      value: 'lavneetsharma123@gmail.com',
      link: 'mailto:lavneetsharma123@gmail.com',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: UilPhone,
      title: 'Phone',
      value: '+91 7357593544',
      link: 'tel:+917357593544',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: UilMapMarker,
      title: 'Location',
      value: 'India',
      link: null,
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  const socialLinks = [
    { icon: UilGithub, url: 'https://github.com/lavneetsh', label: 'GitHub' },
    { icon: UilLinkedin, url: 'https://linkedin.com/in/lavneet-sharma-99312b202/', label: 'LinkedIn' },
    { icon: UilInstagram, url: 'https://instagram.com/lavneet_sharma_?igshid=YmJhNjkzNzY=', label: 'Instagram' },
  ];

  return (
    <section id="contact" className="relative py-32 bg-dark-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-sm font-medium mb-4">
            Let's Connect
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's create something amazing together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">Let's talk about everything!</h3>
              <p className="text-gray-400 mb-8">
                Don't like forms? Send me an email or connect with me on social media.
                I'm always open to discussing new projects and opportunities.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-purple-500/30 transition-all backdrop-blur-sm overflow-hidden"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
                    <div className="relative z-10 flex items-center gap-4">
                      <div className={`w-14 h-14 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <Icon size="24" className="text-white" />
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm mb-1">{info.title}</p>
                        {info.link ? (
                          <a href={info.link} className="text-white font-semibold hover:text-purple-400 transition-colors">
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-white font-semibold">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-gray-400 mb-4">Follow me on social media</p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-purple-500/30 transition-all"
                    >
                      <Icon size="24" className="text-gray-400 group-hover:text-purple-400 transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl" />

            <form ref={form} onSubmit={sendEmail} className="relative z-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Name</label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    className="w-full px-4 py-3 bg-dark-800 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500 text-white placeholder-gray-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Email</label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    className="w-full px-4 py-3 bg-dark-800 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500 text-white placeholder-gray-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-dark-800 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500 text-white placeholder-gray-500 transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">Message</label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-dark-800 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500 text-white placeholder-gray-500 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white font-bold hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>

              {/* Status Message */}
              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-center gap-2 p-4 rounded-xl ${status.type === 'success'
                      ? 'bg-green-500/10 border border-green-500/30 text-green-400'
                      : 'bg-red-500/10 border border-red-500/30 text-red-400'
                    }`}
                >
                  {status.type === 'success' ? (
                    <UilCheckCircle size="20" />
                  ) : (
                    <UilTimes size="20" />
                  )}
                  <span className="font-medium">{status.message}</span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Lavneet Sharma. Crafted with passion using React & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
