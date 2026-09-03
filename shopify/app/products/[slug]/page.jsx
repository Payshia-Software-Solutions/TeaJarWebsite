import ProductPage from "@/components/Product/ProductPage";
import ProductClientFallback from "@/components/Product/ProductClientFallback";
import config from "@/config";
import Breadcrumb from "@/components/Breadcrumb";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata({ params }) {
  try {
    const res = await fetch(
      `${config.API_BASE_URL}/products/get-by-slug/${params.slug}`,
      {
        cache: "no-store",
        headers: {
          Connection: "close",
          "User-Agent": "Mozilla/5.0 (compatible; TeaJarBot/1.0)",
          Accept: "application/json",
        },
      }
    );
    if (!res.ok) throw new Error("Failed");
    const product = await res.json();
    return {
      title: `${product.product_name} - Tea Jar | Finest Ceylon Tea in Sri Lanka`,
      description: product.product_description || "Premium Ceylon Tea",
      openGraph: {
        title: `${product.product_name} - Tea Jar`,
        images: [
          {
            url: `${config.ADMIN_BASE_URL}/pos-system/assets/images/products/${product.product_id}/${product.image_path}`,
            alt: product.product_name,
          },
        ],
      },
    };
  } catch {
    return {
      title: "Product - Tea Jar | Finest Ceylon Tea in Sri Lanka",
      description: "Premium Ceylon Tea",
    };
  }
}

export async function generateStaticParams() {
  return [];
}

const ProductServerPage = async ({ params }) => {
  const { slug } = params;

  try {
    const res = await fetch(
      `${config.API_BASE_URL}/products/get-by-slug/${slug}`,
      {
        cache: "no-store",
        headers: {
          Connection: "close",
          "User-Agent": "Mozilla/5.0 (compatible; TeaJarBot/1.0)",
          Accept: "application/json",
        },
      }
    );

    if (!res.ok) {
      if (res.status === 404) {
        return (
          <div className="h-screen flex items-center justify-center bg-gray-800">
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold">Oops!</h1>
              <p>Product <span className="font-black">{slug}</span> is not found!</p>
            </div>
          </div>
        );
      }
      return <ProductClientFallback slug={slug} />;
    }

    const product = await res.json();
    if (!product || !product.product_id) {
      return <ProductClientFallback slug={slug} />;
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

    const [imagesRes, productInfoRes] = await Promise.all([
      fetch(
        `${config.API_BASE_URL}/product-images/get-by-product/${product.product_id}`,
        {
          cache: "no-store",
          headers: {
            Connection: "close",
            "User-Agent": "Mozilla/5.0 (compatible; TeaJarBot/1.0)",
            Accept: "application/json",
          },
        }
      ).catch(() => ({ ok: false })),
      fetch(
        `${config.API_BASE_URL}/product-ecom-values/by-product/${product.product_id}`,
        {
          cache: "no-store",
          headers: {
            Connection: "close",
            "User-Agent": "Mozilla/5.0 (compatible; TeaJarBot/1.0)",
            Accept: "application/json",
          },
        }
      ).catch(() => ({ ok: false })),
    ]);

    const images = imagesRes.ok ? await imagesRes.json() : [];
    const productInfo = productInfoRes.ok ? await productInfoRes.json() : [];

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
    console.error("Error fetching product data server-side:", error);
    return <ProductClientFallback slug={slug} />;
  }
};

export default ProductServerPage;
