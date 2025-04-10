
import { User } from "lucide-react";

const testimonials = [
  {
    content:
      "CodeLearn transformed my career. I went from knowing nothing about programming to landing a full-stack developer job in just 6 months. The project-based approach and supportive community made all the difference.",
    author: "Alex Johnson",
    role: "Full-Stack Developer",
    avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    content:
      "I tried many online platforms before, but CodeLearn stands out with its interactive sessions and real-time feedback. The instructors are incredibly knowledgeable and always available to help.",
    author: "Sarah Miller",
    role: "Frontend Engineer",
    avatarUrl: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    content:
      "As someone switching careers from marketing to tech, I was intimidated at first. But CodeLearn's step-by-step curriculum and practical projects gave me the confidence to make the leap. Now I'm working as a junior developer!",
    author: "Michael Chen",
    role: "Junior Software Developer",
    avatarUrl: "https://randomuser.me/api/portraits/men/22.jpg",
  },
];

const Testimonials = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What Our Students Say
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Success stories from students who transformed their careers through
            our platform.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
            >
              <div className="flex-1">
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
                <div className="mt-6 flex items-center">
                  {testimonial.avatarUrl ? (
                    <img
                      src={testimonial.avatarUrl}
                      alt={`${testimonial.author} avatar`}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                      <User className="h-6 w-6 text-gray-500" />
                    </div>
                  )}
                  <div>
                    <h4 className="text-lg font-semibold">
                      {testimonial.author}
                    </h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
