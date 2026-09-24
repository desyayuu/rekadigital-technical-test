import Image from "next/image";
import { BackCard } from "@/components/backCard";
import { FrontCard } from "@/components/frontCard";

export function SecondSection() {
  return (
    <div className="relative mb-[-100px] md:mb-[-250px] md:mt-[80px] lg:mb-[100px] lg:mt-[-60px]">
      <BackCard />

      <div className="pointer-events-none absolute left-1/2 top-[-100px] z-10 w-[240px] -translate-x-1/2 md:w-[280px] md:left-[230px] lg:left-[232px] lg:top-[-160px] lg:w-[312px] lg:translate-x-0">
        <Image src="/assets/illustration-app.png" alt="" width={312} height={642} className="h-auto w-full" />
      </div>

      <div className="relative z-20 mt-8 top-[-200px] md:left-[280px] md:top-[-370px] lg:absolute lg:left-[700px] lg:top-[150px] lg:buttom-[100px] lg:mb-12 lg:mt-0 lg:w-[446px] lg:px-0">
        <FrontCard />
      </div>
    </div>
  );
}