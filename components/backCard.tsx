import Image from "next/image";

export function BackCard() {
  return (
    <div className="relative w-[375px] h-[600px] rounded-[12px] bg-dark md:mx-10 md:w-[696px] md:h-[550px] lg:w-[1100px] lg:h-[600px] lg:mx-[130px]">
      <div className="absolute left-1/2 w-[220px] -translate-x-1/2 md:w-[280px] md:h-[420px] lg:left-[336px] lg:w-[312px] lg:-translate-x-0">
        <Image
          src="/assets/bg-pattern-2.svg"
          alt=""
          width={312}
          height={468}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}