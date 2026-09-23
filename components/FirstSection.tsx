import Image from "next/image";

export function FirstSection() {
  return (
    <div className="relative">
      {/* Logo */}
      <div className="relative z-10 flex items-center justify-between px-6 py-8 md:px-[39px] md:py-[61px] lg:px-[130px] lg:py-[62px]">
        <Image src="/assets/logo.svg" alt="equalizer" width={146} height={32} className="h-auto w-auto" />
      </div>

      <div className="pointer-events-none absolute -top-8 right-0 z-0 hidden w-[210px] md:block lg:-top-10 lg:w-auto">
        <Image
          src="/assets/bg-pattern-1.svg"
          alt=""
          width={312}
          height={468}
          className="h-auto w-full"
          priority
        />
      </div>

      {/* Headline & subtitle */}
      <div className="relative z-10 px-6 pb-16 pt-4 md:px-10 lg:px-[130px] lg:pt-[100px]">
        <h1 className="text-h1 max-w-[327px] md:max-w-[520px] lg:max-w-[1000px]">
          We make your music sound extraordinary.
        </h1>
        <p className="text-body-1 mt-6 max-w-[327px] md:mt-10 md:max-w-[514px] lg:mt-[52px] lg:max-w-[825px]">
          A system audio equalizer specifically designed for Android and iOS. Freely tune the way your music sounds with a professional grade parametric EQ & volume mixer. Control bass, mids, treble, gain control, reverb, and more!
        </p>
      </div>
    </div>
  );
}