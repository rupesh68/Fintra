import React, { useState } from "react";
import img155 from "../assets/image 155.png";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
  // dynamic

  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <div className="flex items-center gap-3 text-black ">
      <div className="flex ">
        {[...Array(5)].map((star, index) => {
          const currentRating = index + 1;
          return (
            <label>
              <input
                className="hidden"
                type="radio"
                name="rating"
                value={currentRating}
                onClick={() => setRating(currentRating)}
              />
              <FaStar
                className="cursor-pointer text-[]"
                size={20}
                color={
                  currentRating <= (hover || rating) ? "#ffc107" : "#c0c1c4"
                }
                onMouseEnter={() => setHover(currentRating)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          );
        })}
      </div>

      <div className="">
        <p className="font-bold font-montserrat">({rating})</p>
      </div>
      {/* static */}

      {/* <img src={img155} alt="" /> */}
    </div>
  );
};

export default StarRating;
