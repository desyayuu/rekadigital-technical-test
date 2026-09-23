import Image from "next/image";

export function FrontCard() {
  return (
    <div className="rounded-[12px] bg-coral p-8 md:p-10 w-[375px] h-[546px] md:w-[399px] md:h-[546px] lg:w-[446px] lg:h-[625px] lg:w-[333px]">
      <h2 className="text-h2 mt-6 mb-6 text-offwhite">Premium EQ</h2>
      <p className="text-body-1 text-offwhite lg:w-[333px]">
        Get expert-level control with a robust equalizer, volume mixer, and spatial audio. Take your listening experience to a whole new level and access all our incredible features!
      </p>
      <p className="flex mt-6 mb-12 items-end gap-2 text-offwhite">
        <span className="text-[65px] font-bold leading-[52px]">$4</span>
        <span className="pb-1 text-xl">/ month</span>
      </p>
      <div className="flex flex-col gap-4 text-button">
        <button className="flex h-[61px] items-center justify-center gap-2 rounded-[12px] bg-dark font-bold text-offwhite hover:bg-teal">
          <Image src="/assets/icon-apple.svg" alt="Apple" width={17} height={20} />
          iOS Download
        </button>
        <button className="flex h-[61px] items-center justify-center gap-2 rounded-[12px] bg-offwhite font-bold text-dark hover:bg-yellow">
          <Image src="/assets/icon-android.svg" alt="Android" width={17} height={20} />
          Android Download
        </button>
      </div>
    </div>
  );
}