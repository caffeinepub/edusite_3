import { CourseCard } from "@/components/CourseCard";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetAllCourses } from "@/hooks/useQueries";
import { Link } from "@tanstack/react-router";
import {
  Award,
  CheckCircle,
  ChevronRight,
  Globe,
  Star,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

const benefits = [
  {
    icon: Zap,
    title: "Learn at Your Pace",
    description:
      "Access all course materials anytime, anywhere. Pause, rewind, and replay at will — your schedule, your rules.",
  },
  {
    icon: Users,
    title: "Expert Instructors",
    description:
      "Our instructors bring years of real-world experience to every lesson, ensuring practical, job-ready skills.",
  },
  {
    icon: Award,
    title: "Earn Certificates",
    description:
      "Receive recognized certificates on course completion to boost your resume and stand out in the job market.",
  },
];

const stats = [
  { value: "50K+", label: "Active Learners" },
  { value: "200+", label: "Expert Courses" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "120+", label: "Countries" },
];

export function HomePage() {
  const { data: courses, isLoading } = useGetAllCourses();
  const featuredCourses = courses?.slice(0, 3) ?? [];

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 hero-bg"
          style={{
            backgroundImage: `url('/assets/generated/hero-education.dim_1400x700.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-edu-navy-deep/70 via-edu-navy/60 to-edu-navy-deep/80" />

        {/* Decorative blobs */}
        <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 rounded-full bg-accent/20 blur-3xl pointer-events-none" />

        <div className="relative container mx-auto px-4 max-w-7xl pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 mb-6">
              <Badge className="bg-accent/20 text-accent border-accent/30 backdrop-blur-sm px-3 py-1 font-semibold">
                <Star className="w-3.5 h-3.5 mr-1.5 fill-current" />
                #1 Rated Online Learning Platform
              </Badge>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.05]">
              Learn Without{" "}
              <span className="relative">
                <span className="text-gradient bg-gradient-to-r from-cyan-300 via-teal-300 to-emerald-300 bg-clip-text text-transparent">
                  Limits
                </span>
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/70 mb-10 leading-relaxed max-w-xl">
              Unlock your potential with world-class courses taught by industry
              experts. Start your learning journey today — wherever you are.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/courses">
                <Button
                  data-ocid="hero.primary_button"
                  size="lg"
                  className="font-semibold text-base px-8 py-6 bg-primary hover:bg-primary/90 shadow-hero"
                >
                  Explore Courses
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="font-semibold text-base px-8 py-6 border-white/30 text-white hover:bg-white/10 hover:border-white/50 bg-transparent"
                >
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 mt-12">
              {[
                "No credit card required",
                "Cancel anytime",
                "Free starter courses",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-white/60"
                >
                  <CheckCircle className="w-4 h-4 text-accent" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md border-t border-white/10">
          <div className="container mx-auto px-4 max-w-7xl py-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="font-display font-bold text-2xl text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/60 mt-0.5">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED COURSES */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <Badge variant="secondary" className="mb-4 px-3 py-1 font-semibold">
              Featured Courses
            </Badge>
            <h2 className="font-display text-4xl font-bold text-foreground mb-4">
              Start With Our Best
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Hand-picked courses from top instructors, designed to get you
              results fast.
            </p>
          </motion.div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-border bg-card p-6 space-y-4"
                >
                  <Skeleton className="h-4 w-24 rounded-full" />
                  <Skeleton className="h-6 w-4/5" />
                  <Skeleton className="h-16 w-full" />
                  <Skeleton className="h-10 w-full rounded-lg" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredCourses.map((course, i) => (
                <CourseCard
                  key={course.id.toString()}
                  course={course}
                  index={i + 1}
                />
              ))}
            </div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link to="/courses">
              <Button
                variant="outline"
                size="lg"
                className="font-semibold border-primary/30 text-primary hover:bg-primary/5"
              >
                View All Courses
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-secondary/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <Badge variant="secondary" className="mb-4 px-3 py-1 font-semibold">
              Why EduSite
            </Badge>
            <h2 className="font-display text-4xl font-bold text-foreground mb-4">
              Built for Modern Learners
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              We built EduSite with one goal: make quality education accessible
              to everyone, everywhere.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="bg-card rounded-2xl p-8 border border-border hover:shadow-card-hover transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-xl text-card-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-bg" />
        <div className="absolute inset-0 bg-edu-navy-deep/80" />
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
        <div className="relative container mx-auto px-4 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center gap-2 mb-5">
              <Globe className="w-5 h-5 text-accent" />
              <span className="text-accent font-semibold text-sm">
                Join 50,000+ learners worldwide
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-5">
              Ready to Transform Your Career?
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-lg mx-auto">
              Get unlimited access to 200+ courses and start building the future
              you deserve.
            </p>
            <Link to="/courses">
              <Button
                size="lg"
                className="font-semibold text-base px-10 py-6 bg-primary shadow-hero"
              >
                Get Started Free
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
