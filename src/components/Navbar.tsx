
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, User, Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-primary">
                Code<span className="text-accent1">Learn</span>
              </span>
            </Link>
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              <Link
                to="/courses"
                className="text-gray-700 hover:text-accent1 px-3 py-2 text-sm font-medium"
              >
                Courses
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center text-gray-700 hover:text-accent1 px-3 py-2 text-sm font-medium">
                    Categories
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link to="/courses?category=web" className="w-full">
                      Web Development
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/courses?category=mobile" className="w-full">
                      Mobile Development
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/courses?category=data" className="w-full">
                      Data Science
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/courses?category=devops" className="w-full">
                      DevOps & Cloud
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link
                to="/pricing"
                className="text-gray-700 hover:text-accent1 px-3 py-2 text-sm font-medium"
              >
                Pricing
              </Link>
              <Link
                to="/blog"
                className="text-gray-700 hover:text-accent1 px-3 py-2 text-sm font-medium"
              >
                Blog
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                className="pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent1"
                placeholder="Search courses..."
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <Link to="/login">
              <Button variant="outline" className="flex items-center">
                <User className="mr-2 h-4 w-4" />
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-accent1"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white p-4 shadow-lg">
          <div className="flex flex-col space-y-2">
            <Link
              to="/courses"
              className="text-gray-700 hover:text-accent1 px-3 py-2 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Courses
            </Link>
            <div className="relative">
              <input
                type="text"
                className="pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent1 w-full"
                placeholder="Search courses..."
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <Link
              to="/pricing"
              className="text-gray-700 hover:text-accent1 px-3 py-2 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to="/blog"
              className="text-gray-700 hover:text-accent1 px-3 py-2 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <div className="flex space-x-2 pt-2">
              <Link to="/login" className="flex-1">
                <Button variant="outline" className="w-full">
                  Login
                </Button>
              </Link>
              <Link to="/signup" className="flex-1">
                <Button className="w-full">Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
