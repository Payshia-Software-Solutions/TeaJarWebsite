import ProductPage from "@/components/Product/ProductPage";
import config from "@/config";
import Breadcrumb from "@/components/Breadcrumb";

export async function generateMetadata({ params }) {
  try {
    const res = await fetch(
      `${config.API_BASE_URL}/products/get-by-slug/${params.slug}`,
      {
        headers: {
          'Connection': 'close'
        }
      }
    );
    if (!res.ok) throw new Error("Failed to fetch product for metadata");
    const product = await res.json();

    return {
      title: `${product.product_name} - Tea Jar | Finest Ceylon Tea in Sri Lanka`,
      description: product.product_description || "Default description for SEO.",
      openGraph: {
        title: `${product.product_name} - Tea Jar | Finest Ceylon Tea in Sri Lanka`,
        description:
          product.product_description || "Default Open Graph description.",
        images: [
          {
            url: `${config.ADMIN_BASE_URL}/pos-system/assets/images/products/${product.product_id}/${product.image_path}`,
            alt: product.product_name,
          },
        ],
      },
    };
  } catch (error) {
    console.error("Metadata fetch error:", error);
    return {
      title: "Product - Tea Jar | Finest Ceylon Tea in Sri Lanka",
      description: "Default description for SEO.",
    };
  }
}

// Generate static params for all products
export async function generateStaticParams() {
  // Returning an empty array prevents Next.js from trying to statically generate 
  // all 100+ product pages during the build, which causes DDoS protection / Firewalls 
  // to block the IP and results in ECONNRESET or UND_ERR_CONNECT_TIMEOUT.
  // The pages will still be generated on-demand (ISR) when users visit them!
  return [];
}

const ProductServerPage = async ({ params }) => {
  const { slug } = params;

  try {
    // Fetch product data at runtime
    const res = await fetch(
      `${config.API_BASE_URL}/products/get-by-slug/${slug}`,
      {
        next: {
          revalidate: 60, // Optional ISR to regenerate after 60 seconds
        },
        headers: {
          'Connection': 'close'
        }
      }
    );
    // console.log(`${config.API_BASE_URL}/products/get-by-slug/${slug}`);

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
    const crumbs = [
      {
        label: "Home",
        href: "/",
        icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
      },
      { label: "Products", href: "/shop" },
      {
        label: product.product_name,
        href: "/products/moraccan-mint-green-tea",
      },
    ];

    // Fetch product images and info in parallel to prevent connection timeouts
    const [imagesRes, productInfoRes] = await Promise.all([
      fetch(
        `${config.API_BASE_URL}/product-images/get-by-product/${product.product_id}`,
        { headers: { 'Connection': 'close' } }
      ).catch(() => ({ ok: false })),
      fetch(
        `${config.API_BASE_URL}/product-ecom-values/by-product/${product.product_id}`,
        { headers: { 'Connection': 'close' } }
      ).catch(() => ({ ok: false }))
    ]);

    const images = imagesRes.ok ? await imagesRes.json() : [];
    const productInfo = productInfoRes.ok ? await productInfoRes.json() : [];

    // Pass both product data and images to the ProductPage component
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
