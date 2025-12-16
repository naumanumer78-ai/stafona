import { notFound } from "next/navigation";
import { getProductBySlug, getAllProductSlugs } from "../../../data/products";
import ProductHeader from "../../../components/ProductHeader";
import AboutContainer from "../../../components/AboutContainer";
import ProsAndConsContainer from "../../../components/ProsAndConsContainer";
import WorkflowContainer from "../../../components/WorkflowContainer";
import SubscribeCard from "../../../components/SubscribeCard";
import BlogCard from "../../../components/BlogCard";
import ProductContainer from "../../../components/ProductContainer";
import ReviewContainer from "../../../components/ReviewContainer";
import ProductFeatureContainer from "../../../components/ProductFeatureContainer";
import DownloadContainer from "../../../components/DownloadContainer";
import OverviewContainer from "../../../components/OverviewContainer";

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
        <>
            <ProductHeader
                backgroundImage={product.headerBgImage}
                headerImage={product.headerImage}
                slug={product.slug}
                icon={product.icon}
                title={product.name}
                description={product.description}
                ctaText={product.ctaText}
                ctaHref={product.ctaHref}
            />
            <div className="md:px-[3.5em] px-[1.5625em]">
                <AboutContainer product={product} />
                <ProsAndConsContainer product={product} />
                <WorkflowContainer product={product} />
                <ProductFeatureContainer product={product} />
                <ReviewContainer isProductPage={true} productTitleColor={product.prosAndCons?.titleColor} />
                <OverviewContainer product={product} />
            </div>


            <div className="pt-[4.1875em]">
                <DownloadContainer product={product} />
            </div>
            <div className="w-full flex flex-col md:px-[3.5em] px-[1.5625em] pt-[4.1875em] gap-[0.4375em]">
                <div className="caption">keep exploring</div>
                <ProductContainer isProductPage={true} />
            </div>
            <div className="flex md:flex-row flex-col gap-[1.5em] md:px-[3.5em] px-[1.5625em] pt-[4.1875em] w-full">
                <SubscribeCard />
                <BlogCard />
            </div>
        </>
    );
}

