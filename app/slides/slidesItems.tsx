'use client';

import { useState, useEffect } from "react";
import Image from "next/image";

<<<<<<< HEAD
type ImageItem = {
  src: string;
  alt: string;
  title?: string;
};

type ImageSliderProps = {
  images: ImageItem[];
};

const ImageSlider = ({ images }: ImageSliderProps) => {
=======
const ImageSlider = ({ images }) => {
>>>>>>> f85e012c202c72b1bf533f737166d8666c638c26
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
<<<<<<< HEAD
    }, 5000); // troca a cada 5 segundos
=======
    }, 5000); // Trocar imagem a cada 5 segundos
>>>>>>> f85e012c202c72b1bf533f737166d8666c638c26

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full mx-auto overflow-hidden mt-0">
      {/* Slide da Imagem com Animação Suave */}
      <div className="relative w-full h-[300px] sm:h-[700px] overflow-hidden">
        <div className="w-full h-full animate-zoom">
<<<<<<< HEAD
          <Image
=======
            <Image
>>>>>>> f85e012c202c72b1bf533f737166d8666c638c26
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            width={1900}
            height={900}
            className="object-cover w-full h-full object-center sm:object-center object-[top]"
<<<<<<< HEAD
          />
        </div>
      </div>
=======
            />
        </div>
        </div>
>>>>>>> f85e012c202c72b1bf533f737166d8666c638c26

      {/* Botões de navegação */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-gray-800 bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
        onClick={() => {
          setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
        }}
      >
        &#8592;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-gray-800 bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
        onClick={() => {
          setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }}
      >
        &#8594;
      </button>
    </div>
  );
};

export default ImageSlider;
