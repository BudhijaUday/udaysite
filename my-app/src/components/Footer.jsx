import React from 'react';
import { Twitter, Github, Linkedin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com/home?lang=en-in", label: "Twitter" },
    { icon: Github, href: "https://github.com/BudhijaUday", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/feed/", label: "LinkedIn" },
    { icon: Phone, href: "tel:8059000091", label: "Phone" },
    { icon: Mail, href: "mailto:udaybudhija26@gmail.com", label: "Email" }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <h4 className="footer-title">/** Or get me on... */</h4>
        <div className="social-links">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="social-link" aria-label={label}>
              <Icon size={32} />
            </a>
          ))}
        </div>
        <div className="footer-bottom">
          <p>© 2025 Uday Budhija. Built with React.</p>
        </div>
      </div>
    </footer>
  );
}
