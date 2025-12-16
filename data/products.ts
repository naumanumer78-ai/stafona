export interface Product {
    slug: string;
    name: string;
    description: string;
    icon: string;
    headerBgImage?: string;
    headerImage?: string;
    ctaText?: string;
    ctaHref?: string;
    aboutTitle?: string;
    aboutBackgroundImage?: string;
    aboutImage?: string;
    aboutFeatures?: {
        icon?: string;
        iconColor?: string;
        title: string;
        description: string;
    }[];
    prosAndCons?: {
        title: string;
        titleColor?: string;
        subTitle: string;
        before?: {
            title: string;
            image?: string;
            cons: string[];
        };
        after?: {
            title: string;
            image?: string;
            pros: string[];
        };
    };
    productBgImage?: string;
    productFeatures?: {
        number: string;
        title: string;
        description: string;
        image?: string;
    }[];
    feature: {
        title: string;
        // featureHeading: string;
        features: {
            text: string;
            image?: string;
        }[];
    },
    download: {
        title: string;
        description: string;
        gradientLeft: string;
        gradientRight: string;
        downloadLink: string;
        pricingLink: string;
        downloadBtnColor: string;
    }
}

export const products: Record<string, Product> = {
    inbox: {
        slug: "inbox",
        name: "All tracks, one powerful inbox",
        description: "Submit demos, manage responses, and build lasting music relationships—all in one place.",
        headerBgImage: "/images/products/background/inbox.png",
        headerImage: "/images/products/product-header.png",
        icon: "/images/products/icons/inbox.png",
        ctaText: "Learn more",
        ctaHref: "/book-a-demo",
        aboutTitle: "Easily scale, monetize, and automate your music production education business",
        aboutBackgroundImage: "/images/products/about/inbox.png",
        aboutImage: "/images/products/about-product.png",
        aboutFeatures: [
            {
                icon: "/images/products/icons/create.svg",
                iconColor: "#FF2F55",
                title: "Organised and effortless",
                description: "All your tracks, conversations, and follow-ups in one place. No inbox chaos, no lost DMs—just everything you need, right where it should be.",
            },
            {
                icon: "/images/products/icons/candle.svg",
                iconColor: "#D20046",
                title: "Regain Control",
                description: "Decide when demos land, which genres make the cut, and how much you receive. Always on your terms",
            },
            {
                icon: "/images/products/icons/like.svg",
                iconColor: "#87053E",
                title: "Know the artist",
                description: "Get the full story behind every submission—because great connections start with knowing who’s on the other side.",
            },
        ],
        prosAndCons: {
            title: "Transparency built in",
            titleColor: "#FF2F55",
            subTitle: "Music management, made effortless",
            before: {
                title: "Before Inbox",
                image: "/images/products/pros-cons/inbox_before.png",
                cons: [
                    "Fragmented communication",
                    "Missed opportunities",
                    "Slow, manual processes",
                    "Inconsistent branding",
                ],
            },
            after: {
                title: "After Inbox",
                image: "/images/products/pros-cons/inbox_after.png",
                pros: [
                    "Centralized workflow",
                    "Timely, automated actions",
                    "Clear, consistent branding",
                ],
            },
        },
        productBgImage: "/images/products/features/background/inbox.png",
        productFeatures: [
            {
                number: "01",
                title: "Open",
                description: "Replace your demo or promo email with one shareable link. No more jumping between threads and conventional boring tools.",
                image: "/images/products/features/open.png",
            },
            {
                number: "02",
                title: "Review",
                description: "The Review feed makes listening, saving and providing feedback on hundreds of tracks easy. Smart filters ensure a clean list of relevant tracks. Never miss a hit again.",
                image: "/images/products/features/review.png",
            },
            {
                number: "03",
                title: "Action",
                description: "Organize, collaborate and action saved tracks in one workspace. No more endless group threads, lost links, or missed opportunities.",
                image: "/images/products/features/action.png",
            },
        ],
        feature: {
            title: "Streamline your process — amplify your impact",
            // featureHeading: "Composer",
            features: [
                {
                    text: "Composer",
                    image: "/images/products/about-product.png",
                },
                {
                    text: "Review feed",
                    image: "/images/products/about-product.png",
                },
                {
                    text: "Submission receipts",
                    image: "/images/products/about-product.png",
                },
                {
                    text: "Discover",
                    image: "/images/products/about-product.png",
                },
                {
                    text: "Smart stacks",
                    image: "/images/products/about-product.png",
                },
                {
                    text: "Contact profiles",
                    image: "/images/products/about-product.png",
                },
                {
                    text: "Insights",
                    image: "/images/products/about-product.png",
                },
            ],
        },
        download: {
            title: "Your new A&R superpower",
            description: "Join thousands of producers using Inbox to land deals, grow their fanbase, and take control of their careers.",
            gradientLeft: "#4F0D2D",
            gradientRight: "#190F20",
            downloadLink: "/images/products/download/studio.png",
            pricingLink: "/images/products/download/studio.png",
            downloadBtnColor: "#FF2F55",
        },
    },
    studio: {
        slug: "studio",
        name: "Build your community",
        description: "Scale, manage, and automate your music production education business.",
        headerBgImage: "/images/products/background/studio.png",
        headerImage: "/images/products/product-header.png",
        icon: "/images/products/icons/studio.png",
        ctaText: "Learn More",
        ctaHref: "/book-a-demo",
        aboutTitle: "Easily scale, monetize, and automate your music production education business",
        aboutBackgroundImage: "/images/products/about/studio.png",
        aboutImage: "/images/products/about-product.png",
        aboutFeatures: [
            {
                icon: "/images/products/icons/create.svg",
                iconColor: "#667eea",
                title: "All-in-One creator hub",
                description: "Manage your community, sell products, and track performance—all from one platform. No need for third-party tools or scattered workflows.",
            },
            {
                icon: "/images/products/icons/candle.svg",
                iconColor: "#6D00D2",
                title: "Monetize your expertise",
                description: "Turn your knowledge into income with live events, courses, and bookable services. Teach, engage, and grow your audience on your terms.",
            },
            {
                icon: "/images/products/icons/like.svg",
                iconColor: "#57008A",
                title: "Deep community insights",
                description: "Understand your audience like never before. Get real data on engagement, sales, and member activity to refine your approach and maximize impact.",
            },
        ],
        prosAndCons: {
            title: "All in one",
            titleColor: "#667eea",
            subTitle: "One platform for your entire community.",
            before: {
                title: "Before Studio",
                image: "/images/products/pros-cons/inbox_before.png",
                cons: [
                    "Scattered community tools",
                    "Manual member management",
                    "Limited engagement insights",
                    "Disconnected workflows",
                ],
            },
            after: {
                title: "After Studio",
                image: "/images/products/pros-cons/inbox_after.png",
                pros: [
                    "Unified community platform",
                    "Automated member management",
                    "Deep engagement analytics",
                    "Streamlined workflows",
                ],
            },
        },
        productBgImage: "/images/products/features/background/studio.png",
        productFeatures: [
            {
                number: "01",
                title: "Open",
                description: "Replace your demo or promo email with one shareable link. No more jumping between threads and conventional boring tools.",
                image: "/images/products/features/open.png",
            },
            {
                number: "02",
                title: "Review",
                description: "The Review feed makes listening, saving and providing feedback on hundreds of tracks easy. Smart filters ensure a clean list of relevant tracks. Never miss a hit again.",
                image: "/images/products/features/review.png",
            },
            {
                number: "03",
                title: "Action",
                description: "Organize, collaborate and action saved tracks in one workspace. No more endless group threads, lost links, or missed opportunities.",
                image: "/images/products/features/action.png",
            },
        ],
        feature: {
            title: "Share your knowledge — build your legacy.",
            // featureHeading: "Live events",
            features: [
                {
                    text: "Live events",
                    image: "/images/products/about-product.png",
                },
                {
                    text: "Courses",
                    image: "/images/products/about-product.png",
                },
                {
                    text: "Recorded content",
                    image: "/images/products/about-product.png",
                },
                {
                    text: "Member management",
                    image: "/images/products/about-product.png",
                },
                {
                    text: "Store",
                    image: "/images/products/about-product.png",
                },
                {
                    text: "Analytics & insights",
                    image: "/images/products/about-product.png",
                },
            ],
        },
        download: {
            title: "Start Earning Today",
            description: "Create your community and turn your expertise into sustainable income streams.",
            gradientLeft: "#1C0627",
            gradientRight: "#3A1869",
            downloadLink: "/images/products/download/studio.png",
            pricingLink: "/images/products/download/studio.png",
            downloadBtnColor: "#667eea",
        },
    },
    elevate: {
        slug: "elevate",
        name: "Monetize your music expertise",
        description: "Scale, manage, and automate your music production education business.",
        headerBgImage: "/images/products/background/elevate.png",
        headerImage: "/images/products/product-header.png",
        icon: "/images/products/icons/elevate.png",
        ctaText: "Learn more",
        ctaHref: "/book-a-demo",
        aboutTitle: "Pioneering the future of music education",
        aboutBackgroundImage: "/images/products/about/elevate.png",
        aboutImage: "/images/products/about-product.png",
        aboutFeatures: [
            {
                icon: "/images/products/icons/create.svg",
                iconColor: "#FFBE1B",
                title: "Maximize revenue",
                description: "Monetize your expertise with memberships, coaching, track feedback, and more—all in one place.",
            },
            {
                icon: "/images/products/icons/candle.svg",
                iconColor: "#FF8800",
                title: "Flexible monetization",
                description: "Offer memberships, one-on-one coaching sessions, track feedback services, and custom packages tailored to your expertise.",
            },
            {
                icon: "/images/products/icons/like.svg",
                iconColor: "#EF5000",
                title: "Streamlined operations",
                description: "Manage bookings, payments, and client relationships seamlessly—so you can focus on what you do best.",
            },
        ],
        prosAndCons: {
            title: "All in one",
            titleColor: "#FF8800",
            subTitle: "One platform for your entire community.",
            before: {
                title: "Before Elevate",
                image: "/images/products/pros-cons/inbox_before.png",
                cons: [
                    "Complex booking systems",
                    "Payment processing hassles",
                    "Manual client coordination",
                    "Limited service offerings",
                ],
            },
            after: {
                title: "After Elevate",
                image: "/images/products/pros-cons/inbox_after.png",
                pros: [
                    "Streamlined booking process",
                    "Integrated payment solutions",
                    "Automated client management",
                    "Flexible service packages",
                ],
            },
        },
        productBgImage: "/images/products/features/background/elevate.png",
        productFeatures: [
            {
                number: "01",
                title: "Open",
                description: "Replace your demo or promo email with one shareable link. No more jumping between threads and conventional boring tools.",
                image: "/images/products/features/open.png",
            },
            {
                number: "02",
                title: "Review",
                description: "The Review feed makes listening, saving and providing feedback on hundreds of tracks easy. Smart filters ensure a clean list of relevant tracks. Never miss a hit again.",
                image: "/images/products/features/review.png",
            },
            {
                number: "03",
                title: "Action",
                description: "Organize, collaborate and action saved tracks in one workspace. No more endless group threads, lost links, or missed opportunities.",
                image: "/images/products/features/action.png",
            },
        ],
        feature: {
            title: "Share your knowledge — build your legacy.",
            // featureHeading: "Live events",
            features: [
                {
                    text: "Live events",
                    image: "/images/products/about-product.png",
                },
                {
                    text: "Courses",
                    image: "/images/products/about-product.png",
                },
                {
                    text: "Recorded content",
                    image: "/images/products/about-product.png",
                },
                {
                    text: "Member management",
                    image: "/images/products/about-product.png",
                },
                {
                    text: "Store",
                    image: "/images/products/about-product.png",
                },
                {
                    text: "Analytics & insights",
                    image: "/images/products/about-product.png",
                },
            ],
        },
        download: {
            title: "Start Earning Today",
            description: "Create your community and turn your expertise into sustainable income streams.",
            gradientLeft: "#6B1315",
            gradientRight: "#290027",
            downloadLink: "/images/products/download/studio.png",
            pricingLink: "/images/products/download/studio.png",
            downloadBtnColor: "#FF8800",
        },
    },
    store: {
        slug: "store",
        name: "Monetize your music expertise",
        description: "Scale, manage, and automate your music production education business.",
        headerBgImage: "/images/products/background/store.png",
        headerImage: "/images/products/product-header.png",
        icon: "/images/products/icons/store.png",
        ctaText: "Learn more",
        ctaHref: "/book-a-demo",
        aboutTitle: "Pioneering the future of music education",
        aboutBackgroundImage: "/images/products/about/store.png",
        aboutImage: "/images/products/about-product.png",
        aboutFeatures: [
            {
                icon: "/images/products/icons/create.svg",
                iconColor: "#3EEE99",
                title: "Build community",
                description: "Turn casual followers into loyal members with engaging content, similar passions, and real conversations.",
            },
            {
                icon: "/images/products/icons/candle.svg",
                iconColor: "#008875",
                title: "Maximize revenue",
                description: "Monetize your expertise with memberships, coaching, track feedback, and more—all in one place.",
            },
            {
                icon: "/images/products/icons/like.svg",
                iconColor: "#003843",
                title: "Boost engagement",
                description: "Keep members coming back with gamified rewards, peer feedback, and meaningful discussions.",
            },
        ],
        prosAndCons: {
            title: "All in one",
            titleColor: "#3EEE99",
            subTitle: "One platform for your entire community.",
            before: {
                title: "Before Store",
                image: "/images/products/pros-cons/inbox_before.png",
                cons: [
                    "Multiple selling platforms",
                    "Inventory management chaos",
                    "Inconsistent customer experience",
                    "Manual order processing",
                ],
            },
            after: {
                title: "After Store",
                image: "/images/products/pros-cons/inbox_after.png",
                pros: [
                    "Single unified storefront",
                    "Automated inventory tracking",
                    "Consistent brand experience",
                    "Streamlined order fulfillment",
                ],
            },
        },
        productBgImage: "/images/products/features/background/store.png",
        productFeatures: [
            {
                number: "01",
                title: "Open",
                description: "Replace your demo or promo email with one shareable link. No more jumping between threads and conventional boring tools.",
                image: "/images/products/features/open.png",
            },
            {
                number: "02",
                title: "Review",
                description: "The Review feed makes listening, saving and providing feedback on hundreds of tracks easy. Smart filters ensure a clean list of relevant tracks. Never miss a hit again.",
                image: "/images/products/features/review.png",
            },
            {
                number: "03",
                title: "Action",
                description: "Organize, collaborate and action saved tracks in one workspace. No more endless group threads, lost links, or missed opportunities.",
                image: "/images/products/features/action.png",
            },
        ],
        feature: {
            title: "Share your knowledge — build your legacy.",
            // featureHeading: "Live events",
            features: [
                {
                    text: "Live events",
                    image: "/images/products/about-product.png",
                },
                {
                    text: "Courses",
                    image: "/images/products/about-product.png",
                },
                {
                    text: "Recorded content",
                    image: "/images/products/about-product.png",
                },
                {
                    text: "Member management",
                    image: "/images/products/about-product.png",
                },
                {
                    text: "Store",
                    image: "/images/products/about-product.png",
                },
                {
                    text: "Analytics & insights",
                    image: "/images/products/about-product.png",
                },
            ],
        },
        download: {
            title: "Start Earning Today",
            description: "Create your community and turn your expertise into sustainable income streams.",
            gradientLeft: "#0F5843",
            gradientRight: "#012028",
            downloadLink: "/images/products/download/studio.png",
            pricingLink: "/images/products/download/studio.png",
            downloadBtnColor: "#3EEE99",
        },
    },
};

export function getProductBySlug(slug: string): Product | undefined {
    return products[slug];
}

export function getAllProductSlugs(): string[] {
    return Object.keys(products);
}

