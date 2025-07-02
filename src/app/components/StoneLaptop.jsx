import React from "react";
const StoneLaptop = () => {
    return (
        <div className="w-full relative  xl:mt-36 2xl:mt-10">
            <img
                className="absolute lg:h-[80vh] xl:h-[95vh]  bottom-0 right-0 object-cover z-0 hidden lg:block"
                src={`/Layer 1.png`}
                alt="Laptop Illustration"
            />
            <div className="relative z-10 flex flex-col lg:pt-24 3xl:pt-32 pt-16 pb-10 lg:pl-16 pl-6 pr-6 gap-4  w-full xl:w-[50%]   lg:w-[60%] leading-snug">
                <h1 className="text-2xl lg:text-4xl 2xl:mb-3 xl:text-4xl 2xl:text-[3vw] text-[#2E234B] custom-font ">
                    Author Website Development
                </h1>
                <div className="lg:pr-28 xl:pr-24 2xl:text-[1.2vw] leading-tight flex flex-col gap-4 text-sm text-[#2E234B]">
                    <p>
                        Like other strong professions, authorship also needs powerful
                        branding. A website does exactly this and more. It is your
                        dedicated space on the internet that:
                    </p>
                    <ul className="list-disc pl-5 2xl:text-[1.2vw] space-y-1">
                        <li>
                            Establishes your first impression and marks your footprint in
                            the literary world.
                        </li>
                        <li>
                            Works as your digital storefront and marketing
                            representative round the clock.
                        </li>
                        <li>
                            Showcases your bestsellers, connects readers, and builds your
                            long-term credibility.
                        </li>
                    </ul>
                    <div className="flex flex-col">
                        <p>
                            That’s why we create professional author websites that are mobile-friendly, search engine optimized, and tailored to your genre and tone.
                        </p>
                        <p>
                            Our services include homepage design, landing pages, blog setup, email capture, and sales platform integration.
                        </p>
                        <p>
                            Ready to build a custom book website that scales your reach and grows your readership?
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <button className="border border-[#2E234B] bg-[#F3F2FA] text-[#2E234B] px-6 py-2 text-sm">
                            Build my website
                        </button>
                        <button className="border border-[#2E234B] bg-[#2E234B] text-[#F3F2FA] px-16 py-2 text-sm">
                            Plan my book
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default StoneLaptop;