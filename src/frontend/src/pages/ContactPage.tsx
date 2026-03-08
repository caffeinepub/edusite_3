import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import { useGetAllCourses, useSubmitInquiry } from "@/hooks/useQueries";
import {
  CheckCircle,
  Loader2,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Mail,
    label: "Email Us",
    value: "hello@edusite.io",
    sub: "We reply within 24 hours",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 98765 43210",
    sub: "Mon–Fri, 9am–6pm IST",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "Malviya Nagar, Jaipur",
    sub: "Rajasthan, India 302017",
  },
];

export function ContactPage() {
  const { data: courses, isLoading: coursesLoading } = useGetAllCourses();
  const { mutateAsync: submitInquiry, isPending } = useSubmitInquiry();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [courseId, setCourseId] = useState<string>("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim() || !email.trim() || !courseId || !message.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      await submitInquiry({
        name,
        email,
        message,
        courseId: BigInt(courseId),
      });
      setSubmitted(true);
      toast.success("Message sent! We'll get back to you soon.");
    } catch {
      setError("Something went wrong. Please try again.");
      toast.error("Failed to send message.");
    }
  };

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
              Get in Touch
            </Badge>
            <h1 className="font-display text-5xl font-bold text-white mb-4">
              We'd Love to Hear From You
            </h1>
            <p className="text-white/70 text-lg max-w-xl mx-auto">
              Have a question about a course? Want to enroll? We're here to help
              you every step of the way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl border border-border p-6 hover:shadow-card-hover transition-shadow duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <info.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                  {info.label}
                </div>
                <div className="font-semibold text-card-foreground">
                  {info.value}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {info.sub}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Main form area */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 space-y-6"
            >
              <div>
                <Badge
                  variant="secondary"
                  className="mb-3 px-3 py-1 font-semibold"
                >
                  Enrollment Inquiry
                </Badge>
                <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                  Start Your Learning Journey
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Select the course you're interested in, fill in your details,
                  and we'll reach out with everything you need to get started.
                </p>
              </div>

              <div className="bg-secondary/60 rounded-2xl p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-sm text-foreground">
                      Personalized Guidance
                    </div>
                    <div className="text-xs text-muted-foreground mt-0.5">
                      Our team will tailor recommendations to your goals.
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-sm text-foreground">
                      Fast Response
                    </div>
                    <div className="text-xs text-muted-foreground mt-0.5">
                      Expect a reply within one business day.
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-sm text-foreground">
                      No Obligation
                    </div>
                    <div className="text-xs text-muted-foreground mt-0.5">
                      Just curious? Ask freely — no pressure to commit.
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-3"
            >
              <div className="bg-card rounded-2xl border border-border p-8">
                {submitted ? (
                  <div
                    data-ocid="contact.success_state"
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-5">
                      <CheckCircle className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="font-display font-bold text-2xl text-card-foreground mb-3">
                      Message Received!
                    </h3>
                    <p className="text-muted-foreground max-w-sm mx-auto mb-6">
                      Thank you for reaching out. Our team will review your
                      inquiry and get back to you within 24 hours.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setSubmitted(false);
                        setCourseId("");
                        setName("");
                        setEmail("");
                        setMessage("");
                      }}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <MessageSquare className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-xl text-card-foreground">
                          Send an Inquiry
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          All fields required
                        </p>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                          <Label
                            htmlFor="contact-name"
                            className="text-sm font-medium"
                          >
                            Full Name
                          </Label>
                          <Input
                            id="contact-name"
                            data-ocid="contact.name_input"
                            placeholder="Jane Smith"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                          />
                        </div>

                        <div className="space-y-1.5">
                          <Label
                            htmlFor="contact-email"
                            className="text-sm font-medium"
                          >
                            Email Address
                          </Label>
                          <Input
                            id="contact-email"
                            data-ocid="contact.email_input"
                            type="email"
                            placeholder="jane@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      {/* Course selector */}
                      <div className="space-y-1.5">
                        <Label className="text-sm font-medium">
                          Course of Interest
                        </Label>
                        {coursesLoading ? (
                          <Skeleton className="h-10 w-full rounded-lg" />
                        ) : (
                          <Select
                            value={courseId}
                            onValueChange={setCourseId}
                            required
                          >
                            <SelectTrigger data-ocid="contact.select">
                              <SelectValue placeholder="Select a course..." />
                            </SelectTrigger>
                            <SelectContent>
                              {courses?.map((course) => (
                                <SelectItem
                                  key={course.id.toString()}
                                  value={course.id.toString()}
                                >
                                  {course.title}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        )}
                      </div>

                      <div className="space-y-1.5">
                        <Label
                          htmlFor="contact-message"
                          className="text-sm font-medium"
                        >
                          Message
                        </Label>
                        <Textarea
                          id="contact-message"
                          data-ocid="contact.textarea"
                          placeholder="Tell us about your goals, experience level, or any questions you have..."
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          rows={5}
                          required
                        />
                      </div>

                      {/* Error state */}
                      {error && (
                        <div
                          data-ocid="contact.error_state"
                          className="text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-lg px-4 py-3"
                        >
                          {error}
                        </div>
                      )}

                      <Button
                        type="submit"
                        data-ocid="contact.submit_button"
                        className="w-full font-semibold py-5"
                        disabled={isPending}
                      >
                        {isPending ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            <span data-ocid="contact.loading_state">
                              Sending...
                            </span>
                          </>
                        ) : (
                          "Send Message"
                        )}
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
