import React from 'react';
import { Mail, ShieldCheck, MapPin, Github, Twitter, Linkedin, Globe } from 'lucide-react';
import { Logo } from './Logo';
import { FooterBackgroundGradient, TextHoverEffect } from './ui/hover-footer';

export const Footer: React.FC = () => {
  const footerLinks = [
    {
      title: 'Platform',
      links: [
        { label: 'Overview', href: '#product' },
        { label: 'Deployments', href: '#deploy' },
        { label: 'Infrastructure', href: '#product' },
        { label: 'Monitoring', href: '#monitoring', pulse: true },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Documentation', href: '#how-it-works' },
        { label: 'CLI Reference', href: '#how-it-works' },
        { label: 'Architecture Guide', href: '#how-it-works' },
        { label: 'Changelog', href: '#how-it-works' },
      ],
    },
    {
      title: 'Security',
      links: [
        { label: 'SOC-2 Type II', href: '#product' },
        { label: 'Zero-Trust IAM', href: '#product' },
        { label: 'Privacy Policy', href: '#product' },
        { label: 'Terms of Service', href: '#product' },
      ],
    },
  ];

  const contactInfo = [
    {
      icon: <Mail size={16} className="text-[#E879F9]" />,
      text: 'ops@cloudpilot.io',
      href: 'mailto:ops@cloudpilot.io',
    },
    {
      icon: <ShieldCheck size={16} className="text-[#E879F9]" />,
      text: 'Enterprise SOC-2 Certified',
    },
    {
      icon: <MapPin size={16} className="text-[#E879F9]" />,
      text: 'San Francisco, CA & Global Edge',
    },
  ];

  const socialLinks = [
    { icon: <Github size={18} />, label: 'GitHub', href: '#' },
    { icon: <Twitter size={18} />, label: 'Twitter', href: '#' },
    { icon: <Linkedin size={18} />, label: 'LinkedIn', href: '#' },
    { icon: <Globe size={18} />, label: 'Network', href: '#' },
  ];

  return (
    <footer className="relative h-fit rounded-3xl overflow-hidden mx-4 sm:mx-8 mb-8 mt-24 border border-[#C069FF]/30 bg-[#130723]/90 backdrop-blur-xl shadow-3d-deep">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 pt-14 pb-8 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-8 lg:gap-12 pb-12">
          {/* Brand section */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <div className="flex items-center space-x-3">
              <Logo size="md" />
              <span className="text-white text-2xl font-extrabold tracking-tight">CloudPilot</span>
            </div>
            <p className="text-sm leading-relaxed text-muted-text max-w-sm">
              Your cloud infrastructure. One command center. Deploy, monitor, and scale your Kubernetes and multi-cloud environments seamlessly.
            </p>
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-secondary/80 border border-[#C069FF]/30 font-mono text-xs text-muted-text">
                <span className="w-2 h-2 rounded-full bg-[#E879F9] animate-pulse" />
                <span className="text-foreground font-semibold">All Systems Operational</span>
              </div>
            </div>
          </div>

          {/* Footer link sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-5 font-mono">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="relative">
                    <a
                      href={link.href}
                      className="text-sm text-muted-text hover:text-[#E879F9] transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>{link.label}</span>
                      {link.pulse && (
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#E879F9] animate-pulse" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact section */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-5 font-mono">
              Contact & Trust
            </h4>
            <ul className="space-y-3.5">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-center space-x-2.5 text-xs text-muted-text">
                  <span className="shrink-0">{item.icon}</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="hover:text-[#E879F9] transition-colors font-mono"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="font-mono">{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-t border-[#C069FF]/20 my-8" />

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs font-mono text-muted-text/80 space-y-4 md:space-y-0">
          {/* Social icons */}
          <div className="flex space-x-5">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-muted-text hover:text-[#E879F9] transition-colors p-1"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} CloudPilot Technologies. All rights reserved.
          </p>
        </div>
      </div>

      {/* Giant Interactive Text Hover Effect */}
      <div className="lg:flex hidden h-[26rem] -mt-44 -mb-28 justify-center items-center pointer-events-auto">
        <TextHoverEffect text="CLOUDPILOT" className="z-40 max-w-5xl" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
};

export default Footer;
