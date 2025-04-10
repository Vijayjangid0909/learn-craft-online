
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="hero-pattern py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tight">
            Master Coding with Expert-Led
            <span className="text-accent1 block mt-2">
              Interactive Courses
            </span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
            Learn to code through hands-on projects, live coding sessions, and a
            supportive community. From beginners to professionals, we have
            courses for everyone.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/courses">
              <Button size="lg" className="px-8 py-6 text-lg">
                Browse Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/signup">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg bg-white"
              >
                Try For Free
              </Button>
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <div className="flex items-center">
              <div className="bg-white p-2 rounded-full shadow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-accent1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span className="ml-3 text-gray-700 font-medium">
                100+ Courses
              </span>
            </div>

            <div className="flex items-center">
              <div className="bg-white p-2 rounded-full shadow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-accent2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <span className="ml-3 text-gray-700 font-medium">
                Project-Based Learning
              </span>
            </div>

            <div className="flex items-center">
              <div className="bg-white p-2 rounded-full shadow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-accent3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <span className="ml-3 text-gray-700 font-medium">
                Expert Instructors
              </span>
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="relative w-full max-w-4xl">
            <div className="code-block shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-xs text-gray-400">index.js</span>
              </div>
              <div className="typing-demo overflow-hidden">
                <span className="code-keyword">function</span>{" "}
                <span className="text-white">greetStudent</span>
                <span className="text-accent2">(</span>name
                <span className="text-accent2">)</span>{" "}
                <span className="text-accent2">{"{"}</span>
              </div>
              <div className="ml-4 mt-1 typing-demo overflow-hidden" style={{ animationDelay: "1s"}}>
                <span className="code-keyword">return</span>{" "}
                <span className="code-string">`Welcome to CodeLearn, ${"{"}name{"}"
                }!`</span>;
              </div>
              <div className="typing-demo overflow-hidden" style={{ animationDelay: "2s"}}>
                <span className="text-accent2">{"}"}</span>
              </div>
              <div className="mt-4 typing-demo overflow-hidden" style={{ animationDelay: "2.5s"}}>
                <span className="text-white">console</span>.
                <span className="text-accent3">log</span>
                <span className="text-accent2">(</span>
                <span className="text-white">greetStudent</span>
                <span className="text-accent2">(</span>
                <span className="code-string">"Alex"</span>
                <span className="text-accent2">)</span>
                <span className="text-accent2">)</span>;
              </div>
              <div className="mt-4 text-green-400 typing-demo overflow-hidden" style={{ animationDelay: "3s"}}>
                {">"} Welcome to CodeLearn, Alex!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
