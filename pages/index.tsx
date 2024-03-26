import Highlight from '@/features/aboutUs/highlight';
import Introduce from '@/features/aboutUs/introduce';
import ContactUS from '@/features/contact';
import FAQ from '@/features/faq';
import { VisionSection } from '@/features/services';
import { PublicLayout } from '@/layouts';
import { NextPageWithLayout } from '@/utils/types';

const HomePage: NextPageWithLayout = () => {
  return (
    <>
      <Introduce />
      <VisionSection />
      <Highlight />
      {/* <Pricing /> */}
      <FAQ />
      <ContactUS />
    </>
  );
};

HomePage.Layout = PublicLayout;

export default HomePage;
