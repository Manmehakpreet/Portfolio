import { CONFIG } from "@/lib/config";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function Education() {
  return (
    <section id="education" className="py-24 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold font-heading mb-4">Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic foundation in computer science and programming.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {CONFIG.education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-background p-6 rounded-xl border border-border/50 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 mb-2">
                    <div>
                      <h3 className="text-xl font-bold font-heading">{edu.degree}</h3>
                      <p className="text-primary font-medium">{edu.institution}</p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1">
                      <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                        {edu.period}
                      </span>
                      <Badge variant={edu.status === "In Progress" ? "default" : "secondary"}>
                        {edu.status}
                      </Badge>
                    </div>
                  </div>
                  {edu.coursework.length > 0 && (
                    <div className="mt-4">
                      <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground mb-2">
                        <BookOpen className="w-4 h-4" />
                        <span>Relevant Coursework</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, i) => (
                          <Badge key={i} variant="outline" className="font-normal bg-muted/50">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
