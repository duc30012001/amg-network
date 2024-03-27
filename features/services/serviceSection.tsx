import Section from '@/components/section';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import { services } from './data';

type Props = {};

function ServiceSection({}: Props) {
  return (
    <Section className="my-16" title="Services">
      <ul className="grid gap-16">
        {services.map(({ id, title, description, image }, index) => (
          <li
            key={id}
            className={twMerge(
              'flex flex-col items-center gap-20',
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            )}
          >
            <Image
              src={image}
              width={800}
              height={700}
              alt={title}
              className="max-w-sm rounded-3xl"
            />
            <div className="">
              <h3 className="mb-3 text-2xl font-bold">{title}</h3>
              <p>{description}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default ServiceSection;
