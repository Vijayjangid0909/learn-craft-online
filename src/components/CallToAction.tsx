
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <div className="py-12 bg-accent1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to Start Your Coding Journey?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-blue-100">
            Join thousands of students already learning to code on our platform.
            Start with free courses or unlock premium content.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link to="/signup">
              <Button
                size="lg"
                className="px-8 bg-white text-accent1 hover:bg-gray-100"
              >
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/courses">
              <Button
                size="lg"
                variant="outline"
                className="px-8 text-white border-white hover:bg-blue-700"
              >
                Browse Courses
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
