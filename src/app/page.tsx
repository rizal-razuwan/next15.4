import { CometCardDemo } from "@/components/acertinity-demo/comet-card-demo";
import { ThreeDCardDemo } from "@/components/acertinity-demo/threed-card-demo";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-8 p-4 bg-gray-300">
      <div className="flex flex-row items-center justify-center gap-16">
        <CometCardDemo />
        <ThreeDCardDemo />        
      </div>
    </div>
  );
}
