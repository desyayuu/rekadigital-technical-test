export function Card() {
  return (
    <section className="relative z-10 mx-6 my-8 rounded-xl bg-dark px-6 py-10 md:mx-10 md:py-16 lg:mx-[165px] lg:py-20">
      <div className="mx-auto max-w-[446px] rounded-xl bg-coral p-8 md:p-10">
        <h2 className="text-[32px] font-bold leading-[40px] text-offwhite lg:text-[40px] lg:leading-[52px]">
          Premium EQ
        </h2>
        <p className="mt-4 text-lg leading-[28px] text-offwhite lg:text-xl lg:leading-[34px]">
          Get expert-level control with a robust equalizer, volume mixer, and spatial audio. Take your listening experience to a whole new level and access all our incredible features!
        </p>
        <p className="mt-6 flex items-end gap-2 text-offwhite">
          <span className="text-[65px] font-bold leading-[52px]">$4</span>
          <span className="pb-1 text-xl">/ month</span>
        </p>
        <div className="mt-8 flex flex-col gap-4">
          <button className="flex h-[61px] items-center justify-center gap-2 rounded-xl bg-dark font-bold text-offwhite">
            iOS Download
          </button>
          <button className="flex h-[61px] items-center justify-center gap-2 rounded-xl bg-offwhite font-bold text-dark">
            Android Download
          </button>
        </div>
      </div>
    </section>
  );
}