import { AnimatedTestimonialsDemo } from "@/components/acertinity-demo/animated-testimonial-demo";
import { AnimatedTooltipDemo } from "@/components/acertinity-demo/animated-tooltip-demo";
import { AppleCardsCarouselDemo } from "@/components/acertinity-demo/apple-card-carousel-demo";
import { ThreeDMarqueeDemo } from "@/components/acertinity-demo/three-d-marquee-demo";
import App from "next/app";

export default function Page() {
  return (
    <div className="w-full min-h-screen bg-transparent flex flex-col items-center justify-center gap-8 p-4">
      <ThreeDMarqueeDemo />
      <AnimatedTestimonialsDemo />
      <AnimatedTooltipDemo />
      <AppleCardsCarouselDemo />
    </div>
  );
}
