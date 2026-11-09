export type Category =
  | "All"
  | "Brand Identity"
  | "Logo Design"
  | "Social Media"
  | "Flyer Design"
  | "YouTube Thumbnail"
  | "3D Logo";

export interface Work {
  id: string;
  title: string;
  category: Category;
  client?: string;
  description: string;
  image: string;
  preview?: string;
  isSheet?: boolean;
  featured?: boolean;
  tags: string[];
}

export const works: Work[] = [
  {
    id: "brand-itz-done-1",
    title: "ITZ-DONE Brand Identity",
    category: "Brand Identity",
    client: "ITZ-DONE Tech Solutions",
    description: "A complete identity suite covering the logo system, colour palette, mockups, and marketing assets for a growing technology company.",
    image: "/works/20260417_025719.png",
    preview: "/previews/itz-done-identity.webp",
    isSheet: true,
    featured: true,
    tags: ["branding", "logo", "technology", "identity"],
  },
  {
    id: "brand-itz-done-2",
    title: "ITZ-DONE Brand Presentation",
    category: "Brand Identity",
    client: "ITZ-DONE Tech Solutions",
    description: "An extended identity presentation featuring the colour story, supporting palette, applications, and campaign flyer direction.",
    image: "/works/20260417_102907.png",
    preview: "/previews/itz-done-presentation.webp",
    isSheet: true,
    featured: true,
    tags: ["branding", "presentation", "technology", "campaign"],
  },
  {
    id: "thumbnail-nollywood",
    title: "Nollywood YouTube Thumbnails",
    category: "YouTube Thumbnail",
    description: "High-impact episode artwork developed to create instant recognition and improve click appeal across a Nollywood content series.",
    image: "/works/20260417_152725.png",
    preview: "/previews/youtube-thumbnails.webp",
    isSheet: true,
    featured: true,
    tags: ["thumbnail", "YouTube", "Nollywood", "entertainment"],
  },
  {
    id: "3d-brand-logos",
    title: "3D Brand Logo Mockups",
    category: "3D Logo",
    description: "A collection of dimensional brand visuals created for Alpha Energy, Clevenson Salon, D'Bess, Tee & Bliss Concept, and Drikz Sounds.",
    image: "/works/20260417_152808.png",
    preview: "/previews/brand-mockups.webp",
    isSheet: true,
    featured: true,
    tags: ["3D", "mockup", "brand", "logo"],
  },
  {
    id: "social-media-designs",
    title: "Social Media Campaign Designs",
    category: "Social Media",
    description: "A set of campaign graphics for Spring Bank, GOH Graphix, ITZ-DONE, and a local food brand, designed to stop the scroll and communicate quickly.",
    image: "/works/20260417_153028.png",
    preview: "/previews/social-campaigns.webp",
    isSheet: true,
    featured: true,
    tags: ["social media", "campaign", "Instagram", "marketing"],
  },
  {
    id: "flyer-designs",
    title: "Professional Flyer Designs",
    category: "Flyer Design",
    description: "Bold print and digital flyers for online classes, creative courses, photography, solar energy, and other growing businesses.",
    image: "/works/20260417_153117.png",
    preview: "/previews/flyer-designs.webp",
    isSheet: true,
    tags: ["flyer", "print", "marketing", "events"],
  },
  {
    id: "logo-designs",
    title: "Logo Design Portfolio",
    category: "Logo Design",
    description: "A varied logo collection spanning technology, energy, photography, food, entertainment, and personal brands.",
    image: "/works/20260417_153147.png",
    preview: "/previews/logo-designs.webp",
    isSheet: true,
    featured: true,
    tags: ["logo", "identity", "minimal", "3D"],
  },
  {
    id: "brand-identity-2",
    title: "Brand Identity & Colour Story",
    category: "Brand Identity",
    client: "ITZ-DONE Tech Solutions",
    description: "A focused look at the brand's colour architecture and how its primary and supporting palette works across different touchpoints.",
    image: "/works/20260417_153218.png",
    preview: "/previews/colour-story.webp",
    isSheet: true,
    tags: ["branding", "colour", "identity", "technology"],
  },
  {
    id: "services-overview",
    title: "Design Services Overview",
    category: "Brand Identity",
    description: "A service overview covering brand identity, logos, social content, campaigns, motion editing, and creative training.",
    image: "/works/20260417_153248.png",
    preview: "/previews/design-services.webp",
    tags: ["services", "overview", "studio"],
  },
  {
    id: "who-we-are",
    title: "Who We Are — Studio Identity",
    category: "Brand Identity",
    description: "A brand manifesto introducing GOH Graphix as both a creative design studio and a practical training academy.",
    image: "/works/20260417_153331.png",
    preview: "/previews/studio-identity.webp",
    tags: ["about", "brand", "identity", "studio"],
  },
  {
    id: "brand-overview",
    title: "GOH Graphix Brand Overview",
    category: "Brand Identity",
    description: "A complete brand overview combining the logo mark, positioning, studio purpose, and visual language in one presentation.",
    image: "/works/20260417_153425.png",
    preview: "/previews/brand-overview.webp",
    featured: true,
    tags: ["brand", "overview", "logo", "identity"],
  },
  {
    id: "about-us",
    title: "About GOH Graphix",
    category: "Social Media",
    description: "An about-us social card that communicates the studio story, mission, and approach in a concise visual format.",
    image: "/works/20260417_195839.jpg",
    preview: "/previews/about-studio.webp",
    tags: ["about", "social", "brand story"],
  },
  {
    id: "lets-work-together",
    title: "Let's Work Together — CTA Design",
    category: "Social Media",
    description: "A contact-focused social graphic with clear routes for prospective design clients and new students.",
    image: "/works/20260417_224226.png",
    preview: "/previews/contact-design.webp",
    tags: ["call to action", "contact", "social media"],
  },
];

export const categories: Category[] = [
  "All",
  "Brand Identity",
  "Logo Design",
  "Social Media",
  "Flyer Design",
  "YouTube Thumbnail",
  "3D Logo",
];

export const featuredWorks = works.filter((work) => work.featured);

export const stats = [
  { label: "Projects Delivered", value: "50+" },
  { label: "Happy Clients", value: "30+" },
  { label: "Design Categories", value: "6" },
  { label: "Designers Trained", value: "100+" },
];

export const services = [
  {
    id: "brand-identity",
    icon: "Layers",
    title: "Brand Identity Design",
    description: "A complete visual system—from logo and colour to typography and guidelines—built to make your business easy to recognise.",
    color: "blue",
  },
  {
    id: "logo-design",
    icon: "PenTool",
    title: "Logo Design",
    description: "Distinctive, flexible marks that capture your brand's personality and continue to work at every size and touchpoint.",
    color: "orange",
  },
  {
    id: "social-media",
    icon: "Share2",
    title: "Social Media Design",
    description: "Consistent campaign graphics and content templates that help your brand look sharper and communicate faster online.",
    color: "blue",
  },
  {
    id: "flyer-design",
    icon: "FileText",
    title: "Marketing & Flyer Design",
    description: "Persuasive digital and print collateral designed to make the message clear and move the audience to act.",
    color: "orange",
  },
  {
    id: "thumbnail",
    icon: "Youtube",
    title: "YouTube Thumbnail Design",
    description: "Bold, recognisable thumbnail systems that earn attention and keep your channel presentation consistent.",
    color: "blue",
  },
  {
    id: "training",
    icon: "GraduationCap",
    title: "Creative Design Training",
    description: "Hands-on training for beginners, covering the fundamentals, practical projects, portfolio development, and direct mentorship.",
    color: "orange",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Alpha Energy",
    role: "Solar Power Solutions",
    quote: "GOH Graphix delivered a brand identity that perfectly captures our energy and professionalism. The logo and marketing materials exceeded every expectation.",
    avatar: "AE",
    color: "blue",
  },
  {
    id: 2,
    name: "Seemless Photography",
    role: "Photography Studio",
    quote: "Our new logo is elegant, timeless, and exactly what we needed. Samuel has an eye for detail and truly understands brand aesthetics.",
    avatar: "SP",
    color: "orange",
  },
  {
    id: 3,
    name: "ITZ-DONE Tech Solutions",
    role: "Technology & Forex Education",
    quote: "From the brand identity to social media designs and campaign flyers, GOH Graphix handled everything flawlessly and professionally.",
    avatar: "IT",
    color: "blue",
  },
  {
    id: 4,
    name: "Drikz Sounds",
    role: "Entertainment Specialist",
    quote: "The 3D brand mockup was absolutely fire. Our audience loved the new visual identity. GOH Graphix is the real deal.",
    avatar: "DS",
    color: "orange",
  },
];
