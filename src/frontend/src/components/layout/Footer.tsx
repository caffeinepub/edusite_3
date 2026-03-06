import { Link } from "@tanstack/react-router";
import { BookOpen, Mail, MapPin, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Courses", to: "/courses" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const courses = [
  { label: "Web Development", to: "/courses" },
  { label: "Data Science", to: "/courses" },
  { label: "UI/UX Design", to: "/courses" },
  { label: "Mobile Development", to: "/courses" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const hostname = window.location.hostname;
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer className="bg-edu-navy-deep text-white/80 pt-16 pb-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-xl text-white">
                EduSite
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/60 mb-5">
              Empowering learners worldwide with high-quality education. Learn
              at your own pace, on your own terms.
            </p>
            <div className="flex flex-col gap-2 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent" />
                <span>hello@edusite.io</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent" />
                <span>+1 (555) 012-3456</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                <span>San Francisco, CA 94102</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Popular Courses
            </h4>
            <ul className="flex flex-col gap-2">
              {courses.map((course) => (
                <li key={course.label}>
                  <Link
                    to={course.to}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {course.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter hint */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Stay Updated
            </h4>
            <p className="text-sm text-white/60 mb-4 leading-relaxed">
              Get the latest courses and learning resources delivered to your
              inbox.
            </p>
            <Link to="/contact">
              <button
                type="button"
                className="text-sm font-semibold text-white bg-primary/80 hover:bg-primary px-4 py-2 rounded-lg transition-colors duration-200"
              >
                Contact Us →
              </button>
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <span>© {year} EduSite. All rights reserved.</span>
          <span>
            Built with ♥ using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-white transition-colors"
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
