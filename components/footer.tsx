import Image from "next/image";

function SocialIcon({ src, label }: { src: string; label: string }) {
    return (
        <span
        role="img"
        aria-label={label}
        className="block h-5 w-5 shrink-0 bg-dark transition-colors hover:bg-coral"
        style={{
            WebkitMaskImage: `url(${src})`,
            maskImage: `url(${src})`,
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskSize: "contain",
            maskSize: "contain",
            WebkitMaskPosition: "center",
            maskPosition: "center",
        }}
        />
    );
}

export function Footer() {
    return (
        <div className="px-6 py-10 md:px-10 md:py-14 lg:px-[165px] lg:py-[62px]">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
                <div className="h-8 w-[146px] shrink-0 self-start">
                    <Image
                        src="/assets/logo.svg"
                        alt="equalizer"
                        width={146}
                        height={32}
                        className="h-full w-full"
                    />
                </div>

                <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between lg:flex-1 lg:items-center lg:px-8">
                    <div className="text-body-2 w-[250px] md:w-[390px] lg:w-[390px]">
                        <p>All rights reserved © Equalizer 2021</p>
                        <p>Have any problems? Contact us via social media or email us at 
                        <span className="font-bold"> equalizer@example.com</span></p>
                    </div>

                    <div className="flex gap-4">
                        <SocialIcon src="/assets/icon-facebook.svg" label="Facebook" />
                        <SocialIcon src="/assets/icon-instagram.svg" label="Instagram" />
                        <SocialIcon src="/assets/icon-twitter.svg" label="Twitter" />
                    </div>
                </div>
            </div>
        </div>
    );
}
