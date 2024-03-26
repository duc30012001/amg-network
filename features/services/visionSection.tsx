import Section from '@/components/section';
import Image from 'next/image';
import { services } from './data';

type Props = {};

function VisionSection({}: Props) {
  return (
    <Section
      title="Share our vision, understand our mission"
      //   description="Republic Network is able to carry out the reciprocity between the different Collecting Societies and the YouTube platform in the territory of the USA and its associated states."
      className="my-16"
    >
      <ul className="grid grid-cols-1 gap-10 md:grid-cols-3 xl:grid-cols-5">
        {services.map(({ id, name, image }) => (
          <li key={id} className="">
            <Image
              src={image}
              alt={name}
              width={100}
              height={70}
              className="mx-auto w-auto"
            />
            <h3 className="mt-4 text-center text-lg font-medium">{name}</h3>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default VisionSection;
