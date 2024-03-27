import Section from '@/components/section';
import Image from 'next/image';
import { visions } from './data';

type Props = {};

function VisionSection({}: Props) {
  return (
    <Section title="Share our vision, understand our mission" className="my-16">
      <ul className="grid grid-cols-1 gap-10 md:grid-cols-3 xl:grid-cols-5">
        {visions.map(({ id, name, image }) => (
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
