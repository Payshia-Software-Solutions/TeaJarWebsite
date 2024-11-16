import ProductPage from "@/components/Product/ProductPage";
import config from "@/config";

// Generate static paths for all products
export async function generateStaticParams() {
  const res = await fetch(`${config.API_BASE_URL}/products`);
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  const data = await res.json();
  return data.map((product) => ({
    slug: product.slug,
  }));
}

const ProductServerPage = async ({ params }) => {
  const { slug } = params;
  // Fetch data at runtime in a Server Component
  const res = await fetch(
    `${config.API_BASE_URL}/products/get-by-slug/${slug}`
  );

  if (!res.ok) {
    // Handle errors, e.g., return a 404 page or display an error message
    return (
      <div className="h-screen flex items-center justify-center bg-babout">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold">Oops!</h1>
          <p>
            Product <span className="font-black">{slug}</span> is not found!
          </p>
        </div>
      </div>
    );
  }

  const product = await res.json();

  return <ProductPage product={product} />;
};

export default ProductServerPage;
