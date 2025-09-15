import { Star } from "lucide-react";
import React from "react";

interface StarRatingProps {
  rating: number; // number between 0–5
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, i) => {
    const filled = rating >= i + 1;        // full star
    const half = rating > i && rating < i + 1; // half star
    return { filled, half };
  });

  return (
    <div className="flex items-center gap-1">
      {stars.map((star, i) => (
        <div key={i+0} className="relative w-10 h-10 text-gray-400">
          {/* Empty star */}
          <Star className="w-10 h-10" strokeWidth={1} />

          {/* Filled overlay */}
          {star.filled && (
            <Star className="w-10 h-10 absolute top-0 left-0 text-yellow-400 fill-yellow-400" strokeWidth={1} />
          )}

          {/* Half star overlay */}
          {star.half && (
            <div className="absolute top-0 left-0 w-1/2 h-full overflow-hidden">
              <Star className="w-10 h-10 text-yellow-400 fill-yellow-400" strokeWidth={1} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StarRating;
