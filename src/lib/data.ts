export interface Product {
  slug: string;
  name: string;
  tagline: string;
  price: string;
  description: string;
  specs: string[];
}

export const PRODUCTS: Product[] = [
  {
    slug: "silicon-core",
    name: "Silicon Core X1",
    tagline: "Next-gen processing architecture",
    price: "$299",
    description:
      "Engineered for ultra-low latency workloads and edge computing.",
    specs: ["16-Core Neural Engine", "32GB Unified Memory", "4W Idle Power"],
  },
  {
    slug: "silicon-shield",
    name: "Silicon Shield Pro",
    tagline: "Hardware-level encryption suite",
    price: "$149",
    description:
      "Zero-trust identity verification and real-time threat mitigation.",
    specs: ["End-to-End TLS 1.3", "Biometric Key Vault", "SOC2 Compliant"],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((item) => item.slug === slug);
}
