import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const OFFERS = [
  {
    title: "Custom websites",
    text: "A website built for your service, your city, and the questions customers already search.",
  },
  {
    title: "Web applications",
    text: "Custom software in the browser: portals, bookings, dashboards, and tools your team owns.",
  },
  {
    title: "SEO",
    text: "Keyword maps and pages written so search can send people who are ready to enquire.",
  },
  {
    title: "Campaigns",
    text: "Digital marketing that points at one offer, with a landing page that matches the ad.",
  },
  {
    title: "Social media",
    text: "Page handling, captions, and a calendar so the brand does not go quiet.",
  },
  {
    title: "Video & scripts",
    text: "Short explainers and reel scripts that say what you sell in plain language.",
  },
];

const STORIES = [
  {
    src: "/images/growth-website.jpg",
    alt: "Gouache painting of a founder reviewing a custom website on a laptop",
    kicker: "Websites & web apps",
    title: "A site that can be found, then a product that can be used",
    body: "Startups usually need two things in order. First, a custom website that explains the offer and collects an enquiry. Then, if the work is repeating, a web application or custom software so the team is not living in sheets and chats. Trevyk scopes both, including starter plans for early budgets.",
  },
  {
    src: "/images/growth-content.jpg",
    alt: "Gouache painting of a camera, notebook, and phone for content and social media work",
    kicker: "Content & campaigns",
    title: "SEO, social pages, scripts, and video on the same brief",
    body: "Search, social media, and video fail when they describe a company you are not. We write the keywords, the page, the campaign, and the script from the same offer. That includes SEO, digital marketing, social media management, and short videos a small business can actually publish.",
  },
  {
    src: "/images/growth-business.jpg",
    alt: "Gouache painting of a small storefront and climbing vine as a picture of business growth",
    kicker: "Any kind of business",
    title: "We fit the plan to the business, not the other way around",
    body: "A clinic, a school, a shop, a coaching centre, or a product startup does not need the same homepage. We target the words your buyers use, build the page or campaign around that, and keep the ask simple: tell us the business, the budget, and the result you want this quarter.",
  },
];

export const GrowthOffer: React.FC = () => {
  return (
    <section
      id="growth-services"
      className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <p className="font-mono-accent text-[11px] tracking-[0.28em] uppercase text-[#E8A9C2]">
          For startups and growing businesses
        </p>
        <h2 className="mt-3 max-w-3xl font-heading font-bold text-3xl sm:text-5xl text-[#F8F6FB] leading-tight">
          Websites, software, and marketing that help a business get found
        </h2>
        <p className="mt-5 max-w-3xl text-base sm:text-lg text-[#E7E1F0] leading-relaxed">
          Trevyk Technologies, Noida, builds custom websites, web applications,
          and custom software, then supports the growth work around them: SEO,
          digital marketing campaigns, social media management, video, and
          scripts. Starter plans are scoped for early-stage budgets. Tell us
          what you sell and we reply within one business day.
        </p>

        <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {OFFERS.map((offer) => (
            <li
              key={offer.title}
              className="rounded-2xl border border-[#B9A6D1]/30 bg-[#1E1024]/80 p-4"
            >
              <h3 className="font-heading font-semibold text-[#F8F6FB]">
                {offer.title}
              </h3>
              <p className="mt-1.5 text-sm text-[#B9A6D1] leading-relaxed">
                {offer.text}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-12 space-y-10">
          {STORIES.map((story) => (
            <article
              key={story.src}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
            >
              <img
                src={story.src}
                alt={story.alt}
                width={960}
                height={540}
                loading="lazy"
                decoding="async"
                className="lg:col-span-6 w-full h-auto rounded-2xl border border-[#B9A6D1]/25"
              />
              <div className="lg:col-span-6">
                <p className="font-mono-accent text-[10px] tracking-[0.22em] uppercase text-[#E8A9C2]">
                  {story.kicker}
                </p>
                <h3 className="mt-2 font-heading font-bold text-2xl sm:text-3xl text-[#F8F6FB] leading-snug">
                  {story.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-[#E7E1F0] leading-relaxed">
                  {story.body}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full bg-[#E8A9C2] px-5 py-3 text-sm font-heading font-semibold text-[#241428]"
          >
            Request a starter plan
            <ArrowRight className="ml-1.5 h-4 w-4" />
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center rounded-full border border-[#B9A6D1]/50 px-5 py-3 text-sm font-heading font-semibold text-[#F8F6FB]"
          >
            See every service
          </Link>
        </div>
      </div>
    </section>
  );
};
