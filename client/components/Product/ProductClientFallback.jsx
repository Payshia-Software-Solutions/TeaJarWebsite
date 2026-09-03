"use client";

import React, { useEffect, useState, useCallback } from "react";
import config from "@/config";
import Breadcrumb from "@/components/Breadcrumb";
import ProductPage from "@/components/Product/ProductPage";

export default function ProductClientFallback({ slug }) {
  const [product, setProduct] = useState(null);
  const [images, setImages] = useState([]);
  const [productInfo, setProductInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState(null);

  const loadProductData = useCallback(async () => {
    setLoading(true);
    setError(null);
    setNotFound(false);

    try {
      const res = await fetch(
        `${config.API_BASE_URL}/products/get-by-slug/${slug}`,
        { cache: "no-store" }
      );

      if (res.status === 404) {
        setNotFound(true);
        setLoading(false);
        return;
      }

      if (!res.ok) {
        throw new Error(`Failed to fetch product (Status: ${res.status})`);
      }

      const productData = await res.json();
      if (!productData || !productData.product_id) {
        setNotFound(true);
        setLoading(false);
        return;
      }

      setProduct(productData);

      const [imagesRes, productInfoRes] = await Promise.all([
        fetch(
          `${config.API_BASE_URL}/product-images/get-by-product/${productData.product_id}`,
          { cache: "no-store" }
        ).catch(() => ({ ok: false })),
        fetch(
          `${config.API_BASE_URL}/product-ecom-values/by-product/${productData.product_id}`,
          { cache: "no-store" }
        ).catch(() => ({ ok: false })),
      ]);

      const imagesData = imagesRes.ok ? await imagesRes.json() : [];
      const infoData = productInfoRes.ok ? await productInfoRes.json() : [];

      setImages(Array.isArray(imagesData) ? imagesData : []);
      setProductInfo(infoData || []);
    } catch (err) {
      console.error("Client fallback fetch error:", err);
      setError(err.message || "Failed to load product details.");
    } finally {
      setLoading(false);
    }
  }, [slug]);

  useEffect(() => {
    loadProductData();
  }, [loadProductData]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 pt-8 pb-16 mt-20 md:mt-28">
        <div className="h-6 w-48 bg-gray-200 animate-pulse rounded mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="aspect-square bg-gray-200 animate-pulse rounded-lg" />
          <div className="space-y-4">
            <div className="h-8 w-3/4 bg-gray-200 animate-pulse rounded" />
            <div className="h-6 w-1/3 bg-gray-200 animate-pulse rounded" />
            <div className="h-24 w-full bg-gray-200 animate-pulse rounded" />
            <div className="h-12 w-48 bg-gray-200 animate-pulse rounded" />
          </div>
        </div>
      </div>
    );
  }

  if (notFound) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-800">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold">Oops!</h1>
          <p className="mt-2">
            Product <span className="font-black">{slug}</span> is not found!
          </p>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center p-8 bg-white border border-gray-200 shadow-sm rounded-lg max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Unable to Load Product
          </h2>
          <p className="text-gray-600 mb-6">
            We encountered an issue loading the product details. Please check your connection and try again.
          </p>
          <button
            onClick={loadProductData}
            className="bg-amber-700 hover:bg-amber-800 text-white font-medium px-6 py-2.5 rounded-lg transition"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  const crumbs = [
    {
      label: "Home",
      href: "/",
      icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    },
    { label: "Products", href: "/shop" },
    { label: product.product_name, href: `/products/${slug}` },
  ];

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 pt-8 pb-4 mt-20 md:mt-28">
        <Breadcrumb className="mb-3" crumbs={crumbs} />
      </div>
      <ProductPage
        product={product}
        product_images={images}
        product_info={productInfo}
      />
    </div>
  );
}
