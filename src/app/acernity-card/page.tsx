import { AnimatedPinDemo } from "@/components/acertinity-demo/animated-pin-demo";
import { CardDemoFeatureBlockAnimation } from "@/components/acertinity-demo/card-demo-feature-block-animation";
import { CardHoverEffectDemo } from "@/components/acertinity-demo/card-hover-effect-demo";
import { CardSpotlightDemo } from "@/components/acertinity-demo/card-spotlight-demo";
import { CardStackDemo } from "@/components/acertinity-demo/card-stack-demo";
import { CometCardDemo } from "@/components/acertinity-demo/comet-card-demo";
import { ThreeDCardDemo } from "@/components/acertinity-demo/threed-card-demo";
import CardDemoContent from "@/components/cards-demo-content";
import CardDemoOneOverlay from "@/components/cards-demo-one-overlay";
import CardDemo from "@/components/cards-demo-one-overlay";
import { CardSpotlight } from "@/components/ui/card-spotlight";

export default function Page() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-8 p-4 bg-gray-300">
      <div className="flex flex-row items-center justify-center gap-16">
        {/* CometCardDemo - A perspective, 3D, Tilt card as seen on Perplexity Comet's website. */}
        <CometCardDemo />
        {/* ThreeDCardDemo - A card perspective effect, hover over the card to elevate card elements. */}
        <ThreeDCardDemo />
        {/* AnimatedPinDemo - A gradient pin that animates on hover, perfect for product links. */}
        <AnimatedPinDemo />
      </div>
      {/* CardHoverEffectDemo - Hover over the cards and the effect slides to the currently hovered card. */}
      <div className="flex flex-col items-center justify-center bg-black/100 rounded-xl">
        <CardHoverEffectDemo />
      </div>

      {/* card-spotlight-effect-demo -A card component with a spotlight effect revealing a radial gradient background
     */}
     <CardSpotlightDemo />
      

      {/* cardstack - Cards stack on top of each other after some interval. Perfect for showing testimonials. */}
      <CardStackDemo />

      {/* general card -A set of cards that can be used for different use cases */}
      <CardDemoFeatureBlockAnimation />
      <CardDemoOneOverlay />
      <CardDemoContent />



    </div>
  );
}
