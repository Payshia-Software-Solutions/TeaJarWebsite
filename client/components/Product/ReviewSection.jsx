import React, { useState } from "react";
import { Star, ChevronDown, ChevronRight, ChevronsRight } from "lucide-react";
import ReviewModal from "@/components/Common/ReviewModal";

const ReviewSection = () => {
  const [sortBy, setSortBy] = useState("Most Recent");
  // In your page component:
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  const handleReviewSubmit = (reviewData) => {
    // Handle the review submission here
    console.log(reviewData);
  };

  const reviews = [
    {
      id: 1,
      author: "Sasani Dissanayake",
      rating: 5,
      date: "11/08/2024",
      content: "Great Product & Love This 💚💛",
      verified: true,
    },
    {
      id: 2,
      author: "Kanchana Dilrukshi",
      rating: 5,
      date: "10/09/2024",
      content:
        "Best product for oily skin. My skin has improved lot. Thanks spa ceylon❤️",
      verified: true,
    },
    {
      id: 3,
      author: "Charithma Weerakoon",
      rating: 5,
      date: "09/30/2024",
      content:
        "I could never use a skincare product/cream on my skin without getting nasty effects before, as my skin is very oily, sensitive and acne prone but this product has done miracles on my skin now. My skin has improved in a very positive way withing two weeks. Love this product and will purchase forever.",
      verified: true,
    },
  ];

  const ratingCounts = {
    5: 22,
    4: 4,
    3: 0,
    2: 0,
    1: 0,
  };

  const averageRating = 4.85;
  const totalReviews = 26;

  const RatingBar = ({ rating, count }) => {
    const percentage = (count / totalReviews) * 100;

    return (
      <div className="flex items-center gap-2">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "fill-gray-200 text-gray-200"
              }`}
            />
          ))}
        </div>
        <div className="w-48 h-3 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-black rounded-full"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <span className="text-sm text-gray-600 min-w-8">{count}</span>
      </div>
    );
  };

  return (
    <div className="max-w-3xl mx-auto py-8">
      <h2 className="text-2xl font-serif text-center mb-8">Customer Reviews</h2>

      <div className="grid md:grid-cols-3 gap-8 mb-8">
        {/* Overall Rating */}
        <div className="text-center">
          <div className="flex justify-center gap-2 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
          <p className="text-sm mb-1">{averageRating} out of 5</p>
          <p className="text-sm text-gray-600">
            Based on {totalReviews} reviews
          </p>
          <p className="text-xs text-gray-500 mt-1">collected by Judge.me</p>
        </div>

        {/* Rating Breakdown */}
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((rating) => (
            <RatingBar
              key={rating}
              rating={rating}
              count={ratingCounts[rating]}
            />
          ))}
        </div>

        {/* Write Review Button */}
        <div className="flex justify-center items-start">
          <button
            onClick={() => setIsReviewModalOpen(true)}
            className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800"
          >
            Write a review
          </button>
        </div>
      </div>

      {/* Sort Dropdown */}
      <div className="mb-8">
        <button className="flex items-center gap-2 text-sm">
          {sortBy}
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      {/* Reviews List */}
      <div className="space-y-8">
        {reviews.map((review) => (
          <div key={review.id} className="border-b pb-8">
            <div className="flex items-center gap-2 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < review.rating
                      ? "fill-yellow-400 text-yellow-400"
                      : "fill-gray-200 text-gray-200"
                  }`}
                />
              ))}
            </div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-medium">{review.author}</span>
              {review.verified && (
                <span className="bg-black text-white text-xs px-2 py-0.5 rounded">
                  Verified
                </span>
              )}
            </div>
            <p className="text-gray-600 mb-2">{review.content}</p>
            <p className="text-sm text-gray-500">{review.date}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-8">
        <button className="w-8 h-8 flex items-center justify-center rounded bg-gray-100">
          1
        </button>
        <button className="w-8 h-8 flex items-center justify-center">2</button>
        <button className="w-8 h-8 flex items-center justify-center">3</button>
        <button className="w-8 h-8 flex items-center justify-center">
          <ChevronRight className="w-4 h-4" />
        </button>
        <button className="w-8 h-8 flex items-center justify-center">
          <ChevronsRight className="w-4 h-4" />
        </button>
      </div>

      <ReviewModal
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
        onSubmit={handleReviewSubmit}
      />
    </div>
  );
};

export default ReviewSection;
