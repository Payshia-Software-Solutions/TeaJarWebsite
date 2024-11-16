import ProductPage from "@/components/Product/ProductPage";
import config from "@/config";

// Generate static params for all products
export async function generateStaticParams() {
  try {
    const res = await fetch(`${config.API_BASE_URL}/products`);
    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await res.json();
    return data.map((product) => ({
      slug: product.slug,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

const ProductServerPage = async ({ params }) => {
  const { slug } = params;

  // Fetch product data at runtime in a Server Component
  try {
    const res = await fetch(
      `${config.API_BASE_URL}/products/get-by-slug/${slug}`,
      {
        next: {
          revalidate: 60, // optional: ISR if you want to regenerate the page after 60 seconds
        },
      }
    );

    if (!res.ok) {
      // If the product doesn't exist, return a 404 page
      return (
        <div className="h-screen flex items-center justify-center bg-gray-800">
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

    // If product found, render the product page
    return <ProductPage product={product} />;
  } catch (error) {
    console.error("Error fetching product data:", error);
    // Handle any server-side errors
    return (
      <div className="h-screen flex items-center justify-center bg-gray-800">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold">Error</h1>
          <p>We encountered an error while fetching the product details.</p>
        </div>
      </div>
    );
  }
};

export default ProductServerPage;
