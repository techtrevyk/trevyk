import React from "react";
import { Link } from "react-router-dom";
import { StudioFrame } from "../StudioFrame";

const FRAMES = [
  {
    src: "/images/growth-website.jpg",
    alt: "Gouache painting of a founder reviewing a custom website on a laptop",
    kicker: "Websites",
    caption: "A site written for the search, not a template with a logo swap.",
    href: "/work/custom-websites",
  },
  {
    src: "/images/growth-content.jpg",
    alt: "Gouache painting of a camera, notebook, and phone for content work",
    kicker: "Campaigns",
    caption: "SEO, social, and video from the same offer.",
    href: "/work/seo",
  },
  {
    src: "/images/growth-business.jpg",
    alt: "Gouache painting of a storefront and vine as a picture of business growth",
    kicker: "Growth",
    caption: "Any business type. The plan follows the buyer, not a generic deck.",
    href: "/work/digital-marketing",
  },
];

export const GrowthOffer: React.FC = () => {
  return (
    <section id="growth-services" className="relative px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="font-mono-accent text-[11px] uppercase tracking-[0.28em] text-[#E8A9C2]">
            For startups and growing businesses
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold leading-tight text-[#F8F6FB] sm:text-5xl">
            Websites, software, and marketing that help a business get found
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#E7E1F0] sm:text-lg">
            Trevyk builds custom websites, web applications, and custom software,
            then the growth work around them: SEO, campaigns, social media,
            video, and scripts. Starter plans are scoped for early budgets.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {FRAMES.map((frame) => (
            <Link
              key={frame.href}
              to={frame.href}
              className="group block rounded-[1.7rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A9C2]"
            >
              <StudioFrame
                src={frame.src}
                alt={frame.alt}
                kicker={frame.kicker}
                caption={frame.caption}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
