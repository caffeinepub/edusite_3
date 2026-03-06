import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { BarChart3, ChevronRight, Clock } from "lucide-react";
import { motion } from "motion/react";
import type { Course } from "../backend.d";

const difficultyColors: Record<string, string> = {
  Beginner: "bg-emerald-100 text-emerald-700 border-emerald-200",
  Intermediate: "bg-amber-100 text-amber-700 border-amber-200",
  Advanced: "bg-rose-100 text-rose-700 border-rose-200",
};

const categoryColors: Record<string, string> = {
  "Web Development": "bg-blue-100 text-blue-700",
  "Data Science": "bg-purple-100 text-purple-700",
  "UI/UX Design": "bg-pink-100 text-pink-700",
  "Mobile Development": "bg-orange-100 text-orange-700",
  "Cloud Computing": "bg-cyan-100 text-cyan-700",
  Cybersecurity: "bg-red-100 text-red-700",
};

interface CourseCardProps {
  course: Course;
  index: number;
}

export function CourseCard({ course, index }: CourseCardProps) {
  const diffColor =
    difficultyColors[course.difficulty] ||
    "bg-muted text-muted-foreground border-border";
  const catColor =
    categoryColors[course.category] || "bg-secondary text-secondary-foreground";

  return (
    <motion.div
      data-ocid={`course.item.${index}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="group bg-card rounded-2xl border border-border overflow-hidden card-hover flex flex-col"
    >
      {/* Category stripe top */}
      <div className="h-1.5 w-full bg-gradient-to-r from-primary via-accent to-edu-cyan" />

      <div className="p-6 flex flex-col flex-1">
        {/* Badges */}
        <div className="flex items-center gap-2 mb-4 flex-wrap">
          <span
            className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${catColor}`}
          >
            {course.category}
          </span>
          <span
            className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${diffColor}`}
          >
            {course.difficulty}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-lg text-card-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-200">
          {course.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-3 flex-1">
          {course.description}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-4 mb-5 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>{course.difficulty}</span>
          </div>
        </div>

        {/* CTA */}
        <Link to="/courses/$id" params={{ id: course.id.toString() }}>
          <Button
            data-ocid={`course.enroll_button.${index}`}
            variant="default"
            className="w-full group/btn font-semibold"
          >
            Enroll Now
            <ChevronRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-0.5 transition-transform" />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}
