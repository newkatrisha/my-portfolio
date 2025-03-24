
import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-severance-offwhite">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="section-heading">Contact</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-fade-up">
            <p className="text-severance-navy/80 mb-8">
              I'm always open to discussing new projects, opportunities or partnerships. 
              Feel free to get in touch with me using the form or through my contact information.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white rounded-sm shadow-sm">
                  <Mail size={20} className="text-severance-blue" />
                </div>
                <div>
                  <h3 className="font-mono text-severance-navy font-medium mb-1">Email</h3>
                  <p className="text-severance-navy/70">contact@yourname.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white rounded-sm shadow-sm">
                  <Phone size={20} className="text-severance-blue" />
                </div>
                <div>
                  <h3 className="font-mono text-severance-navy font-medium mb-1">Phone</h3>
                  <p className="text-severance-navy/70">+1 (123) 456-7890</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white rounded-sm shadow-sm">
                  <MapPin size={20} className="text-severance-blue" />
                </div>
                <div>
                  <h3 className="font-mono text-severance-navy font-medium mb-1">Location</h3>
                  <p className="text-severance-navy/70">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <form onSubmit={handleSubmit} className="bg-white border border-severance-lightgray rounded-sm p-6">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="mx-auto w-16 h-16 bg-severance-green/10 rounded-full flex items-center justify-center mb-4">
                    <Send className="text-severance-green" size={24} />
                  </div>
                  <h3 className="font-mono text-severance-navy font-medium mb-2">Message Sent!</h3>
                  <p className="text-severance-navy/70">
                    Thank you for your message. I'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-4">
                    <label htmlFor="name" className="block font-mono text-sm text-severance-navy/80 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-severance-lightgray rounded-sm focus:outline-none focus:ring-1 focus:ring-severance-blue"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block font-mono text-sm text-severance-navy/80 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-severance-lightgray rounded-sm focus:outline-none focus:ring-1 focus:ring-severance-blue"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block font-mono text-sm text-severance-navy/80 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-severance-lightgray rounded-sm focus:outline-none focus:ring-1 focus:ring-severance-blue"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 flex items-center justify-center font-mono rounded-sm transition-colors ${
                      isSubmitting
                        ? 'bg-severance-navy/70 text-white cursor-not-allowed'
                        : 'bg-severance-navy text-white hover:bg-severance-navy/90'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="mr-2">Sending</span>
                        <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={16} className="ml-2" />
                      </>
                    )}
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
