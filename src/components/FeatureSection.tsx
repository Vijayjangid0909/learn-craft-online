
import { Code, Laptop, Users, Video, BookOpen, Award } from "lucide-react";

const features = [
  {
    name: "Live Coding Sessions",
    description:
      "Learn by watching and participating in live coding sessions with our expert instructors.",
    icon: Code,
    color: "bg-blue-100 text-blue-600",
  },
  {
    name: "Project-Based Learning",
    description:
      "Build real-world projects that you can include in your portfolio while learning key concepts.",
    icon: Laptop,
    color: "bg-purple-100 text-purple-600",
  },
  {
    name: "Community Support",
    description:
      "Join a community of learners where you can ask questions, share your progress, and collaborate.",
    icon: Users,
    color: "bg-green-100 text-green-600",
  },
  {
    name: "Video Tutorials",
    description:
      "Access high-quality video tutorials that break down complex concepts into easy-to-understand segments.",
    icon: Video,
    color: "bg-red-100 text-red-600",
  },
  {
    name: "Comprehensive Curriculum",
    description:
      "Follow structured learning paths designed by industry experts to progress from beginner to advanced levels.",
    icon: BookOpen,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    name: "Certificates",
    description:
      "Earn certificates upon course completion to showcase your newly acquired skills to potential employers.",
    icon: Award,
    color: "bg-teal-100 text-teal-600",
  },
];

const FeatureSection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Choose{" "}
            <span className="text-accent1">CodeLearn</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Our platform offers everything you need to start your coding journey
            and advance your programming skills.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="h-full p-6 rounded-lg border hover:shadow-md transition-all">
                  <div
                    className={`w-12 h-12 ${feature.color} rounded-md p-2 flex items-center justify-center`}
                  >
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
