import ProductPage from "@/components/Product/ProductPage";
import config from "@/config";

const ProductServerPage = async ({ params }) => {
  const { slug } = params;
  // Fetch data at runtime in a Server Component
  console.log(slug);
  const res = await fetch(`${config.API_BASE_URL}/products/${slug}`);

  if (!res.ok) {
    // Handle errors, e.g., return a 404 page or display an error message
    return <div className="mt-50">Product not found</div>;
  }

  const product = await res.json();

  return <ProductPage product={product} />;
};

export default ProductServerPage;
