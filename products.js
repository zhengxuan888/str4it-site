// Product data for Strait Pristine
const PRODUCTS = [
    {
        id: 1,
        name: "Amara Silk Kaftan",
        price: 420,
        salePrice: null,
        category: "Kaftans",
        badge: "New",
        image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&q=80",
            "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&q=80"
        ],
        description: "Crafted from the finest mulberry silk, the Amara Kaftan features a flowing silhouette with hand-finished seams. Inspired by the graceful lines of Peranakan architecture, this piece transitions effortlessly from beach cover-up to evening wear. The relaxed fit flatters every body type.",
        material: "100% Mulberry Silk",
        sizes: ["XS", "S", "M", "L", "XL"],
        care: "Dry clean only. Store on padded hanger. Avoid direct sunlight.",
        dimensions: "Length: 130cm (M), Bust: 110cm (M), Sleeve: 45cm",
        shipping: "Complimentary shipping. Delivered in 3-5 business days."
    },
    {
        id: 2,
        name: "Merlion Print Dress",
        price: 380,
        salePrice: 265,
        category: "Dresses",
        badge: "Sale",
        image: "https://images.unsplash.com/photo-1596783074918-c84e0996ca4c?w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1596783074918-c84e0996ca4c?w=800&q=80"
        ],
        description: "A bold celebration of Singapore heritage, this midi dress features an exclusive artistic print on premium crepe fabric. The fitted bodice and A-line skirt create a flattering silhouette that works beautifully for garden parties and brunch alike. Hidden side zip closure.",
        material: "97% Polyester, 3% Elastane",
        sizes: ["XS", "S", "M", "L", "XL"],
        care: "Machine wash cold, gentle cycle. Hang dry. Iron on low heat.",
        dimensions: "Length: 105cm (M), Bust: 92cm (M), Waist: 76cm (M)",
        shipping: "Complimentary shipping. Delivered in 3-5 business days."
    },
    {
        id: 3,
        name: "Straits Garden Cushion",
        price: 95,
        salePrice: null,
        category: "Home",
        badge: null,
        image: "https://images.unsplash.com/photo-1616627561950-9f75e84e78a2?w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1616627561950-9f75e84e78a2?w=800&q=80"
        ],
        description: "Bring the lush beauty of a Straits garden into your home with this hand-embroidered cushion cover. Features traditional botanical motifs inspired by the gardens of historic shophouses along Koon Wan Road. Pairs beautifully with our Spice Market Throw.",
        material: "100% Linen cover, Duck feather insert",
        sizes: ["One Size"],
        care: "Cover: Machine washable. Insert: Dry clean only.",
        dimensions: "45cm x 45cm",
        shipping: "Standard shipping applies. Delivered in 5-7 business days."
    },
    {
        id: 4,
        name: "Tropical Rattan Tote",
        price: 185,
        salePrice: null,
        category: "Bags",
        badge: "New",
        image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80"
        ],
        description: "Hand-woven from sustainably sourced rattan by artisans in rural Java. This structured tote features vegetable-tanned leather trim and a cotton-lined interior with zip closure. Spacious enough for a day at the beach or a weekend market run.",
        material: "Natural Rattan, Leather trim, Cotton lining",
        sizes: ["One Size"],
        care: "Wipe clean with damp cloth. Avoid prolonged sun exposure.",
        dimensions: "35cm W x 30cm H x 15cm D, Handle drop: 20cm",
        shipping: "Complimentary shipping. Delivered in 3-5 business days."
    },
    {
        id: 5,
        name: "Jade Embroidered Maxi",
        price: 520,
        salePrice: null,
        category: "Dresses",
        badge: null,
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80"
        ],
        description: "An exquisite floor-length gown featuring intricate jade-toned embroidery throughout the bodice and sleeves. The flowing silk chiffon skirt creates ethereal movement with every step. Perfect for gala dinners, weddings, or any occasion that calls for understated glamour.",
        material: "Silk chiffon with metallic thread embroidery",
        sizes: ["XS", "S", "M", "L", "XL"],
        care: "Dry clean only. Store in garment bag.",
        dimensions: "Length: 155cm (M), Bust: 88cm (M), Waist: 72cm (M)",
        shipping: "Complimentary shipping. Delivered in 5-7 business days."
    },
    {
        id: 6,
        name: "Peranakan Clutch",
        price: 220,
        salePrice: 155,
        category: "Bags",
        badge: "Sale",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80"
        ],
        description: "Inspired by the vibrant tiles of Peranakan shophouses, this structured clutch features hand-painted details on supple calfskin. Gold-tone hardware and a detachable chain strap let you carry it as a clutch or crossbody. Interior includes card slots and a zip pocket.",
        material: "Calfskin leather, Suede lining, Gold-tone hardware",
        sizes: ["One Size"],
        care: "Store in dust bag. Professional leather cleaning recommended.",
        dimensions: "25cm W x 15cm H x 5cm D, Chain drop: 55cm",
        shipping: "Complimentary shipping. Delivered in 3-5 business days."
    },
    {
        id: 7,
        name: "Batik Pareo Wrap",
        price: 120,
        salePrice: null,
        category: "Beachwear",
        badge: null,
        image: "https://images.unsplash.com/photo-1600166898405-da9535204843?w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1600166898405-da9535204843?w=800&q=80"
        ],
        description: "A versatile batik-print wrap crafted from lightweight cotton voile. Hand-block printed by artisans in Pekalongan using traditional wax-resist techniques. Can be worn as a sarong, beach cover-up, scarf, or even a tablecloth for impromptu picnics.",
        material: "100% Cotton Voile",
        sizes: ["One Size"],
        care: "Machine wash cold. Colors may soften beautifully with washing.",
        dimensions: "180cm x 110cm",
        shipping: "Standard shipping applies. Delivered in 3-5 business days."
    },
    {
        id: 8,
        name: "Porcelain Vase Set",
        price: 280,
        salePrice: null,
        category: "Home",
        badge: null,
        image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80"
        ],
        description: "A set of three hand-thrown porcelain vases in graduating sizes. Features a subtle crackle glaze inspired by Song dynasty ceramics, bridging ancient tradition with contemporary design. Each vase is unique — slight variations in glaze pattern are part of their charm.",
        material: "Porcelain with crackle glaze",
        sizes: ["Set of 3"],
        care: "Hand wash only. Watertight — suitable for fresh flowers.",
        dimensions: "Small: 10cm dia x 15cm H, Medium: 12cm dia x 20cm H, Large: 15cm dia x 28cm H",
        shipping: "Complimentary shipping. Delivered in 5-7 business days."
    },
    {
        id: 9,
        name: "Sunset Linen Dress",
        price: 340,
        salePrice: 238,
        category: "Dresses",
        badge: "-30%",
        image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80"
        ],
        description: "Effortless elegance in washed European linen. The relaxed silhouette features gathered shoulders and a self-tie belt for a flattering drape. Garment-dyed in a warm sunset tone that complements a range of skin tones. Ideal for resort wear or casual weekend outings.",
        material: "100% European Washed Linen",
        sizes: ["XS", "S", "M", "L", "XL"],
        care: "Machine wash cold, reshape while damp. Iron while slightly damp for best results.",
        dimensions: "Length: 120cm (M), Bust: 104cm (M)",
        shipping: "Complimentary shipping. Delivered in 3-5 business days."
    },
    {
        id: 10,
        name: "Orchid Print Kaftan",
        price: 385,
        salePrice: null,
        category: "Kaftans",
        badge: "New",
        image: "https://images.unsplash.com/photo-1581382575275-979b1b4e1c3f?w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1581382575275-979b1b4e1c3f?w=800&q=80"
        ],
        description: "An exclusive orchid print designed in collaboration with Singapore Botanic Gardens. This relaxed kaftan is cut from breathable silk georgette with mother-of-pearl button details at the neckline. Featherweight and packable — your perfect travel companion.",
        material: "100% Silk Georgette",
        sizes: ["XS", "S", "M", "L", "XL"],
        care: "Dry clean recommended. Cool iron if needed.",
        dimensions: "Length: 125cm (M), Bust: 120cm (M), Sleeve: 40cm",
        shipping: "Complimentary shipping. Delivered in 3-5 business days."
    },
    {
        id: 11,
        name: "Golden Coast Tote",
        price: 165,
        salePrice: null,
        category: "Bags",
        badge: null,
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80"
        ],
        description: "A spacious everyday tote in warm tan leather that develops a beautiful patina over time. Features an interior zip pocket, magnetic snap closure, and reinforced base. The perfect companion for work, weekend, and everything in between.",
        material: "Full-grain Vegetable-tanned Leather, Cotton twill lining",
        sizes: ["One Size"],
        care: "Condition leather periodically. Store stuffed in dust bag when not in use.",
        dimensions: "40cm W x 35cm H x 15cm D, Handle drop: 25cm",
        shipping: "Complimentary shipping. Delivered in 3-5 business days."
    },
    {
        id: 12,
        name: "Spice Market Throw",
        price: 145,
        salePrice: null,
        category: "Home",
        badge: null,
        image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80"
        ],
        description: "Woven from the finest merino wool, this throw blanket features warm spice-toned stripes inspired by the colours of a traditional spice market. Finished with hand-twisted fringe. Drape it over your sofa for an instant dose of warmth and texture.",
        material: "100% Merino Wool",
        sizes: ["One Size"],
        care: "Dry clean recommended. Alternatively, gentle machine wash cold.",
        dimensions: "180cm x 130cm",
        shipping: "Standard shipping applies. Delivered in 5-7 business days."
    }
];

function getProductById(id) {
    return PRODUCTS.find(p => p.id === parseInt(id));
}
