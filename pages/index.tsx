import About from '@/features/aboutUs/about';
import Highlight from '@/features/aboutUs/highlight';
import Introduce from '@/features/aboutUs/introduce';
import Reason from '@/features/aboutUs/reason';
import ContactUS from '@/features/contact';
import FAQ from '@/features/faq';
import { ServiceSection, VisionSection } from '@/features/services';
import { PublicLayout } from '@/layouts';
import { NextPageWithLayout } from '@/utils/types';

const HomePage: NextPageWithLayout = () => {
  return (
    <>
      <Introduce />
      <About />
      <ServiceSection />
      <VisionSection />
      <Highlight />
      <Reason />
      {/* <Pricing /> */}
      <FAQ />
      <ContactUS />
    </>
  );
};

HomePage.Layout = PublicLayout;

export default HomePage;
