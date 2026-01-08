import { Facebook, Instagram, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const SocialMedia = () => {
  const socials = [
    {
      name: 'Facebook',
      icon: Facebook,
      href: 'https://www.facebook.com/share/1A8BsBr6tc/',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://www.instagram.com/travel.lakshitha?igsh=eWN6MTBsNzd1a3J6',
      color: 'hover:text-pink-500'
    },
    {
      name: 'TikTok',
      icon: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      ),
      href: 'https://www.tiktok.com/@kalumprasad1500?_r=1&_t=ZS-92pzsVataFw',
      color: 'hover:text-foreground'
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:Kalumprasad1500@gmail.com',
      color: 'hover:text-red-500'
    }
  ];

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            We Are On
          </h2>
          
          <div className="flex justify-center items-center gap-8 md:gap-12">
            {socials.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target={social.name !== 'Email' ? '_blank' : undefined}
                rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.2 }}
                className={`text-muted-foreground transition-colors duration-300 ${social.color}`}
                aria-label={social.name}
              >
                <social.icon className="w-8 h-8" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialMedia;
