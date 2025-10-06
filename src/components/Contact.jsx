import React, { useState } from 'react';
import { Send, Mail, MapPin, Phone, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm('mgvnzyrg');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    requestType: 'Mobile App',
    budget: '',
    timeline: '',
    message: '',
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await handleSubmit(e);
    if (state.succeeded) {
      setFormData({
        name: '',
        email: '',
        phone: '',
        requestType: 'Mobile App',
        budget: '',
        timeline: '',
        message: '',
      });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get In <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's work together to bring your ideas to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 space-y-6"
          >
            <div className="glass rounded-2xl p-6 space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-lg">
                  <Mail className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-sm text-gray-400">asrarhakaik@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-sm text-gray-400">Kuala Lumpur, Malaysia</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-lg">
                  <Phone className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-sm text-gray-400">+601137063745</p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <h3 className="font-semibold mb-3">Response Time</h3>
              <p className="text-sm text-gray-400">
                I typically respond to all inquiries within <span className="text-primary-400 font-semibold">24-48 hours</span>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="glass rounded-2xl p-8">
              <AnimatePresence mode="wait">
                {state.succeeded ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-green-400">Message Sent Successfully!</h3>
                    <p className="text-gray-400">
                      Thanks for reaching out! I'll get back to you within 24–48 hours.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleFormSubmit}
                    className="space-y-6"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                          placeholder="+60 12 345 6789"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Request Type *</label>
                        <select
                          name="requestType"
                          value={formData.requestType}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary-500 focus:outline-none transition-colors text-white"
                          style={{
                            colorScheme: 'dark'
                          }}
                        >
                          <option value="Mobile App" className="bg-gray-800 text-white">Mobile App</option>
                          <option value="Web App" className="bg-gray-800 text-white">Web App</option>
                          <option value="Backend/API" className="bg-gray-800 text-white">Backend/API</option>
                          <option value="Bug Fix" className="bg-gray-800 text-white">Bug Fix</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Budget</label>
                        <input
                          type="text"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                          placeholder="$1000 - $5000"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Timeline</label>
                        <input
                          type="text"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                          placeholder="2-4 weeks"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary-500 focus:outline-none transition-colors resize-none"
                        placeholder="Tell me about your project..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300"
                    >
                      Send Message
                      <Send className="w-5 h-5" />
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
