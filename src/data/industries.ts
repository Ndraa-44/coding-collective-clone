import {
  Landmark,
  Monitor,
  Banknote,
  Plane,
  ShoppingCart,
  Cpu,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Industry {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
}

export const industries: Industry[] = [
  {
    id: 1,
    title: "Government & Public Sector",
    description:
      "We deliver secure, compliant, and scalable digital solutions for public administration, e-government initiatives, and citizen services.",
    icon: Landmark,
    tags: ["E-Government", "Public Data", "Regulatory Compliance"],
  },
  {
    id: 2,
    title: "Agencies & Digital Businesses",
    description:
      "Empowering digital agencies and online businesses with robust tech infrastructure, custom tools, and flexible talent to accelerate growth.",
    icon: Monitor,
    tags: ["Digital Transformation", "SaaS", "Marketing Tech"],
  },
  {
    id: 3,
    title: "Financial Services & Fintech",
    description:
      "Building reliable and secure platforms for banking, insurance, payment processing, and emerging fintech products with full regulatory alignment.",
    icon: Banknote,
    tags: ["Payment Systems", "Core Banking", "Risk & Compliance"],
  },
  {
    id: 4,
    title: "Travel & Hospitality",
    description:
      "Technology solutions for travel platforms, booking systems, hotel management, and enhanced digital guest experiences.",
    icon: Plane,
    tags: ["Booking Engine", "PMS Integration", "Customer Experience"],
  },
  {
    id: 5,
    title: "Retail & Omnichannel Commerce",
    description:
      "Connecting physical and digital retail touchpoints with seamless inventory management, POS systems, and unified commerce platforms.",
    icon: ShoppingCart,
    tags: ["Omnichannel", "E-Commerce", "Inventory Management"],
  },
  {
    id: 6,
    title: "Technology & Software Companies",
    description:
      "Partnering with tech companies and ISVs to scale engineering teams, accelerate product delivery, and maintain operational excellence.",
    icon: Cpu,
    tags: ["Team Augmentation", "Product Engineering", "DevOps"],
  },
];
