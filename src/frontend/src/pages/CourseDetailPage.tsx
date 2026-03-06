import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import { useGetCourseById, useSubmitInquiry } from "@/hooks/useQueries";
import { Link, useParams } from "@tanstack/react-router";
import {
  BarChart3,
  BookOpen,
  CheckCircle,
  ChevronLeft,
  Clock,
  Loader2,
  Tag,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

const difficultyColors: Record<string, string> = {
  Beginner: "bg-emerald-100 text-emerald-700 border-emerald-200",
  Intermediate: "bg-amber-100 text-amber-700 border-amber-200",
  Advanced: "bg-rose-100 text-rose-700 border-rose-200",
};

export function CourseDetailPage() {
  const { id } = useParams({ from: "/courses/$id" });
  const courseId = BigInt(id);

  const { data: course, isLoading, isError } = useGetCourseById(courseId);
  const { mutateAsync: submitInquiry, isPending } = useSubmitInquiry();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    try {
      await submitInquiry({ name, email, message, courseId });
      setSubmitted(true);
      toast.success("Enrollment submitted! We'll be in touch soon.");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen pt-24 pb-16">
        <div
          className="container mx-auto px-4 max-w-5xl"
          data-ocid="course.loading_state"
        >
          <Skeleton className="h-4 w-32 mb-8" />
          <Skeleton className="h-10 w-3/4 mb-4" />
          <div className="flex gap-3 mb-6">
            <Skeleton className="h-6 w-24 rounded-full" />
            <Skeleton className="h-6 w-24 rounded-full" />
          </div>
          <Skeleton className="h-40 w-full rounded-xl mb-8" />
          <Skeleton className="h-80 w-full rounded-xl" />
        </div>
      </div>
    );
  }

  if (isError || !course) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <div className="text-center" data-ocid="course.error_state">
          <div className="w-16 h-16 rounded-2xl bg-destructive/10 mx-auto mb-4 flex items-center justify-center">
            <BookOpen className="w-8 h-8 text-destructive" />
          </div>
          <h2 className="font-display font-bold text-2xl text-foreground mb-2">
            Course Not Found
          </h2>
          <p className="text-muted-foreground mb-6">
            This course may have been removed or doesn't exist.
          </p>
          <Link to="/courses">
            <Button>Back to Courses</Button>
          </Link>
        </div>
      </div>
    );
  }

  const diffColor =
    difficultyColors[course.difficulty] ||
    "bg-muted text-muted-foreground border-border";

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-edu-navy-deep to-edu-navy overflow-hidden">
        <div className="absolute inset-0 noise-texture pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        <div className="relative container mx-auto px-4 max-w-5xl">
          <Link
            to="/courses"
            className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white mb-8 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            All Courses
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap gap-2 mb-5">
              <Badge className="bg-accent/20 text-accent border-accent/30 px-3 py-1 font-semibold">
                {course.category}
              </Badge>
              <span
                className={`text-xs font-medium px-2.5 py-0.5 rounded-full border inline-flex items-center ${diffColor}`}
              >
                {course.difficulty}
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              {course.title}
            </h1>

            <div className="flex flex-wrap gap-6 text-white/70 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-accent" />
                <span>{course.difficulty}</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4 text-accent" />
                <span>{course.category}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Course Info */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-card rounded-2xl border border-border p-8"
              >
                <h2 className="font-display font-bold text-2xl text-card-foreground mb-5">
                  About This Course
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {course.description}
                </p>
              </motion.div>

              {/* What you'll learn */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="bg-secondary/40 rounded-2xl p-8"
              >
                <h2 className="font-display font-bold text-xl text-foreground mb-5">
                  What You'll Learn
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Foundational concepts and best practices",
                    "Real-world project experience",
                    "Industry-standard tools and workflows",
                    "Problem-solving techniques",
                    "Code review and collaboration skills",
                    "Portfolio-ready projects",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-foreground"
                    >
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Enrollment Form */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="bg-card rounded-2xl border border-border p-6 sticky top-24"
              >
                {submitted ? (
                  <div
                    data-ocid="course.success_state"
                    className="text-center py-8"
                  >
                    <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-7 h-7 text-emerald-600" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-card-foreground mb-2">
                      You're Enrolled!
                    </h3>
                    <p className="text-sm text-muted-foreground mb-5">
                      We've received your enrollment. Check your email for next
                      steps.
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSubmitted(false)}
                      className="w-full"
                    >
                      Enroll Again
                    </Button>
                  </div>
                ) : (
                  <>
                    <h3 className="font-display font-bold text-xl text-card-foreground mb-1">
                      Enroll Now
                    </h3>
                    <p className="text-sm text-muted-foreground mb-6">
                      Fill in your details and we'll get you started right away.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-1.5">
                        <Label
                          htmlFor="detail-name"
                          className="text-sm font-medium"
                        >
                          Full Name
                        </Label>
                        <Input
                          id="detail-name"
                          data-ocid="contact.name_input"
                          placeholder="Jane Smith"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>

                      <div className="space-y-1.5">
                        <Label
                          htmlFor="detail-email"
                          className="text-sm font-medium"
                        >
                          Email Address
                        </Label>
                        <Input
                          id="detail-email"
                          data-ocid="contact.email_input"
                          type="email"
                          placeholder="jane@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>

                      <div className="space-y-1.5">
                        <Label
                          htmlFor="detail-message"
                          className="text-sm font-medium"
                        >
                          Why do you want to enroll?
                        </Label>
                        <Textarea
                          id="detail-message"
                          data-ocid="contact.textarea"
                          placeholder="Tell us about your goals..."
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          rows={4}
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        data-ocid="contact.submit_button"
                        className="w-full font-semibold"
                        disabled={isPending}
                      >
                        {isPending ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          "Enroll in This Course"
                        )}
                      </Button>
                    </form>
                  </>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
