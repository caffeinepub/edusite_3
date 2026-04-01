import { CourseCard } from "@/components/CourseCard";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetAllCourses } from "@/hooks/useQueries";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { motion } from "motion/react";
import { useMemo, useState } from "react";

const DIFFICULTIES = ["All", "Beginner", "Intermediate", "Advanced"];
const CATEGORIES = [
  "All",
  "Math",
  "Science",
  "Programming",
  "History",
  "English",
  "Arts",
  "India Studies",
];

export function CoursesPage() {
  const { data: courses, isLoading } = useGetAllCourses();
  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState("All");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    if (!courses) return [];
    return courses.filter((c) => {
      const matchSearch =
        !search ||
        c.title.toLowerCase().includes(search.toLowerCase()) ||
        c.description.toLowerCase().includes(search.toLowerCase()) ||
        c.category.toLowerCase().includes(search.toLowerCase());
      const matchDiff = difficulty === "All" || c.difficulty === difficulty;
      const matchCat = category === "All" || c.category === category;
      return matchSearch && matchDiff && matchCat;
    });
  }, [courses, search, difficulty, category]);

  const hasFilters = search || difficulty !== "All" || category !== "All";

  const clearFilters = () => {
    setSearch("");
    setDifficulty("All");
    setCategory("All");
  };

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-edu-navy-deep to-edu-navy overflow-hidden">
        <div className="absolute inset-0 noise-texture pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        <div className="relative container mx-auto px-4 max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="bg-accent/20 text-accent border-accent/30 mb-4 px-3 py-1 font-semibold">
              All Courses
            </Badge>
            <h1 className="font-display text-5xl font-bold text-white mb-4">
              Expand Your Knowledge
            </h1>
            <p className="text-white/70 text-lg max-w-xl mx-auto">
              Browse our full catalog of expert-led courses and find the perfect
              path for your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 z-40 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 max-w-7xl py-4">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                data-ocid="courses.search_input"
                placeholder="Search courses..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 bg-muted/50 border-transparent focus:border-primary/30"
              />
            </div>

            {/* Difficulty filter */}
            <div className="flex items-center gap-1 flex-wrap">
              <SlidersHorizontal className="w-4 h-4 text-muted-foreground mr-1" />
              {DIFFICULTIES.map((d) => (
                <button
                  type="button"
                  key={d}
                  onClick={() => setDifficulty(d)}
                  className={`text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-200 ${
                    difficulty === d
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>

            {/* Clear filters */}
            {hasFilters && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="text-muted-foreground hover:text-foreground gap-1.5"
              >
                <X className="w-3.5 h-3.5" />
                Clear
              </Button>
            )}
          </div>

          {/* Category tabs */}
          <div className="flex gap-2 mt-3 overflow-x-auto pb-1 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                type="button"
                key={cat}
                onClick={() => setCategory(cat)}
                className={`text-xs font-medium px-3 py-1.5 rounded-full whitespace-nowrap transition-all duration-200 flex-shrink-0 ${
                  category === cat
                    ? "bg-accent text-accent-foreground"
                    : "bg-transparent text-muted-foreground hover:text-foreground border border-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Results count */}
          {!isLoading && (
            <p className="text-sm text-muted-foreground mb-6">
              {filtered.length} course{filtered.length !== 1 ? "s" : ""} found
              {hasFilters ? " matching your filters" : ""}
            </p>
          )}

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(["a", "b", "c", "d", "e", "f"] as const).map((id) => (
                <div
                  key={id}
                  data-ocid="courses.loading_state"
                  className="rounded-2xl border border-border bg-card p-6 space-y-4"
                >
                  <Skeleton className="h-4 w-24 rounded-full" />
                  <Skeleton className="h-6 w-4/5" />
                  <Skeleton className="h-20 w-full" />
                  <div className="flex gap-2">
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="h-4 w-16" />
                  </div>
                  <Skeleton className="h-10 w-full rounded-lg" />
                </div>
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div data-ocid="courses.empty_state" className="text-center py-24">
              <div className="w-16 h-16 rounded-2xl bg-muted mx-auto mb-4 flex items-center justify-center">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-2">
                No courses found
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Try adjusting your search or filters to find what you're looking
                for.
              </p>
              <Button variant="outline" onClick={clearFilters}>
                Clear all filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((course, i) => (
                <CourseCard
                  key={course.id.toString()}
                  course={course}
                  index={i + 1}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
