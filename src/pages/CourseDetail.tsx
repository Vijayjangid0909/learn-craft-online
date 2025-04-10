
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { popularCourses } from "@/data/courses";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Star,
  Clock,
  Award,
  ChevronDown,
  ChevronUp,
  Play,
  Lock,
  ShoppingCart,
  Heart,
  Share2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const course = popularCourses.find((c) => c.id === id);
  const [expandedModule, setExpandedModule] = useState<string | null>(null);

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Course Not Found
            </h1>
            <p className="text-gray-600 mb-6">
              The course you are looking for does not exist.
            </p>
            <Link to="/courses">
              <Button>Browse All Courses</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const discountedPrice = course.discount
    ? course.price - (course.price * course.discount) / 100
    : course.price;

  const toggleModule = (moduleTitle: string) => {
    if (expandedModule === moduleTitle) {
      setExpandedModule(null);
    } else {
      setExpandedModule(moduleTitle);
    }
  };

  const totalLessons = course.curriculum.reduce(
    (sum, module) => sum + module.lessons.length,
    0
  );

  const totalDuration = course.curriculum.reduce((sum, module) => {
    const moduleDuration = module.lessons.reduce((lessonSum, lesson) => {
      const minutes = parseInt(lesson.duration.split(" ")[0]);
      return lessonSum + minutes;
    }, 0);
    return sum + moduleDuration;
  }, 0);

  const totalHours = Math.floor(totalDuration / 60);
  const remainingMinutes = totalDuration % 60;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="bg-gray-50">
        {/* Course Header */}
        <div className="bg-primary text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <Badge className="mb-4 bg-accent1">{course.category}</Badge>
                <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                  {course.title}
                </h1>
                <p className="text-lg text-gray-200 mb-6">
                  {course.description}
                </p>

                <div className="flex flex-wrap items-center gap-6 mb-6">
                  <div className="flex items-center">
                    <Star className="fill-yellow-500 stroke-yellow-500 h-5 w-5 mr-1" />
                    <span className="font-medium">{course.rating.toFixed(1)}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-1" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-5 w-5 mr-1" />
                    <span>{course.level}</span>
                  </div>
                </div>

                <div className="flex items-center">
                  <img
                    src={course.instructor.avatar}
                    alt={course.instructor.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-medium">{course.instructor.name}</p>
                    <p className="text-sm text-gray-300">Instructor</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden text-gray-900">
                <div className="relative">
                  <img
                    src={course.imageSrc}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <Button
                      size="lg"
                      className="rounded-full h-16 w-16 flex items-center justify-center"
                    >
                      <Play className="h-8 w-8" />
                    </Button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    {course.discount ? (
                      <div className="flex items-end">
                        <span className="text-3xl font-bold">
                          ${discountedPrice.toFixed(2)}
                        </span>
                        <span className="ml-2 text-lg text-gray-500 line-through">
                          ${course.price.toFixed(2)}
                        </span>
                        <span className="ml-2 text-sm font-medium text-green-600">
                          {course.discount}% off
                        </span>
                      </div>
                    ) : (
                      <span className="text-3xl font-bold">
                        ${course.price.toFixed(2)}
                      </span>
                    )}
                  </div>

                  <Button size="lg" className="w-full mb-4">
                    <ShoppingCart className="mr-2 h-5 w-5" /> Enroll Now
                  </Button>

                  <div className="flex gap-4 mb-6">
                    <Button
                      variant="outline"
                      className="flex-1 flex items-center justify-center"
                    >
                      <Heart className="mr-2 h-5 w-5" /> Wishlist
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 flex items-center justify-center"
                    >
                      <Share2 className="mr-2 h-5 w-5" /> Share
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-medium">This course includes:</h3>
                    <ul className="space-y-2">
                      {course.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <svg
                            className="h-5 w-5 text-green-500 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Tabs defaultValue="curriculum">
            <TabsList className="w-full justify-start mb-8">
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="instructor">Instructor</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="curriculum">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">Course Curriculum</h2>
                  <div className="text-sm text-gray-600">
                    <span>{totalLessons} lessons</span>
                    <span className="mx-2">•</span>
                    <span>
                      {totalHours > 0 ? `${totalHours}h ` : ""}
                      {remainingMinutes}min
                    </span>
                  </div>
                </div>

                <Accordion
                  type="single"
                  collapsible
                  className="w-full"
                >
                  {course.curriculum.map((module, moduleIndex) => (
                    <AccordionItem
                      key={moduleIndex}
                      value={`module-${moduleIndex}`}
                    >
                      <AccordionTrigger className="hover:no-underline">
                        <div className="flex justify-between w-full">
                          <h3 className="text-lg font-semibold text-left">
                            {module.module}
                          </h3>
                          <div className="text-sm text-gray-600 mr-4">
                            {module.lessons.length} lessons
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="divide-y">
                          {module.lessons.map((lesson, lessonIndex) => (
                            <li
                              key={lessonIndex}
                              className="py-4 flex justify-between items-center"
                            >
                              <div className="flex items-center">
                                <div className="mr-3">
                                  {lesson.isPreview ? (
                                    <Play className="h-5 w-5 text-accent1" />
                                  ) : (
                                    <Lock className="h-5 w-5 text-gray-400" />
                                  )}
                                </div>
                                <div>
                                  <h4 className="font-medium">
                                    {lesson.title}
                                  </h4>
                                  <p className="text-sm text-gray-600">
                                    {lesson.duration}
                                  </p>
                                </div>
                              </div>
                              {lesson.isPreview && (
                                <Badge variant="outline">Preview</Badge>
                              )}
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </TabsContent>

            <TabsContent value="overview">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold mb-6">Course Overview</h2>
                <div className="prose max-w-none">
                  <p className="mb-4">
                    {course.description}
                  </p>
                  <p className="mb-4">
                    This comprehensive course is designed for {course.level.toLowerCase()} level students who want to master {course.category.toLowerCase()} development skills. You'll learn through a combination of video lessons, practical exercises, and real-world projects.
                  </p>
                  <h3 className="text-xl font-semibold mt-6 mb-3">What you'll learn</h3>
                  <ul className="list-disc pl-5 space-y-2 mb-6">
                    <li>Build professional applications from scratch</li>
                    <li>Master core concepts and industry best practices</li>
                    <li>Create a portfolio of projects to showcase your skills</li>
                    <li>Solve common development challenges with confidence</li>
                    <li>Deploy your applications to production environments</li>
                  </ul>
                  <h3 className="text-xl font-semibold mt-6 mb-3">Requirements</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>A computer with internet access</li>
                    <li>Basic understanding of programming concepts (recommended but not required for beginner courses)</li>
                    <li>Willingness to practice and complete assignments</li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="instructor">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold mb-6">About the Instructor</h2>
                <div className="flex items-start mb-6">
                  <img
                    src={course.instructor.avatar}
                    alt={course.instructor.name}
                    className="w-20 h-20 rounded-full object-cover mr-6"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">
                      {course.instructor.name}
                    </h3>
                    <p className="text-gray-600 mt-1">
                      {course.instructor.bio}
                    </p>
                  </div>
                </div>
                <div className="border-t pt-6">
                  <h4 className="font-medium mb-3">Instructor Stats</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="bg-gray-50 p-4 rounded-md text-center">
                      <p className="text-2xl font-bold text-accent1">15+</p>
                      <p className="text-sm text-gray-600">Courses</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-md text-center">
                      <p className="text-2xl font-bold text-accent1">25K+</p>
                      <p className="text-sm text-gray-600">Students</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-md text-center">
                      <p className="text-2xl font-bold text-accent1">4.8</p>
                      <p className="text-sm text-gray-600">Rating</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-md text-center">
                      <p className="text-2xl font-bold text-accent1">10+</p>
                      <p className="text-sm text-gray-600">Years Experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="reviews">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold mb-6">Student Reviews</h2>
                <div className="flex items-center mb-8">
                  <div className="text-5xl font-bold mr-6">
                    {course.rating.toFixed(1)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(course.rating)
                              ? "fill-yellow-500 stroke-yellow-500"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="ml-2 text-sm text-gray-600">
                        Based on 348 reviews
                      </span>
                    </div>
                    <div className="mt-4 space-y-2">
                      {[5, 4, 3, 2, 1].map((rating) => (
                        <div key={rating} className="flex items-center">
                          <span className="w-12 text-sm text-gray-600">
                            {rating} stars
                          </span>
                          <div className="flex-1 mx-3 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="bg-yellow-500 h-full rounded-full"
                              style={{
                                width: `${
                                  rating === 5
                                    ? "70"
                                    : rating === 4
                                    ? "20"
                                    : rating === 3
                                    ? "5"
                                    : rating === 2
                                    ? "3"
                                    : "2"
                                }%`,
                              }}
                            ></div>
                          </div>
                          <span className="w-10 text-sm text-gray-600 text-right">
                            {rating === 5
                              ? "70%"
                              : rating === 4
                              ? "20%"
                              : rating === 3
                              ? "5%"
                              : rating === 2
                              ? "3%"
                              : "2%"}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Sample reviews */}
                  <div className="border-b pb-6">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        <img
                          src="https://randomuser.me/api/portraits/women/43.jpg"
                          alt="Reviewer"
                          className="w-10 h-10 rounded-full mr-3"
                        />
                        <div>
                          <h4 className="font-medium">Emily Johnson</h4>
                          <div className="flex items-center">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < 5
                                    ? "fill-yellow-500 stroke-yellow-500"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <span className="text-sm text-gray-600">2 weeks ago</span>
                    </div>
                    <p className="text-gray-700">
                      This course exceeded my expectations! The instructor explains complex concepts in a way that's easy to understand. I've already built two projects from what I learned and feel much more confident in my skills. Highly recommend!
                    </p>
                  </div>

                  <div className="border-b pb-6">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        <img
                          src="https://randomuser.me/api/portraits/men/54.jpg"
                          alt="Reviewer"
                          className="w-10 h-10 rounded-full mr-3"
                        />
                        <div>
                          <h4 className="font-medium">David Kim</h4>
                          <div className="flex items-center">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < 4
                                    ? "fill-yellow-500 stroke-yellow-500"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <span className="text-sm text-gray-600">1 month ago</span>
                    </div>
                    <p className="text-gray-700">
                      Great course with lots of practical examples. The instructor is knowledgeable and responsive to questions. I would have liked more advanced topics toward the end, but overall it was worth the investment.
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        <img
                          src="https://randomuser.me/api/portraits/women/32.jpg"
                          alt="Reviewer"
                          className="w-10 h-10 rounded-full mr-3"
                        />
                        <div>
                          <h4 className="font-medium">Sarah Miller</h4>
                          <div className="flex items-center">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < 5
                                    ? "fill-yellow-500 stroke-yellow-500"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <span className="text-sm text-gray-600">2 months ago</span>
                    </div>
                    <p className="text-gray-700">
                      As someone with no prior experience in this field, I found this course incredibly helpful. The step-by-step approach and hands-on projects made learning enjoyable. I'm now confident enough to apply for junior positions. Thank you!
                    </p>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <Button variant="outline">Load More Reviews</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CourseDetail;
