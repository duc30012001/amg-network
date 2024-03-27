import Section from '@/components/section';
import Image from 'next/image';
import { logoList } from './data';

type Props = {};

function Highlight({}: Props) {
  return (
    <Section
      title="Reciprocity between Management Organizations and YouTube"
      description="AMG Network is able to carry out the reciprocity between the different Collecting Societies and the YouTube platform in the territory of the USA and its associated states."
      className="my-16"
    >
      <div className="lg:grid-cols65 grid grid-cols-3 gap-10 sm:grid-cols-4">
        {logoList.map((item) => (
          <Image
            key={item.id}
            className="m-auto h-auto max-h-10 w-auto text-white"
            src={item.src}
            alt={item.alt}
            width={200}
            height={70}
          />
        ))}
      </div>
    </Section>
  );
}

export default Highlight;
