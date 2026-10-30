
// All the text and image paths of the website live here.

// Automatically creates the correct asset path for GitHub Pages.
const publicAsset = (path) => `${import.meta.env.BASE_URL}${path}`;

export const navLinks = [
  { label: "Home", href: "#top" },
  { label: "About us", href: "#about" },
  { label: "Pricing", href: "#services" },
  { label: "Blogs", href: "#blogs" },
];

export const logos = [
  "Cloudly",
  "Camera",
  "Marketly",
  "Codelify",
  "Natural",
  "Doctorly",
  "Architect",
  "Techlify",
];

export const solutionsAccordion = [
  {
    title: "01. Environmental Conservation",
    text: "Revolutionize the construction industry through innovation, integrity, and excellence. We are dedicated to delivering superior quality projects that exceed client communities.",
  },
  {
    title: "02. Enhance Efficiency Naturally",
    text: "Optimize resource management and clean energy infrastructure through seamless integration with eco-friendly software frameworks.",
  },
  {
    title: "03. Sustainable Living",
    text: "Embrace modern, minimalist spatial setups that utilize biophilic designs and circular building resources for lasting generational balance.",
  },
];

export const reviewAvatars = [
  publicAsset("images/author-emma-thompson.jpg"),
  publicAsset("images/author-marcus-chen.png"),
  publicAsset("images/designing-solutions-review-person-1.png"),
  publicAsset("images/designing-solutions-review-person-2.png"),
];

export const galleryCards = [
  {
    image: publicAsset("images/services-wind-aesthetic.webp"),
    alt: "Wind turbine spinning against clear sky",
    title: "Wind Aesthetic",
    text: "We Create Clean, Modern Designs That Resonate With Your Audience While Building A Strong, Sustainable Brand Presence.",
  },
  {
    image: publicAsset("images/services-solar-panels.webp"),
    alt: "Solar panels reflecting sunlight",
    title: "Eco E-commerce",
    text: "We Build Powerful Online Stores That Deliver High Conversion Rates With Ethical Practices And Support A Healthier Planet.",
  },
  {
    image: publicAsset("images/services-green-sky.webp"),
    alt: "Rainbow over a landscape with wind turbines far away",
    title: "Green SEO",
    text: "We Optimize Your Search Rankings Using Clean Code And Efficient Structures That Drive Consistent Organic Traffic Growth.",
  },
];

export const features = [
  {
    title: "Bio-Integrated Solutions",
    text: "Nature Inspires Our Approach, Merging Biological Intelligence With The Modern Technology.",
    icon: "globe",
  },
  {
    title: "Eco-First Features",
    text: "Crafted With Environmental Responsibility, Every Feature Intentionally Minimizes Digital Waste.",
    icon: "home",
  },
  {
    title: "Circular Design Principles",
    text: "Rooted In Renewal And Longevity, Our Circular Philosophy Embraces Sustainability At Its Core.",
    icon: "pen",
  },
  {
    title: "Sustainable Growth",
    text: "Empower Brands To Scale Purposefully By Providing Eco-Conscious Digital Tools.",
    icon: "chart",
  },
];

export const testimonials = [
  {
    name: "Esther Howard",
    location: "Houston, TX",
    image: publicAsset("images/testimonial-esther-howard.png"),
    dark: false,
    quote:
      "\"The Team Transformed Our Old Patio Into A Sleek Outdoor Lounge. We Are So Happy With The Results! The Skill And Care They Showed During Each Stage Of The Build Was Superb. It Is Now Our Favorite Home Retreat.\"",
  },
  {
    name: "David Miller",
    location: "Denver, CO",
    image: publicAsset("images/testimonial-david-miller.png"),
    dark: true,
    quote:
      "The New Pool Deck Is Ideal For Summer Parties. They Completed The Installation Under Budget And Kept The Site Perfectly Clean. I Warmly Suggest Their Experts To Anyone Seeking Premium Paving. Our Neighbors Are Already Asking For A Referral.",
  },
  {
    name: "Jenkins Torret",
    location: "Phoenix, AZ",
    image: publicAsset("images/testimonial-jenkins-torret.png"),
    dark: false,
    quote:
      "“I Finally Have Peace Of Mind Regarding My Garden Care. This Team Is Reliable, Fast, And Extremely Meticulous With Their Monthly Upkeep. It Is A Total Joy Working With A Business That Actually Prioritizes Excellence. They Make Keeping Lawns Green.”",
  },
  {
    name: "Marcus Thorne",
    location: "Austin, TX",
    image: publicAsset("images/testimonial-marcus-thorne.jpg"),
    dark: true,
    quote:
      "\"The Crew Converted Our Boring Patio Into A Stylish Outdoor Lounge. We Are So Thrilled With The Outcome! The Craftsmanship And Dedication They Showed During Every Phase Of The Build Was Impressive. It Is Now Our Ultimate Favorite Daily Home Space.\"",
  },
];

export const adventureImages = [
  {
    className: "media-top-left",
    src: publicAsset("images/gallery-garden1.webp"),
    alt: "",
  },
  {
    className: "media-top-center",
    src: publicAsset("images/gallery-solar-panel.jpg"),
    alt: "Solar panel details close-up",
  },
  {
    className: "media-bottom-left",
    src: publicAsset("images/gallery-dam-bridge.webp"),
    alt: "Water reservoir dam overview",
  },
  {
    className: "media-top-right",
    src: publicAsset("images/gallery-wind-fans.jpg"),
    alt: "Wind farm turbines landscape",
  },
  {
    className: "media-bottom-center",
    src: publicAsset("images/gallery-tree.jpg"),
    alt: "Succulent plant patterns grid",
  },
  {
    className: "media-bottom-right",
    src: publicAsset("images/gallery-garden.webp"),
    alt: "Green landscape aerial view",
  },
];

export const blogPosts = [
  {
    author: "Elena Vargas",
    avatar: publicAsset("images/author-elena-vargas.jpg"),
    date: "DEC 25, 2025",
    category: "TECHNOLOGY",
    image: publicAsset("images/news-circular-revolution.png"),
    title: "The Circular Revolution: Turning Waste Into Business Value.",
  },
  {
    author: "Marcus Chen",
    avatar: publicAsset("images/author-marcus-chen.png"),
    date: "APR 11, 2026",
    category: "SUSTAINABILITY",
    image: publicAsset("images/news-eco-friendly-choices.png"),
    title: "Eco-Friendly Choices: Digital Consciousness & Impact.",
  },
  {
    author: "Emma Thompson",
    avatar: publicAsset("images/author-emma-thompson.jpg"),
    date: "FEB 17, 2026",
    category: "SUSTAINABILITY",
    image: publicAsset("images/news-sustainable-brands.jpg"),
    title: "How Sustainable Brands Win Consumers & Investors.",
  },
];

export const footerColumns = [
  { title: "MAIN PAGES", links: ["Home", "About Us", "Contact", "Pricing"] },
  { title: "COMPANY", links: ["Blog", "Blog Details", "Pricing", "404 Not Found"] },
  { title: "TEMPLATE", links: ["Terms And Condition", "Privacy Policy"] },
];

export const socials = [
  { label: "FACEBOOK", href: "https://www.facebook.com/" },
  { label: "INSTAGRAM", href: "https://www.instagram.com/" },
  { label: "LINKEDIN", href: "https://www.linkedin.com/" },
  { label: "MEDIUM", href: "https://medium.com/" },
];
