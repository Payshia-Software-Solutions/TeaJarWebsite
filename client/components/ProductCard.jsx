import React, { useState } from "react";

const ProductCard = ({ product }) => {
  const [isInWishlist, setIsInWishlist] = useState(false);

  const handleAddToWishlist = () => {
    setIsInWishlist(!isInWishlist);
  };

  if (!product) {
    return null;
  }

  return (
    <div className="product-card">
      <div
        className="product-image"
        style={{ backgroundImage: `url('/api/placeholder/400/320')` }}
      ></div>
      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <p className="product-price">${product.price}</p>
        <div className="action-buttons">
          <button
            className={`btn-wishlist ${isInWishlist ? "active" : ""}`}
            onClick={handleAddToWishlist}
          >
            <i className="fas fa-heart"></i>
          </button>
          <a href="#" className="btn">
            Add to Cart
          </a>
        </div>
      </div>

      <style jsx>{`
        .product-card {
          width: 300px;
          background-color: #fff;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          font-family: "Poppins", sans-serif;
        }

        .product-image {
          height: 240px;
          background-size: cover;
          background-position: center;
        }

        .product-details {
          padding: 20px;
        }

        .product-name {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .product-description {
          font-size: 14px;
          color: #707070;
          margin-bottom: 16px;
        }

        .action-buttons {
          display: flex;
          justify-content: space-between;
        }

        .btn {
          display: inline-block;
          padding: 10px 20px;
          background-color: #2980b9;
          color: #fff;
          text-decoration: none;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 500;
          transition: background-color 0.3s;
        }

        .btn:hover {
          background-color: #3498db;
        }

        .btn-wishlist {
          background-color: transparent;
          color: #2980b9;
          border: none;
          font-size: 20px;
          cursor: pointer;
          transition: color 0.3s;
        }

        .btn-wishlist.active,
        .btn-wishlist:hover {
          color: #3498db;
        }
      `}</style>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/all.min.js"></script>
    </div>
  );
};

export default ProductCard;
