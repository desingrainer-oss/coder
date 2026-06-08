import { notFound } from "next/navigation";
import { products, productSlugs } from "@/data/products";
import ProductPageClient from "./ProductPageClient";

export function generateStaticParams() {
  return productSlugs.map((slug) => ({ slug }));
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = products[slug];

  if (!product) {
    notFound();
  }

  return <ProductPageClient product={product} />;
}
