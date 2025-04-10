import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import { popularCourses } from "@/data/courses";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Search } from "lucide-react";

const CoursesPage = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(
    categoryParam || "all"
  );
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [priceFilter, setPriceFilter] = useState<string[]>([]);
  const [filteredCourses, setFilteredCourses] = useState(popularCourses);

  // Apply filters when they change
  useEffect(() => {
    let results = popularCourses;

    // Search term filter
    if (searchTerm) {
      results = results.filter(
        (course) =>
          course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory && selectedCategory !== "all") {
      results = results.filter(
        (course) =>
          course.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Level filter
    if (selectedLevel && selectedLevel !== "all") {
      results = results.filter(
        (course) => course.level.toLowerCase() === selectedLevel.toLowerCase()
      );
    }

    // Price filter
    if (priceFilter.length > 0) {
      results = results.filter((course) => {
        const finalPrice = course.discount
          ? course.price - (course.price * course.discount) / 100
          : course.price;

        if (priceFilter.includes("free") && finalPrice === 0) {
          return true;
        }
        if (priceFilter.includes("paid") && finalPrice > 0) {
          return true;
        }
        if (
          priceFilter.includes("discounted") &&
          course.discount &&
          course.discount > 0
        ) {
          return true;
        }
        return false;
      });
    }

    setFilteredCourses(results);
  }, [searchTerm, selectedCategory, selectedLevel, priceFilter]);

  // Update the category filter when URL param changes
  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  const handlePriceFilterChange = (value: string) => {
    setPriceFilter((prev) => {
      // If already selected, remove it
      if (prev.includes(value)) {
        return prev.filter((item) => item !== value);
      }
      // Otherwise add it
      return [...prev, value];
    });
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
    setSelectedLevel("all");
    setPriceFilter([]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Browse Courses
            </h1>
            <div className="relative w-1/3">
              <input
                type="text"
                className="pl-10 pr-4 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-accent1"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Filters sidebar */}
            <div className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
              <div>
                <h3 className="text-lg font-medium mb-3">Filters</h3>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={clearFilters}
                  className="w-full"
                >
                  Clear All Filters
                </Button>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Category</h4>
                <Select
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="web">Web Development</SelectItem>
                    <SelectItem value="mobile">Mobile Development</SelectItem>
                    <SelectItem value="data">Data Science</SelectItem>
                    <SelectItem value="devops">DevOps & Cloud</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Level</h4>
                <Select
                  value={selectedLevel}
                  onValueChange={setSelectedLevel}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium">Price</h4>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="paid"
                    checked={priceFilter.includes("paid")}
                    onCheckedChange={() => handlePriceFilterChange("paid")}
                  />
                  <Label htmlFor="paid">Paid</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="free"
                    checked={priceFilter.includes("free")}
                    onCheckedChange={() => handlePriceFilterChange("free")}
                  />
                  <Label htmlFor="free">Free</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="discounted"
                    checked={priceFilter.includes("discounted")}
                    onCheckedChange={() => handlePriceFilterChange("discounted")}
                  />
                  <Label htmlFor="discounted">Discounted</Label>
                </div>
              </div>
            </div>

            {/* Courses grid */}
            <div className="md:col-span-3">
              {filteredCourses.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCourses.map((course) => (
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
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium text-gray-900 mb-2">
                    No courses found
                  </h3>
                  <p className="text-gray-600">
                    Try adjusting your filters or search term
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CoursesPage;
