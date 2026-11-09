export const site = {
  name: "GOH Graphix",
  founder: "Samuel Hilary",
  email: "graphixgoh@gmail.com",
  phone: "+234 904 506 9956",
  phoneHref: "tel:+2349045069956",
  whatsapp: "https://wa.me/2349045069956",
  facebook: "https://facebook.com/GOHGraphix",
  instagram: "https://instagram.com/gohgraphix",
  location: "Port Harcourt, Nigeria",
  hours: "Monday–Saturday, 9am–6pm WAT",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://goh-graphix.vercel.app",
};

export const navigation = [
  { label: "Work", id: "portfolio" },
  { label: "Services", id: "services" },
  { label: "About", id: "about" },
  { label: "Training", id: "training" },
];

export const contactServices = [
  "Brand Identity",
  "Logo Design",
  "Social Media",
  "Flyer Design",
  "YouTube Thumbnail",
  "Design Training",
  "Other",
] as const;

export type ContactService = (typeof contactServices)[number];

export function isContactService(value: string): value is ContactService {
  return contactServices.some((service) => service === value);
}
