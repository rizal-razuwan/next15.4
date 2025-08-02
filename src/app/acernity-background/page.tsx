import { AuroraBackgroundDemo } from "@/components/acertinity-demo/aurora-background-demo";
import { BackgroundBeamsDemo } from "@/components/acertinity-demo/background-beams-demo";
import { BackgroundBeamsWithCollisionDemo } from "@/components/acertinity-demo/background-beams-with-collision-demo";
import { BackgroundBoxesDemo } from "@/components/acertinity-demo/background-boxes-demo";
import { BackgroundGradientDemo } from "@/components/acertinity-demo/background-gradient-demo";
import { BackgroundLinesDemo } from "@/components/acertinity-demo/background-lines-demo";
import { BentoGridDemo } from "@/components/acertinity-demo/bento/bento-grid-demo";
import { BentoGridThirdDemo } from "@/components/acertinity-demo/bento/bento-grid-third-demo";
import { BentoGridSecondDemo } from "@/components/acertinity-demo/bento/bento-grid-second-demo";
import { AuroraBackground } from "@/components/ui/acernity-ui-components/aurora-background";
import { BackgroundBeams } from "@/components/ui/acernity-ui-components/background-beams";
import { CanvasRevealEffectDemo } from "@/components/acertinity-demo/canvas-reveal-effect-demo";
import { Canvas } from "@react-three/fiber";
import { CanvasRevealEffectDemoThree } from "@/components/acertinity-demo/canvas-reveal-effect-demo-three";
import { CanvasRevealEffectDemoTwo } from "@/components/acertinity-demo/canvas-reveal-effect-demo-two";

export default function Page() {
  return (
    <div className="">
      {/* 1. background that has a aurora effect */}
      {/* <AuroraBackgroundDemo /> */}

      {/*  2. background beams that have animation of beams moving in a raining pattern */}
      {/* <BackgroundBeamsDemo /> */}

      {/* 3. background that have beams moving downwards and have collision effect */}
      {/* <BackgroundBeamsWithCollisionDemo /> */}

      {/* 4. backround in grid pattern of boxes that track your mouse movement and animated */}
      {/* <BackgroundBoxesDemo /> */}

      {/* 5. an animated gradient sits at the background of a card, button, or anything */}
      {/* <BackgroundGradientDemo /> */}

      {/* 6. Background that have a set of svg paths that animate in a wave pattern. Good for hero sections background, as seen on height.app */}
      {/* <BackgroundLinesDemo /> */}

      {/* 7. Multiple demo of bento grid A skewed grid layout with Title, description and a header component */}
      {/* <div className="w-full min-h-screen bg-transparent flex flex-col items-center justify-center gap-8 p-4"> */}
      {/* BentoGridDemo basic layout for bento grid with items */}
      {/* <BentoGridDemo />  */}

      {/* BentoGridThirdDemo have animation on hover  */}
      {/* <BentoGridThirdDemo /> */}

      {/* bento grid for 2 columns with items */}
      {/* <BentoGridSecondDemo /> */}
      {/* </div> */}

      {/* 8. canvas reveal effect demo A dot background that expands on hover, as seen on Clerk's website */}
      {/* <div className="flex flex-col items-center justify-center w-full min-h-screen bg-transparent p-4 rounded-lg"> */}

        {/* CanvasRevealEffectDemo - three card reveal when hovered */}
        {/* <CanvasRevealEffectDemo /> */}
        {/* CanvasRevealEffectDemoThree - whole card */}
        {/* <CanvasRevealEffectDemoThree /> */}
        {/* CanvasRevealEffectDemoTwo - its static  */}
        {/* <CanvasRevealEffectDemoTwo /> */}

      {/* </div> */}

      

    </div>
  );
}
