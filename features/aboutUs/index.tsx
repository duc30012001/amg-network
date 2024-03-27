import { ServiceSection } from '../services';
import About from './about';
import Highlight from './highlight';
import Introduce from './introduce';
import Reason from './reason';

type Props = {};

function AboutUs({}: Props) {
  return (
    <>
      <About />
      <ServiceSection />
      <Introduce />
      <Highlight />
      <Reason />
    </>
  );
}

export default AboutUs;
