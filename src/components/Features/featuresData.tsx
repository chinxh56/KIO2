import { Feature } from "@/types/feature";
import Image from "next/image";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: <Image width={60} height={60} src="/images/natural.png" alt="" />,
    title: "Pure and Natural",
    paragraph:
      "Our cooking oil is crafted from the finest ingredients, ensuring purity and quality. Perfect for all your culinary needs.",
  },
  {
    id: 2,
    icon: <Image width={50} height={50} src="/images/farmer.png" alt="" />,
    title: "Best Farmer",
    paragraph:
      "Our oil supports sustainable farming practices and is crafted to withstand high-heat cooking, maintaining its stability and flavor at high temperatures to suit your culinary needs",
  },
  {
    id: 3,
    icon: <Image width={50} height={50} src="/images/nutrients.png" alt="" />,
    title: "Rich in Nutrients",
    paragraph:
      "Packed with essential nutrients and healthy fats, our cooking oil supports a balanced diet without compromising flavor.",
  },
];

export default featuresData;
