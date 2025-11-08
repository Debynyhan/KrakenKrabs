// Centralized assets and theme for the site
export const ASSETS = {
    heroDesktop: "/media/LobsterTail.mp4",
    heroMobile: "/media/LobsterTail.mp4",
    intro: "/media/KrakenKrabsIntro.mp4",
    heroPoster: "/media/hero-poster.jpg",
    images: {
        stackYaMac: "/media/stack-ya-mac.jpg",
        slushyPromo: "/media/slushy-promo.jpg",
        crabFries: "/media/crab-fries.jpg",
        twoForTwenty: "/media/two-for-20-fish.jpg",
        crabShrimpBag: "/media/crab-shrimp-bag.jpg",
        shrimpOnlyBag: "/media/shrimp-only-bag.jpg",
        lobsterBoil: "/media/lobster-boil.jpg",
        kingCrab: "/media/king-crab.jpg",
        shrimpBasket: "/media/shrimp-basket.jpg",
        fishBasket: "/media/fish-basket.jpg",
        oystersFries: "/media/oysters-fries.jpg",
        seaCombo: "/media/sea-combo.jpg",
        mapPlaceholder: "/media/map-placeholder.jpg",
    },
};

// Centralized theme tokens used across components
export const SEA = {
    trench: "#C6F0FF", // Stronger water background (light blue)
    midnight: "#003247", // Deep ocean blue for cards/hero overlays
    kelp: "#2D6A4F", // Seaweed Green
    tide: "#007A9C", // Vibrant Aqua (darkened for WCAG AA)
    turquoise: "#D4AF37", // Trophy Gold
    foam: "#FFFFFF", // Light foam (text on dark cards)
    sand: "#F3E3C1", // Warm Sand
    coral: "#FF6B35", // Warm coral accent
};

export const SECTIONS = [
    {
        id: "specials",
        title: "Specials",
        caption: "Limited-time drops",
        items: [
            { id: "stack-ya-mac", name: "Stack Ya Mac", price: "$11.99", imgKey: "stackYaMac" },
            { id: "slushy-free", name: "Free Slushy Today", price: "w/ $25+", imgKey: "slushyPromo" },
            { id: "crab-fries", name: "Crab Fries", price: "$13.50", imgKey: "crabFries" },
            { id: "2for20", name: "2 for $20 Fish", price: "$20.00", imgKey: "twoForTwenty" },
        ],
    },
    {
        id: "boil-bags",
        title: "Seafood Boil Bags",
        caption: "Pick your catch, add the heat",
        items: [
            { id: "crab-shrimp-bag", name: "Crab + Shrimp Bag", price: "$29.95", imgKey: "crabShrimpBag" },
            { id: "shrimp-only", name: "Shrimp Only Bag", price: "$21.95", imgKey: "shrimpOnlyBag" },
            { id: "lobster-boil", name: "Lobster Boil", price: "$36.95", imgKey: "lobsterBoil" },
            { id: "king-crab", name: "King Crab Feast", price: "$42.95", imgKey: "kingCrab" },
        ],
    },
    {
        id: "fried",
        title: "Crispy Baskets",
        caption: "Shrimp • Fish • Oysters",
        items: [
            { id: "shrimp-basket", name: "Shrimp Basket", price: "$14.99", imgKey: "shrimpBasket" },
            { id: "fish-basket", name: "Fish Basket", price: "$12.99", imgKey: "fishBasket" },
            { id: "oysters-fries", name: "Oysters + Fries", price: "$16.99", imgKey: "oystersFries" },
            { id: "combo", name: "Sea Combo", price: "$18.99", imgKey: "seaCombo" },
        ],
    },
];
