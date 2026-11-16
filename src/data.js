// All site content lives here, so prices and text can be changed in one place.

export const img = (file) => `${import.meta.env.BASE_URL}img/${file}`;

export const DELIVERY_FEE = 200;

export const MENU = [
  {
    id: "brownie", name: "Kurakkan Brownie", price: 360, cat: "baked",
    note: "Finger millet, Kithul treacle, Ceylon cinnamon",
    image: "brownie.jpg", alt: "Kurakkan Brownie in its Ceylon Crave box with cinnamon sticks and finger millet",
    blurb: "Dense, fudgy and dark, made with finger millet flour and sweetened with Kithul treacle.",
    tags: ["Kurakkan", "Kithul treacle", "Contains egg"],
    swatch: "radial-gradient(circle at 35% 35%, #6B3B2A, #3A1F16)",
  },
  {
    id: "muffin", name: "Kurakkan Banana Muffin", price: 550, cat: "baked",
    note: "Finger millet, ripe banana, Kithul",
    image: "muffin.jpg", alt: "Kurakkan Banana Muffins in a Ceylon Crave box with ripe bananas",
    blurb: "Soft, moist muffins where ripe banana does most of the sweetening. A good after-gym snack.",
    tags: ["Kurakkan", "Banana", "Contains egg"],
    swatch: "radial-gradient(circle at 35% 35%, #D9A65B, #8C5A2E)",
  },
  {
    id: "kithul", name: "Kithul & Coconut Pudding", price: 400, cat: "pudding",
    note: "Kithul flour, coconut milk, Kithul treacle",
    image: "pudding.jpg", alt: "Kithul and Coconut Pudding jar with coconut halves",
    blurb: "Silky Kithul flour pudding cooked in coconut milk, with the deep caramel taste of Kithul treacle.",
    tags: ["Kithul flour", "Coconut milk", "Chilled"],
    swatch: "radial-gradient(circle at 35% 35%, #C99A6B, #7A4E2E)",
  },
  { id: "woodapple", name: "Wood Apple & Coconut Pudding", price: 450, cat: "pudding", note: "Wood apple pulp, coconut milk, Kithul treacle", swatch: "radial-gradient(circle at 35% 35%, #A47A4C, #5C3B22)" },
  { id: "mango", name: "Mango Coconut Chilled Dessert", price: 450, cat: "chilled", note: "Ripe mango, coconut milk, sago", swatch: "radial-gradient(circle at 35% 35%, #F7C35A, #E08A1E)" },
  { id: "curd", name: "Buffalo Curd & Sago Dessert", price: 450, cat: "chilled", note: "Buffalo curd, sago, raisins and nuts", swatch: "radial-gradient(circle at 35% 35%, #FBF7EE, #D9CDB8)" },
  { id: "soursop", name: "Soursop (Anoda) Coconut Dessert", price: 450, cat: "chilled", note: "Soursop pulp, coconut milk", swatch: "radial-gradient(circle at 35% 35%, #DCE8C4, #8DAA5E)" },
  { id: "seasonal", name: "Seasonal Fruit Dessert", price: 450, cat: "chilled", note: "Rambutan, mangosteen, ambarella and more, in season", swatch: "radial-gradient(circle at 35% 35%, #E8566A, #8E1F35)" },
  { id: "box", name: "Mixed Dessert Box", price: 780, cat: "box", note: "A mix of the week's desserts, for sharing or gifting", swatch: "conic-gradient(#3A1F16 0 25%, #E3A33A 0 50%, #C99A6B 0 75%, #F7C35A 0)" },
];

export const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "baked", label: "Baked" },
  { id: "pudding", label: "Puddings" },
  { id: "chilled", label: "Chilled & fruit" },
  { id: "box", label: "Boxes" },
];

// Example order shown when the page opens.
export const EXAMPLE_ORDER = { brownie: 2, kithul: 1, mango: 1 };

export const SWAPS = [
  { was: "Refined wheat flour", now: "Kurakkan, Kithul, rice, mung bean & black gram flours" },
  { was: "Refined white sugar", now: "Kithul treacle, Kithul jaggery, coconut treacle & fruit purée" },
  { was: "Artificial flavouring", now: "Ceylon cinnamon, cardamom & real Sri Lankan fruit" },
];

export const PANTRY = [
  { name: "Kurakkan", text: "Finger millet, ground into a nutty, earthy flour.", color: "#7A4B3A" },
  { name: "Kithul", text: "Flour, treacle and jaggery from the Kithul palm.", color: "#B8732A" },
  { name: "Coconut", text: "Fresh coconut and coconut milk for richness.", color: "#F1E9DC" },
  { name: "Ceylon cinnamon", text: "True cinnamon, grown in Sri Lanka.", color: "#A0522D" },
  { name: "Buffalo curd", text: "Thick, tangy curd from local dairies.", color: "#EDE6D6" },
  { name: "Local fruit", text: "Mango, wood apple, soursop, rambutan and more, in season.", color: "#E9A23B" },
];

export const STEPS = [
  { title: "Pick your desserts", text: "Use the order slip to choose what you'd like. The total updates as you go." },
  { title: "Send us the message", text: "Copy your order and send it to Ceylon Crave on WhatsApp, Instagram or Facebook." },
  { title: "We bake it for you", text: "We confirm by message, then make your order fresh in our Malabe kitchen." },
  { title: "Delivery or pickup", text: "Get it delivered for Rs 200 or collect it from our pickup point at no charge." },
];

export const VALUES = [
  { title: "Local heritage", text: "Traditional ingredients in formats people reach for every day." },
  { title: "Less refined sugar", text: "Sweetness from Kithul and fruit, measured in every recipe." },
  { title: "Honest labels", text: "Ingredients, allergens, dates and storage on every pack. Health claims only when the final recipe supports them." },
  { title: "Less waste", text: "Made to order, portioned carefully, moving to recyclable packaging." },
  { title: "Food safety", text: "A hygienic, HACCP-based kitchen layout and trained staff." },
  { title: "Farmers first", text: "We buy from local growers and want to buy more each year." },
];

export const TEAM = [
  { name: "S M B H J Jayasinghe", role: "Managing Director", photo: "p1.jpg" },
  { name: "D M D P Dewmini", role: "Marketing & Customer Relations", photo: "p4.jpg" },
  { name: "H P S G Jayasinghe", role: "Production & Quality", photo: "p3.jpg" },
  { name: "J K T S Jayakody", role: "Finance & Administration", photo: "p2.jpg" },
];

export const FAQS = [
  { q: "Are your desserts sugar-free?", a: "No. We don't use refined white sugar in our recipes. Sweetness comes from Kithul treacle, Kithul jaggery, coconut treacle and fruit, in measured amounts. Each pack shows its ingredients and nutrition information." },
  { q: "How long do they keep?", a: "Brownies and muffins are best within a few days, kept in a cool, dry place or the fridge. Puddings and fruit desserts contain coconut milk, curd or fresh fruit, so keep them refrigerated and eat them by the best-before date on the label." },
  { q: "Which allergens should I know about?", a: "Depending on the dessert: egg, milk (buffalo curd), nuts (cashew, peanut) and coconut. Every label lists the allergens for that product. Message us if you need help choosing." },
  { q: "Where do you deliver?", a: "We start in Malabe and nearby areas through delivery partners, for a Rs 200 delivery fee. Pickup from our collection point in Malabe is free. Chilled desserts travel in insulated containers." },
  { q: "Can I order for an event, café or office?", a: "Yes. Our Mixed Dessert Box suits birthdays, festivals and office treats, and we take larger custom orders for events. Cafés, gyms and health-food stores can ask us about regular supply." },
];

export const CONTACT = [
  { label: "Phone", value: "011 2 442122" },
  { label: "Email", value: "ceyloncrave.lk@gmail.com" },
  { label: "Kitchen", value: "No. 215, New Kandy Road, Malabe", copy: "No. 215, New Kandy Road, Malabe, Sri Lanka" },
];

// "Rs 1,234" with a non-breaking space so prices never split across lines.
export const rs = (n) => "Rs " + n.toLocaleString("en-US");
