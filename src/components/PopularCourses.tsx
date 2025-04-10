
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import CourseCard from "./CourseCard";
import { popularCourses } from "@/data/courses";

const PopularCourses = () => {
  const [visibleCourses, setVisibleCourses] = useState(6);

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Popular Courses
          </h2>
          <Link to="/courses">
            <Button variant="outline" className="flex items-center">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularCourses.slice(0, visibleCourses).map((course) => (
            <CourseCard
              key={course.id}
              id={course.id}
              title={course.title}
              description={course.description}
              level={course.level}
              duration={course.duration}
              rating={course.rating}
              imageSrc={course.imageSrc}
              category={course.category}
              price={course.price}
              discount={course.discount}
            />
          ))}
        </div>

        {visibleCourses < popularCourses.length && (
          <div className="mt-12 text-center">
            <Button
              onClick={() => setVisibleCourses((prev) => prev + 3)}
              variant="outline"
              className="px-8"
            >
              Load More Courses
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PopularCourses;
