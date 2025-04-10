
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthForm from "@/components/AuthForm";

const Signup = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <AuthForm type="signup" />
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
