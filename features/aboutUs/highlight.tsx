import Section from '@/components/section';
import Image from 'next/image';
import { logoList } from './data';

type Props = {};

function Highlight({}: Props) {
  return (
    <Section
      title="Reciprocity between Management Organizations and YouTube"
      description="Republic Network is able to carry out the reciprocity between the different Collecting Societies and the YouTube platform in the territory of the USA and its associated states."
      className="my-16"
    >
      <div className="lg:grid-cols65 grid grid-cols-3 gap-10 sm:grid-cols-5">
        {logoList.map((item) => (
          <Image
            key={item.id}
            className="m-auto h-auto max-h-14 w-auto text-white"
            src={item.src}
            alt={item.alt}
          />
        ))}
      </div>
    </Section>
  );
}

export default Highlight;
