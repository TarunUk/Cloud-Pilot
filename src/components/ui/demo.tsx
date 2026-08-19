import React from "react";
import { FoxyHero } from "@/components/ui/foxy-hero";

export function FoxyHeroDemo() {
  return (
    <FoxyHero
      logo={{
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2L4 7V12C4 16.97 7.84 21.5 12 22C16.16 21.5 20 16.97 20 12V7L12 2Z"
              fill="#FFFFFF"
            />
          </svg>
        ),
        text: "Foxy",
      }}
      navigation={[
        { label: "Home", isActive: true, onClick: () => console.log("Home") },
        { label: "Features", onClick: () => console.log("Features") },
        { label: "Pricing", onClick: () => console.log("Pricing") },
        { label: "Blogs", onClick: () => console.log("Blogs") },
        { label: "Contact", onClick: () => console.log("Contact") },
      ]}
      headerCta={{
        label: "Try for free",
        onClick: () => console.log("Try for free clicked"),
      }}
      title="Smarter Crypto Tracking Powered by Advanced AI"
      subtitle="Where Artificial Intelligence Meets Financial Precision"
      ctaButtons={{
        primary: {
          label: "Try for free",
          onClick: () => console.log("Try for free clicked"),
        },
        secondary: {
          label: "Explore Products >",
          onClick: () => console.log("Explore Products clicked"),
        },
      }}
    />
  );
}

export default FoxyHeroDemo;
