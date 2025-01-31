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
const Card = ({ data }) => {
    return (React.createElement(motion.div, { whileHover: { scale: 1.05, rotate: 1 }, whileTap: { scale: 0.95 }, className: "relative flex flex-col justify-center items-start p-0 isolation-isolate w-[166px] h-[213px] rounded-lg border overflow-hidden shadow-md cursor-pointer transition-shadow duration-300 hover:shadow-2xl" },
        React.createElement(motion.img, { src: data.image, alt: data.title, className: "w-full h-32 object-cover rounded-t-lg", whileHover: { opacity: 0.9 } }),
        React.createElement("div", { className: "p-4" },
            React.createElement(motion.span, { className: "text-xl font-semibold", whileHover: { color: "#2563eb" } },
                "$",
                data.price,
                " /mo"),
            React.createElement(motion.h2, { className: "text-lg font-bold mt-2", whileHover: { color: "#3b82f6" } }, data.title),
            React.createElement("p", { className: "text-sm text-gray-500" }, data.location),
            React.createElement("div", { className: "flex justify-between mt-2 text-sm text-gray-600" },
                React.createElement(motion.p, { whileHover: { scale: 1.2 } },
                    data.beds,
                    " Beds"),
                React.createElement(motion.p, { whileHover: { scale: 1.2 } },
                    data.baths,
                    " Baths"),
                React.createElement(motion.p, { whileHover: { scale: 1.2 } }, data.area)))));
};
const HomePage = () => {
    return (React.createElement("div", { className: "p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" }, cardData.map((card) => (React.createElement(Card, { key: card.id, data: card })))));
};
export default HomePage;
