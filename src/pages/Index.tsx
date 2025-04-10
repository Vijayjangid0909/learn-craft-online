
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureSection from "@/components/FeatureSection";
import PopularCourses from "@/components/PopularCourses";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeatureSection />
      <PopularCourses />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
