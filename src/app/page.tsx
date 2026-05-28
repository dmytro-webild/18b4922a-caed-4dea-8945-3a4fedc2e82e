"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import FeatureCardTwentyThree from '@/components/sections/feature/FeatureCardTwentyThree';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { CheckCircle, LifeBuoy, Leaf } from "lucide-react";

export default function AppPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="directional-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="mediumLarge"
      sizing="large"
      background="aurora"
      cardStyle="gradient-mesh"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="GreenScape Pros"
          navItems={[
            { name: "Home", id: "#home" },
            { name: "Services", id: "#services" },
            { name: "Portfolio", id: "#portfolio" },
            { name: "About", id: "#about" },
            { name: "Testimonials", id: "#testimonials" },
            { name: "Contact", id: "#contact" }
          ]}
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=80sknz"
          logoAlt="GreenScape Pros Logo"
          button={{ text: "Get a Quote", href: "#contact" }}
        />
      </div>

      <div id="home" data-section="home">
        <HeroCarouselLogo
          logoText="GreenScape Pros"
          description="Transforming outdoor spaces into breathtaking havens. Expert landscaping, design, and maintenance for residential and commercial properties."
          buttons={[
            { text: "View Our Services", href: "#services" },
            { text: "Get a Free Quote", href: "#contact" }
          ]}
          slides={[
            { imageSrc: "http://img.b2bpic.net/free-photo/wide-shot-bike-road-playground-near-tall-trees_181624-12674.jpg", imageAlt: "Lush residential garden design" },
            { imageSrc: "http://img.b2bpic.net/free-photo/brown-wooden-bench-near-green-plants_250224-356.jpg", imageAlt: "Modern commercial landscaping" },
            { imageSrc: "http://img.b2bpic.net/free-photo/beautiful-luxury-swimming-pool-with-palm-trees-thai-style-decoration_1258-111445.jpg", imageAlt: "Elegant patio with outdoor lighting" },
            { imageSrc: "http://img.b2bpic.net/free-photo/beautiful-bird-by-lake_23-2148245167.jpg", imageAlt: "Serene water feature in a garden" },
            { imageSrc: "http://img.b2bpic.net/free-photo/bouquet-violet-flowers-with-green-leaves-inside-vase_114579-1437.jpg", imageAlt: "Vibrant flower beds and plants" },
            { imageSrc: "http://img.b2bpic.net/free-photo/reforestation-done-by-voluntary-group_23-2149500812.jpg", imageAlt: "Landscaping team working in a garden" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <MetricSplitMediaAbout
          title="Crafting Beautiful Landscapes for Over a Decade"
          description="At GreenScape Pros, we believe in creating outdoor environments that inspire and delight. With a passion for nature and an eye for design, our team delivers unparalleled quality and service to bring your vision to life. We specialize in transforming ordinary spaces into extraordinary landscapes that enhance curb appeal and property value."
          metrics={[
            { value: "12+", title: "Years Experience" },
            { value: "250+", title: "Projects Completed" },
            { value: "98%", title: "Client Satisfaction" }
          ]}
          useInvertedBackground={true}
          imageSrc="http://img.b2bpic.net/free-photo/overhead-view-male-female-gardener-digging-soil-watering-plant_23-2148165277.jpg"
          imageAlt="experienced landscaper overseeing project"
          mediaAnimation="blur-reveal"
          metricsAnimation="blur-reveal"
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardTwentyThree
          title="Our Comprehensive Landscaping Services"
          description="From initial concept design to ongoing maintenance, we offer a full spectrum of services to keep your property looking its best year-round. Discover how we can elevate your outdoor space."
          features={[
            { id: "design", title: "Custom Landscape Design", tags: ["Innovation", "Visionary"], imageSrc: "http://img.b2bpic.net/free-photo/closeup-cropped-man-sketching-project-sheet-paper-using-laptop_1098-19098.jpg", imageAlt: "Landscape design blueprint" },
            { id: "installation", title: "Professional Installation", tags: ["Precision", "Quality"], imageSrc: "http://img.b2bpic.net/free-photo/cement-walkway-garden_1252-1023.jpg", imageAlt: "Landscaping team planting" },
            { id: "maintenance", title: "Ongoing Garden Maintenance", tags: ["Care", "Health"], imageSrc: "http://img.b2bpic.net/free-photo/close-up-hand-cutting-plant_23-2147844324.jpg", imageAlt: "Garden maintenance trimming hedges" }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="portfolio" data-section="portfolio">
        <ProductCardTwo
          title="Showcasing Our Masterpieces"
          description="Explore our gallery of completed projects, each a testament to our dedication to beauty, functionality, and sustainable design. Witness the transformations we've brought to life."
          products={[
            { id: "p1", brand: "Residential", name: "Backyard Oasis", price: "$$", rating: 5, reviewCount: "25", imageSrc: "http://img.b2bpic.net/free-photo/stylish-caucasian-woman-trendy-panama-waist-neon-bag-roof-bangkok-with-mobile-phone_343596-30.jpg", imageAlt: "Lush residential backyard oasis" },
            { id: "p2", brand: "Commercial", name: "Corporate Greenscape", price: "$$$", rating: 5, reviewCount: "18", imageSrc: "http://img.b2bpic.net/free-photo/mature-male-worker-posing-camera-with-broom-park-front-view-happy-bearded-man-age_7502-10275.jpg", imageAlt: "Grand commercial property landscaping" },
            { id: "p3", brand: "Sustainable", name: "Xeriscape Design", price: "$", rating: 4, reviewCount: "12", imageSrc: "http://img.b2bpic.net/free-photo/greens-surround-stream_23-2147670094.jpg", imageAlt: "Drought tolerant xeriscape garden" },
            { id: "p4", brand: "Urban", name: "Rooftop Retreat", price: "$$", rating: 5, reviewCount: "7", imageSrc: "http://img.b2bpic.net/free-photo/modern-architecture-blends-with-nature-s-vibrant-colors-generated-by-ai_188544-30782.jpg", imageAlt: "Modern urban rooftop garden" },
            { id: "p5", brand: "Public", name: "Community Park", price: "$$$", rating: 5, reviewCount: "30", imageSrc: "http://img.b2bpic.net/free-photo/retired-active-mature-people-wearing-sports-clothes-doing-morning-exercise-park-grass-stretching-back-legs-muscles-retirement-active-lifestyle-concept_74855-12958.jpg", imageAlt: "Well-maintained community sports field" },
            { id: "p6", brand: "Specialty", name: "Water Garden", price: "$$", rating: 4, reviewCount: "9", imageSrc: "http://img.b2bpic.net/free-photo/waterfall-that-is-layer-thailand_1150-15652.jpg", imageAlt: "Natural water garden with pond" }
          ]}
          gridVariant="bento-grid"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Numbers That Speak for Themselves"
          description="Our commitment to excellence is reflected in every project we undertake and every client we serve. We pride ourselves on delivering outstanding results and building lasting relationships."
          metrics={[
            { id: "m1", value: "100%", title: "Project Completion", description: "Every project delivered on time and within budget.", icon: CheckCircle },
            { id: "m2", value: "24/7", title: "Dedicated Support", description: "Always here for your landscaping needs and questions.", icon: LifeBuoy },
            { id: "m3", value: "Eco-Friendly", title: "Sustainable Practices", description: "Committed to environmentally responsible landscaping.", icon: Leaf }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFifteen
          testimonial="GreenScape Pros transformed our backyard into an absolute paradise. Their attention to detail, creative vision, and professional execution exceeded all our expectations! We couldn't be happier with the result and highly recommend their services."
          rating={5}
          author="Jessica L., Homeowner"
          avatars={[
            { src: "http://img.b2bpic.net/free-photo/portrait-smiling-redhead-female-sitting-bench-outdoor_613910-10356.jpg", alt: "Jessica L." },
            { src: "http://img.b2bpic.net/free-photo/blond-man-happy-expression_1194-2854.jpg", alt: "Michael C." },
            { src: "http://img.b2bpic.net/free-photo/medium-shot-senior-woman-portrait_23-2149421489.jpg", alt: "Emily R." },
            { src: "http://img.b2bpic.net/free-photo/portrait-bearded-mature-male-looking-away_23-2148673491.jpg", alt: "David K." }
          ]}
          ratingAnimation="blur-reveal"
          avatarsAnimation="blur-reveal"
          useInvertedBackground={true}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Leading Homeowners & Businesses"
          description="We are proud to partner with discerning clients who value quality, reliability, and innovative landscape solutions. Our reputation is built on trust and exceptional service."
          names={[
            "Luxury Estates Inc.",            "City Greens Corp.",            "Pristine Properties",            "EcoLiving Solutions",            "Urban Oasis Developers",            "Grandview Residences",            "Horizon Commercial",            "GreenThumb Ventures"
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Find answers to common inquiries about our services, pricing, project timelines, and environmental practices. We're here to provide clarity and peace of mind."
          faqs={[
            { id: "faq1", title: "What types of landscaping services do you offer?", content: "We offer a comprehensive range of services including custom landscape design, new garden installation, hardscaping (patios, walkways), irrigation systems, tree and shrub care, seasonal planting, and ongoing maintenance programs for both residential and commercial properties." },
            { id: "faq2", title: "How does your design process work?", content: "Our design process begins with an initial consultation to understand your vision, preferences, and budget. We then conduct a site analysis, develop conceptual designs, and work with you through revisions until the final plan is approved. Our goal is to create a design that perfectly suits your lifestyle and enhances your property." },
            { id: "faq3", title: "Are your services eco-friendly?", content: "Yes, sustainability is a core value at GreenScape Pros. We prioritize eco-friendly practices by using native and drought-tolerant plants, organic soil amendments, efficient irrigation systems, and sustainable materials whenever possible. We aim to create beautiful landscapes that thrive while minimizing environmental impact." }
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/basket-flowers-with-black-shovel_23-2148269636.jpg"
          imageAlt="Garden tools on lush grass"
          mediaAnimation="blur-reveal"
          faqsAnimation="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get Started"
          title="Ready to Transform Your Landscape?"
          description="Contact us today for a personalized consultation and a free estimate. Let's discuss your project and bring your dream outdoor space to life."
          background={{ variant: "radial-gradient" }}
          useInvertedBackground={false}
          inputPlaceholder="Enter your email"
          buttonText="Schedule Consultation"
          termsText="By scheduling a consultation, you agree to our privacy policy and terms of service."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="GreenScape Pros"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=80sknz"
          logoAlt="GreenScape Pros Logo"
          columns={[
            { items: [{ label: "Home", href: "#home" }, { label: "Services", href: "#services" }, { label: "Portfolio", href: "#portfolio" }] },
            { items: [{ label: "About Us", href: "#about" }, { label: "Testimonials", href: "#testimonials" }, { label: "FAQs", href: "#faq" }] },
            { items: [{ label: "Contact", href: "#contact" }, { label: "Privacy Policy", href: "#" }, { label: "Terms of Service", href: "#" }] }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
