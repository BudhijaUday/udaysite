// import React, { useState } from 'react';

// export default function Contact() {
//   const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

//   const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     alert('Thank you! I\'ll get back to you soon.');
//     setFormData({ name: '', email: '', subject: '', message: '' });
//   };

//   return (
//     <section id="contact" className="contact">
//       <div className="container">
//         <h2 className="section-title">Contact Me</h2>
//         <form className="contact-form" onSubmit={handleSubmit}>
//           <div className="form-grid">
//             <div className="form-left">
//               <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="form-input" />
//               <input type="email" name="email" placeholder="Email address" value={formData.email} onChange={handleChange} className="form-input" />
//               <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} className="form-input" />
//             </div>
//             <div>
//               <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} className="form-textarea" />
//             </div>
//           </div>
//           <button type="submit" className="submit-btn">Submit</button>
//         </form>
//       </div>
//     </section>
//   );
// }


import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  // Replace this with YOUR Formspree endpoint
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mvgrladr';
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('Error sending message. Please try again later.');
      }
    } catch (error) {
      console.error(error);
      setStatus('Error sending message. Please try again later.');
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-left">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="form-textarea"
                />
              </div>
            </div>
            
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>

          {status && <p style={{ marginTop: '1rem', textAlign: 'center' }}>{status}</p>}
        </div>
      </div>
    </section>
  );
};

export default Contact;
