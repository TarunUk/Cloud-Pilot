import React from 'react';
import { FoxyHero } from './ui/foxy-hero';

export const Hero: React.FC = () => {
  return (
    <FoxyHero
      hideHeader={true}
      title="Your cloud infrastructure. One command center."
      subtitle="Deploy, monitor, and understand your infrastructure from one beautifully designed workspace."
      ctaButtons={{
        primary: {
          label: "Explore CloudPilot",
          href: "#product",
        },
        secondary: {
          label: "View Dashboard >",
          href: "#product",
        },
      }}
      trustedByText="Trusted by Leading Cloud & Infrastructure Teams"
    />
  );
};

export default Hero;
