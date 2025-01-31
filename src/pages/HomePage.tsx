import React from "react";
import { motion } from "framer-motion"; 
const cardData = [
  {
    id: 1,
    image: "image-url-1.jpg",
    price: 1500,
    title: "Equestrian Family Home",
    location: "New York",
    beds: 3,
    baths: 2,
    area: "2000 sqft",
  },
  {
    id: 2,
    image: "image-url-2.jpg",
    price: 2000,
    title: "Modern Family House",
    location: "Los Angeles",
    beds: 4,
    baths: 3,
    area: "2500 sqft",
  },
  // Add more cards here
];
interface CardProps {
  key: number;
  data: {
    id: number;
    image: string;
    price: number;
    title: string;
    location: string;
    beds: number;
    baths: number;
    area: string;
  };
}

const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: 1 }}
      whileTap={{ scale: 0.95 }}
      className="relative flex flex-col justify-center items-start p-0 isolation-isolate w-[166px] h-[213px] rounded-lg border overflow-hidden shadow-md cursor-pointer transition-shadow duration-300 hover:shadow-2xl"
    >
      {/* Image with Overlay Animation */}
      <motion.img
        src={data.image}
        alt={data.title}
        className="w-full h-32 object-cover rounded-t-lg"
        whileHover={{ opacity: 0.9 }}
      />
      <div className="p-4">
        <motion.span
          className="text-xl font-semibold"
          whileHover={{ color: "#2563eb" }}
        >
          ${data.price} /mo
        </motion.span>
        <motion.h2
          className="text-lg font-bold mt-2"
          whileHover={{ color: "#3b82f6" }}
        >
          {data.title}
        </motion.h2>
        <p className="text-sm text-gray-500">{data.location}</p>
        <div className="flex justify-between mt-2 text-sm text-gray-600">
          <motion.p whileHover={{ scale: 1.2 }}>{data.beds} Beds</motion.p>
          <motion.p whileHover={{ scale: 1.2 }}>{data.baths} Baths</motion.p>
          <motion.p whileHover={{ scale: 1.2 }}>{data.area}</motion.p>
        </div>
      </div>
    </motion.div>
  );
};


const HomePage = () => {
  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {cardData.map((card) => (
        <Card key={card.id} data={card} />
      ))}
    </div>
  );
};

export default HomePage;
