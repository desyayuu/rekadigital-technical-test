import Image from "next/image";

export default function Home() {
  return (
    <main className="relative isolate min-h-screen flex-1 overflow-hidden bg-offwhite">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image src="/assets/bg-main-mobile.png" alt="" fill sizes="100vw" className="object-cover md:hidden" priority />
        <Image src="/assets/bg-main-tablet.png" alt="" fill sizes="100vw" className="object-cover hidden md:block lg:hidden" priority />
        <Image src="/assets/bg-main-desktop.png" alt="" fill sizes="100vw" className="object-cover hidden lg:block" priority />
      </div>
    </main>
  );
}