import Image from "next/image";
import { useEffect, useState } from "react";
import Hero from "../sections/Hero";
import images from "../images.json";
import { motion } from "framer-motion";
import Head from "next/head";
function cn(...classes) {
  return classes.join(" ");
}

export default function Gallery() {
  // Get unique usernames
  const uniqueUsernames = Array.from(
    new Set(images.map((image) => image.category))
  );

  // Create filters
  const filters = [
    { name: "all", label: "All" },
    ...uniqueUsernames.map((category) => ({ name: category, label: category })),
  ];
  const [selectedFilter, setSelectedFilter] = useState("all");
  const filteredImages =
    selectedFilter === "all"
      ? images
      : images.filter((image) => image.category === selectedFilter);
  return (
    <>
<Head>
        <title>AI Gallery | Fetnaci</title>
      </Head>
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8  transition-all ease-in-out duration-700  ">
      <div className="mb-16 mt-[-80px]">
        <Hero />
      </div>
      <div
        id="Gallery"
        className="flex justify-center space-x-2 lg:space-x-7 mb-8"
        >
        {filters.map((filter) => (
          <button
          key={filter.name}
          className={cn(
            "py-2 px-[8px] sm:font-normal sm:px-3 md:px-4 lg:px-6 md:font-medium lg:font-semibold font-light rounded-md hover:ring-2 hover:ring-gray-300",
            selectedFilter === filter.name
            ? "bg-purple-800 text-white "
            : "bg-gray-200  dark:bg-gray-600  "
            )}
            onClick={() => setSelectedFilter(filter.name)}
            >
            {filter.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {filteredImages.map((image) => (
          <BlurImage key={image.id} image={image} />
          ))}
      </div>
      <div className=" py-8 mt-20 md:py-12">
        <motion.div       initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }} className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-normal md:text-4xl  mb-4 md:mb-8 text-center">
          &quot;The possibilities of 
            <span className="dark:text-purple-200 text-purple-500 font-semibold">
            {" "}   AI  {" "}
            </span> 

            are 
            <span className="dark:text-red-200 text-red-500 font-semibold">
            {" "} 
            limited  {" "} 
</span> 

             only by our 
             <span className="dark:text-yellow-200 text-yellow-500 font-semibold">

             {" "}     imaginations
</span> 

             .&quot; -{" "}
            <span className="font-bold dark:text-slate-200 text--500 hover:text-purple-400">Ray Kurzweil</span>
          </h2>
        </motion.div>
      </div>
    </div>
          </>
  );
}
function BlurImage({ image }) {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
  }, [image]);
  return (
    <motion.a
      whileHover={{ scale: 1.02 }}
      onHoverStart={(e) => {}}
      onHoverEnd={(e) => {}}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      href={image && image.href}
      className="group mb-4 lg:mb-0 md:mb-4 sm:mb-2 "
    >
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200  xl:aspect-w-7 xl:aspect-h-8 ">
        <Image
          alt={image && image.name}
          src={image && image.imageSrc}
          layout="fill"
          objectFit="cover"
          className={cn(
            "duration-700 ease-in-out group-hover:opacity-75 ",
            isLoading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          )}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
      <h3 className="mt-4 text-sm font-light">{image && image.name}</h3>
      <p className="mt-1 text-lg font-medium ">{image && image.username}</p>
    </motion.a>
  );
}
