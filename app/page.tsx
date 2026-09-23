import Image from "next/image";
import { FirstSection } from "@/components/FirstSection";
import { SecondSection } from "@/components/secondSection";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="relative isolate min-h-screen flex-1 bg-offwhite w-full">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image src="/assets/bg-main-mobile.png" alt="" width={375} height={667} className="object-cover md:hidden" priority />
        <Image src="/assets/bg-main-tablet.png" alt="" width={768} height={1024} className="object-cover hidden md:block lg:hidden" priority />
        <Image src="/assets/bg-main-desktop.png" alt="" width={1440} height={1832} className="h-auto w-full object-cover hidden lg:block" priority />
      </div>
      <div className="lg:pb-56">
        <FirstSection/>
      </div>
      <div className="pt-24 lg:pb-56">
        <SecondSection />
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}