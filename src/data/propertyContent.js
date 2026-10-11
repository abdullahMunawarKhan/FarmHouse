// src/data/propertyContent.js
export const content = {
  hero: {
    headline: "Escape the ordinary.",
    subline: "A premium private retreat for unforgettable moments.",
    ctaExplore: "Explore the Estate",
    ctaEnquire: "Enquire Now",
  },
  estateIntro: {
    title: "Welcome to the Estate",
    description: "Experience luxurious serenity surrounded by nature. Our villa offers premium amenities for families, groups, and special occasions.",
    image: "/images/estate-intro.jpg",
  },
  amenities: [
    { id: 1, title: "Villa & Accommodation", img: "/images/villa.jpg", desc: "Spacious rooms with elegant design." },
    { id: 2, title: "Swimming Pool", img: "/images/pool.jpg", desc: "Crystal‑clear pool with lounge area." },
    { id: 3, title: "Garden & Play Area", img: "/images/garden.jpg", desc: "Lush garden and safe kids' zone." },
    { id: 4, title: "Cricket Turf", img: "/images/cricket.jpg", desc: "Perfect for friendly matches." },
  ],
  gallery: {
    images: [
      "/images/gallery1.jpg",
      "/images/gallery2.jpg",
      "/images/gallery3.jpg",
    ],
  },
  experiences: {
    items: [
      { id: 1, title: "Family Day Out", desc: "Relaxed day with pool and garden activities." },
      { id: 2, title: "Group Getaway", desc: "Ideal for friends or corporate retreats." },
    ],
  },
  booking: {
    headline: "Your next escape starts here.",
    fields: [
      { name: "name", label: "Name", type: "text", required: true },
      { name: "contact", label: "Phone or Email", type: "text", required: true },
      { name: "date", label: "Preferred Date", type: "date", required: false },
      { name: "guests", label: "Number of Guests", type: "number", required: false },
      { name: "message", label: "Message / Occasion", type: "textarea", required: false },
    ],
  },
  footer: {
    businessName: "Farmhouse Demo",
    address: "123 Luxury Lane, Scenic Valley",
    phone: "+1 555‑123‑4567",
    email: "info@farmhousedemo.com",
    social: {
      github: "https://github.com/yourrepo",
      instagram: "https://instagram.com/yourbrand",
    },
  },
};
