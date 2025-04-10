
import { Link } from "react-router-dom";
import { Star, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  level: string;
  duration: string;
  rating: number;
  imageSrc: string;
  category: string;
  price: number;
  discount?: number;
}

const CourseCard = ({
  id,
  title,
  description,
  level,
  duration,
  rating,
  imageSrc,
  category,
  price,
  discount,
}: CourseCardProps) => {
  const discountedPrice = discount ? price - (price * discount) / 100 : price;

  return (
    <div className="course-card">
      <div className="relative">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <Badge className="absolute top-2 right-2 bg-accent1">
          {category}
        </Badge>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold line-clamp-1">{title}</h3>
          <div className="flex items-center text-yellow-500">
            <Star className="fill-yellow-500 stroke-yellow-500 h-4 w-4" />
            <span className="ml-1 text-sm font-medium text-gray-700">
              {rating.toFixed(1)}
            </span>
          </div>
        </div>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">{description}</p>
        <div className="mt-3 flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <Award className="h-4 w-4 mr-1" />
            <span>{level}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{duration}</span>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div>
            {discount ? (
              <div className="flex items-center">
                <span className="text-lg font-bold text-gray-900">
                  ${discountedPrice.toFixed(2)}
                </span>
                <span className="ml-2 text-sm text-gray-500 line-through">
                  ${price.toFixed(2)}
                </span>
              </div>
            ) : (
              <span className="text-lg font-bold text-gray-900">
                ${price.toFixed(2)}
              </span>
            )}
          </div>
          <Link to={`/courses/${id}`}>
            <Button variant="outline" size="sm">
              View Course
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
