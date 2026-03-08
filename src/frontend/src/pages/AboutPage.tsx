import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import {
  Award,
  BookOpen,
  Globe,
  Heart,
  Lightbulb,
  Target,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

const team = [
  {
    name: "Mohit Jangid",
    role: "Founder & Owner",
    avatar: "MJ",
    bio: "Passionate educator and entrepreneur with a vision to make quality education accessible to everyone. Mohit founded EduSite to empower learners worldwide.",
    color: "bg-violet-100 text-violet-700",
  },
  {
    name: "Marcus Williams",
    role: "Head of Curriculum",
    avatar: "MW",
    bio: "Ex-Google engineer turned educator. Marcus has designed learning paths for over 10,000 students and specializes in making complex concepts accessible.",
    color: "bg-blue-100 text-blue-700",
  },
  {
    name: "Priya Nair",
    role: "Chief Learning Officer",
    avatar: "PN",
    bio: "Cognitive scientist and learning design expert. Priya applies neuroscience research to create course structures that maximize retention and skill transfer.",
    color: "bg-rose-100 text-rose-700",
  },
];

const values = [
  {
    icon: Target,
    title: "Purposeful Learning",
    description:
      "Every course is designed around real outcomes — not just content delivery.",
  },
  {
    icon: Heart,
    title: "Inclusive by Design",
    description:
      "We build for learners of all backgrounds, abilities, and experience levels.",
  },
  {
    icon: Lightbulb,
    title: "Always Evolving",
    description:
      "Our curriculum is updated quarterly to stay ahead of industry trends.",
  },
];

const stats = [
  { icon: Users, value: "50,000+", label: "Active Students" },
  { icon: BookOpen, value: "200+", label: "Expert Courses" },
  { icon: Globe, value: "120+", label: "Countries" },
  { icon: Award, value: "98%", label: "Completion Rate" },
];

export function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-edu-navy-deep to-edu-navy overflow-hidden">
        <div className="absolute inset-0 noise-texture pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        <div className="relative container mx-auto px-4 max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="bg-accent/20 text-accent border-accent/30 mb-4 px-3 py-1 font-semibold">
              Our Story
            </Badge>
            <h1 className="font-display text-5xl font-bold text-white mb-5">
              Education for Everyone
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              EduSite was founded in 2020 with a simple belief: great education
              shouldn't be locked behind prestige, geography, or cost. We've
              grown from a small startup into a global learning platform — and
              we're just getting started.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Badge
                variant="secondary"
                className="mb-4 px-3 py-1 font-semibold"
              >
                Our Mission
              </Badge>
              <h2 className="font-display text-4xl font-bold text-foreground mb-6">
                Democratizing Access to Quality Education
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We believe that learning is the most powerful tool for personal
                and professional transformation. Our mission is to make
                world-class education available to anyone, anywhere — regardless
                of their background or resources.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From beginner-friendly introductions to advanced professional
                certifications, every course on EduSite is crafted with care,
                reviewed by industry experts, and designed to deliver real,
                measurable results.
              </p>
            </motion.div>

            {/* Stats grid */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-2 gap-5"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="bg-card rounded-2xl border border-border p-6 text-center hover:shadow-card-hover transition-shadow duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="font-display font-bold text-2xl text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-secondary/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <Badge variant="secondary" className="mb-4 px-3 py-1 font-semibold">
              Our Values
            </Badge>
            <h2 className="font-display text-4xl font-bold text-foreground mb-4">
              What We Stand For
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="bg-card rounded-2xl p-8 border border-border hover:shadow-card-hover transition-shadow duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-200">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-xl text-card-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <Badge variant="secondary" className="mb-4 px-3 py-1 font-semibold">
              Meet the Team
            </Badge>
            <h2 className="font-display text-4xl font-bold text-foreground mb-4">
              The People Behind EduSite
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Our team brings together decades of experience in education,
              technology, and design — all united by a passion for learning.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="bg-card rounded-2xl border border-border overflow-hidden group hover:shadow-card-hover transition-shadow duration-300"
              >
                {/* Avatar area */}
                <div className="h-1.5 bg-gradient-to-r from-primary via-accent to-edu-cyan" />
                <div className="p-8">
                  <div
                    className={`w-16 h-16 rounded-2xl ${member.color} flex items-center justify-center font-display font-bold text-xl mb-5`}
                  >
                    {member.avatar}
                  </div>
                  <h3 className="font-display font-bold text-xl text-card-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary font-semibold mb-4">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
