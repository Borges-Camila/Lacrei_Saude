"use client";
import React from "react";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TestimonialCard from "./TestimonialCard";

type Testimonial = {
  id: number;
  name: string;
  testimonial: string;
  area?: string;
};

type TestimonialsCarouselProps = {
  testimonials: Testimonial[];
};

const TestimonialsCarousel: React.FC<TestimonialsCarouselProps> = ({
  testimonials,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width:1024px)": { slidesToScroll: 3 },
      "(min-width:768px)": { slidesToScroll: 2 },
    },
  });

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3"
            >
              <TestimonialCard
                name={item.name}
                testimonial={item.testimonial}
                area={item.area}
              />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-2 -translate-y-1/2 -translate-x-1/2 top-1/2"
      >
        <ChevronLeft className="w-6 h-6 text-gray-600 " />
      </button>

      <button
        onClick={scrollNext}
        className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2"
      >
        <ChevronRight className="w-6 h-6 text-gray-600 " />
      </button>
    </div>
  );
};

export default TestimonialsCarousel;
