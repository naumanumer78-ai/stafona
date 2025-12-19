import { notFound } from "next/navigation";
import { getProductBySlug, getAllProductSlugs } from "../../../data/products";
import Link from "next/link";
import Image from "next/image";

interface ProductPageProps {
    params: {
        slug: string;
    };
}

export async function generateStaticParams() {
    const slugs = getAllProductSlugs();
    return slugs.map((slug) => ({
        slug,
    }));
}

export default function Page({ params }: ProductPageProps) {
    const product = getProductBySlug(params.slug);

    if (!product) {
        notFound();
    }

    return (
        <div className="min-h-screen" style={{ backgroundColor: 'var(--midnight)' }}>
            {/* Hero Section */}
            <section className="relative py-20 px-6 md:px-14">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="mb-6">
                                {product.icon && (
                                    <div className="w-16 h-16 mb-4">
                                        <Image 
                                            src={product.icon} 
                                            alt={product.name}
                                            width={64}
                                            height={64}
                                        />
                                    </div>
                                )}
                                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                                    {product.name}
                                </h1>
                                <p className="text-xl text-white/70 leading-relaxed">
                                    {product.description}
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <Link
                                    href={product.ctaHref || "/contact"}
                                    className="inline-block px-8 py-3 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
                                >
                                    {product.ctaText || "Get Started"}
                                </Link>
                                <Link
                                    href="/contact"
                                    className="inline-block px-8 py-3 border border-white/20 text-white font-semibold rounded-lg hover:border-white/40 transition-colors"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                        {product.headerImage && (
                            <div className="relative h-96 rounded-xl overflow-hidden">
                                <Image
                                    src={product.headerImage}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* About Features Section */}
            {product.aboutFeatures && product.aboutFeatures.length > 0 && (
                <section className="py-20 px-6 md:px-14">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
                            {product.aboutTitle || "Key Features"}
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {product.aboutFeatures.map((feature, index) => (
                                <div
                                    key={index}
                                    className="bg-[#131929] p-8 rounded-xl border border-white/10 hover:border-[#667eea]/50 transition-all"
                                >
                                    {feature.icon && (
                                        <div className="w-12 h-12 mb-4">
                                            <Image
                                                src={feature.icon}
                                                alt={feature.title}
                                                width={48}
                                                height={48}
                                            />
                                        </div>
                                    )}
                                    <h3 className="text-xl font-bold text-white mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-white/70">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Product Features Section */}
            {product.productFeatures && product.productFeatures.length > 0 && (
                <section className="py-20 px-6 md:px-14 bg-[#0a0e1a]">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid gap-12">
                            {product.productFeatures.map((feature, index) => (
                                <div
                                    key={index}
                                    className="grid md:grid-cols-2 gap-8 items-center"
                                >
                                    <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                                        <span className="text-[#667eea] text-6xl font-bold opacity-20">
                                            {feature.number}
                                        </span>
                                        <h3 className="text-3xl font-bold text-white mb-4 mt-2">
                                            {feature.title}
                                        </h3>
                                        <p className="text-xl text-white/70 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                    {feature.image && (
                                        <div className={`relative h-80 rounded-xl overflow-hidden ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                                            <Image
                                                src={feature.image}
                                                alt={feature.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="py-20 px-6 md:px-14">
                <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded-2xl p-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Get Started?
                    </h2>
                    <p className="text-xl text-white/90 mb-8">
                        Contact us today to learn how {product.name} can transform your business.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block px-8 py-3 bg-white text-[#667eea] font-semibold rounded-lg hover:bg-white/90 transition-colors"
                    >
                        Contact Us
                    </Link>
                </div>
            </section>
        </div>
    );
}

