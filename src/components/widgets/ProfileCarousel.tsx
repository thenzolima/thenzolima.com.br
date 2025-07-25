import { useEffect, useState } from "react";

import img01 from "@/assets/profiles/01.webp";
import img02 from "@/assets/profiles/02.webp";
import img03 from "@/assets/profiles/03.webp";

interface ProfileCarouselProps {
  style: string;
}

export function ProfileCarousel({ style }: ProfileCarouselProps) {
  const images = [img01, img02, img03];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={style}>
      <img
        src={images[currentIndex].src}
        alt={`Foto de perfil 0${currentIndex + 1}`}
        className="object-cover"
      />
    </div>
  );
}
