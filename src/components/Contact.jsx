import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaPaperPlane, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  const formRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      await emailjs.sendForm(
        'service_n96gx1c',
        'template_030e3ng',
        formRef.current,
        '7Wx4n9ICY4UxRFfw6'
      );
      setSent(true);
      formRef.current.reset();
    } catch (error) {
      alert('Failed to send message. Please try again.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-transparent to-purple-900/10">
      <div className="max-w-4xl mx-auto" ref={sectionRef}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Get In <span className="text-purple-500">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto mb-12 rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass p-8 md:p-12 glow-border"
        >
          {sent ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">✅</div>
              <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
              <p className="text-gray-400">Thank you for reaching out. I'll get back to you soon.</p>
              <button
                onClick={() => setSent(false)}
                className="mt-6 px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-full transition"
              >
                Send Another
              </button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-400 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-purple-500 focus:outline-none transition text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-purple-500 focus:outline-none transition text-white"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-400 mb-2">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-purple-500 focus:outline-none transition text-white resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="w-full py-4 bg-purple-500 hover:bg-purple-600 rounded-xl font-semibold flex items-center justify-center gap-2 transition shadow-glow disabled:opacity-50"
              >
                {sending ? (
                  'Sending...'
                ) : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </button>
            </form>
          )}

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-8 pt-8 border-t border-white/10">
            <a
              href="mailto:asmita@example.com"
              className="p-3 glass rounded-full hover:shadow-glow transition"
            >
              <FaEnvelope size={20} />
            </a>
            <a
              href="[github.com](https://github.com/asmita-patil-ohf)"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-full hover:shadow-glow transition"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="[linkedin.com](https://www.linkedin.com/in/asmita-patil-436a62332/)"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-full hover:shadow-glow transition"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
