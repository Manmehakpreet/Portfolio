import { CONFIG } from "@/lib/config";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, ArrowUpRight } from "lucide-react";

export function Contact() {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "manmehakpreet1@gmail.com",
      href: "mailto:manmehakpreet1@gmail.com?subject=Portfolio%20Inquiry",
      color: "bg-red-500/10 text-red-500 border-red-500/20",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "manmehakpreet-singh",
      href: CONFIG.personal.socials.linkedin,
      color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "manmehakpreet",
      href: CONFIG.personal.socials.github,
      color: "bg-gray-500/10 text-gray-400 border-gray-500/20",
    },
  ];

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-heading mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Available for full-stack development opportunities and contract engagements.
            Feel free to reach out directly.
          </p>
        </div>

        <div className="space-y-4">
          {contactLinks.map((link, idx) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel={link.label !== "Email" ? "noreferrer" : undefined}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-xl border border-border/50 bg-card hover:border-primary/50 hover:shadow-md transition-all duration-300 group cursor-pointer"
              >
                <div className={`p-3 rounded-lg border ${link.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-grow">
                  <p className="text-sm text-muted-foreground">{link.label}</p>
                  <p className="font-medium">{link.value}</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>{CONFIG.personal.location}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
