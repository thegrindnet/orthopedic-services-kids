import logo from "../assets/images/brand-hands.webp";
import office from "../assets/images/las-cruces-office.webp";
import pediatric from "../assets/images/pediatric-brace.webp";
import back from "../assets/images/custom-back-support.webp";
import leg from "../assets/images/custom-leg-brace.webp";
import knee from "../assets/images/knee-brace.webp";
export const business = {
  name: "Orthopedic Services / Kids LLC",
  tagline: "Personalized support. For every step.",
  phone: "(575) 556-9568",
  phoneHref: "tel:+15755569568",
  cell: "(575) 201-8581",
  cellHref: "tel:+15752018581",
  email: "josealvaradoco@yahoo.com",
  address: "2465 Bataan Memorial West, Suite #3",
  city: "Las Cruces, NM 88012",
  hours: "Monday–Friday, 8 AM–5 PM",
  serviceArea: "Las Cruces & Deming",
  // Facebook URL placeholder requested by David. Add the exact page URL to display the link.
  facebookUrl: "",
  directionsUrl:
    "https://www.google.com/maps/search/?api=1&query=2465%20Bataan%20Memorial%20West%20Suite%203%20Las%20Cruces%20NM%2088012",
  logo,
  office,
  pediatric,
};
export const navigationLinks = [
  { label: "Services", href: "#services" },
  { label: "Our work", href: "#gallery" },
  { label: "About us", href: "#about" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];
export const services = [
  {
    title: "Custom foot orthotics",
    text: "Foot orthotics fabricated in-house and custom shoe inserts, tailored to your individual support needs.",
    icon: "foot",
    category: "Made for you",
  },
  {
    title: "Pediatric bracing",
    text: "Personalized braces and orthotic support for children, with care that considers each child’s needs.",
    icon: "heart",
    category: "For growing lives",
  },
  {
    title: "Custom braces",
    text: "Bracing for children and adults, guided by an individual evaluation of alignment, movement, and support.",
    icon: "brace",
    category: "Individual support",
  },
  {
    title: "Diabetic shoes",
    text: "Footwear options for people with diabetes. Talk with our office about your needs and available options.",
    icon: "shoe",
    category: "Everyday comfort",
  },
  {
    title: "Knee braces",
    text: "Knee support selected with your comfort, everyday movement, and individual needs in mind.",
    icon: "knee",
    category: "Support in motion",
  },
  {
    title: "Back supports",
    text: "Custom and ready-made back supports. An evaluation helps determine the appropriate option for you.",
    icon: "back",
    category: "A personal fit",
  },
];
export const galleryItems = [
  {
    title: "Pediatric support",
    category: "Care for children",
    src: pediatric,
    alt: "Small custom orthotic brace with blue straps, shown in the business’s brochure",
  },
  {
    title: "Custom leg bracing",
    category: "Personalized orthotics",
    src: leg,
    alt: "Light-colored custom leg and foot brace from the business’s brochure",
  },
  {
    title: "Knee support",
    category: "Everyday movement",
    src: knee,
    alt: "Black knee brace with adjustable straps from the business’s brochure",
  },
  {
    title: "Custom back support",
    category: "Support that fits",
    src: back,
    alt: "Pediatric back support with a butterfly pattern from the business’s brochure",
  },
];
export const faqs = [
  {
    question: "What services does Orthopedic Services/Kids LLC offer?",
    answer:
      "We offer custom orthotics, diabetic shoes, custom shoe inserts, knee braces, back supports, and custom braces for children and adults. We also provide individual evaluations to assess your support and mobility needs.",
  },
  {
    question: "Do you provide orthotic services for both children and adults?",
    answer:
      "Yes! We provide orthotic services for children and adults, with bracing and support options tailored to each patient’s individual needs.",
  },
  {
    question: "Do you make custom orthotics in-house?",
    answer:
      "Yes. We fabricate custom foot orthotics in-house to provide support tailored to your feet. Contact our office for current turnaround times.",
  },
  {
    question: "What can I expect during an evaluation?",
    answer:
      "Your evaluation considers factors such as discomfort, posture, alignment, movement, and everyday function. Board-certified orthotist Joe A. Alvarado assesses your needs to help determine appropriate orthotic support.",
  },
  {
    question: "Do you offer custom and ready-made back supports?",
    answer:
      "Yes. We offer both custom back supports and ready-made options. An evaluation helps determine which type of support is appropriate for your needs.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "Yes, we accept most insurance plans. Please contact our office with your insurance information to confirm whether we accept your specific plan and discuss coverage for the services or products you need.",
  },
  {
    question: "Where are you located, and how can I contact you?",
    answer:
      "We are located at 2465 Bataan Memorial West, Suite #3, Las Cruces, NM 88012. Call our office at (575) 556-9568 or reach us by cell at (575) 201-8581 to ask questions or arrange an evaluation.",
  },
];
// No reviews supplied. Add genuine, attributed reviews here to activate Testimonials.
export const reviews = [];
