
import { Link } from "react-router-dom";
import FooterBrand from "./footer/FooterBrand";
import FooterLinks from "./footer/FooterLinks";
import FooterContact from "./footer/FooterContact";

const Footer = () => {
  const quickLinks = [
    { to: "/courses", label: "Courses" },
    { to: "/pricing", label: "Pricing" },
    { to: "/blog", label: "Blog" },
    { to: "/about", label: "About Us" },
    { to: "/contact", label: "Contact" },
  ];

  const courseCategories = [
    { to: "/courses?category=web", label: "Web Development" },
    { to: "/courses?category=mobile", label: "Mobile Development" },
    { to: "/courses?category=data", label: "Data Science" },
    { to: "/courses?category=ai", label: "Artificial Intelligence" },
    { to: "/courses?category=devops", label: "DevOps & Cloud" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <FooterBrand />
          <FooterLinks title="Quick Links" links={quickLinks} />
          <FooterLinks title="Course Categories" links={courseCategories} />
          <FooterContact />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
