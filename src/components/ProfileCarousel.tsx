import { useEffect, useState } from "react";

import img01 from "@/assets/profiles/01.webp";
import img02 from "@/assets/profiles/02.webp";
import img03 from "@/assets/profiles/03.webp";

export function ProfileCarousel() {
  const images = [img01, img02, img03];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-[100px] h-[100px] rounded-sm overflow-hidden border-2">
      <img
        src={images[currentIndex].src}
        alt={`Foto de perfil 0${currentIndex + 1}`}
        className="object-cover w-[100px] h-[100px]"
      />
    </div>
  );
}
