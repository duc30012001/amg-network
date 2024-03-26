import Section from '@/components/section';
import style from './aboutStyle.module.css';

type Props = {};

function About({}: Props) {
  return (
    <Section
      title={
        <span>
          What <span className="lowercase">is</span>{' '}
          <span className={style.highlightCompanyName}>AMG Network</span>
        </span>
      }
    >
      <div className="m-auto w-full text-center text-lg lg:w-5/6">
        <p className="mt-5">
          Introducing an innovative force in the entertainment industry, our
          company specializes in creating, producing, and publishing premier
          audio content. We pride ourselves on our exceptional artist management
          services, nurturing talents to reach their full potential in the
          ever-evolving music scene. At the heart of our operations is our
          robust YouTube music and entertainment channel system, which showcases
          a diverse array of musical genres and entertainment options to a
          global audience. Through our dedication to quality and creativity,
          we&apos;ve established a platform where artists thrive, and audiences
          are treated to unforgettable audiovisual experiences. Join us as we
          continue to shape the future of music and entertainment, one note at a
          time.
        </p>
      </div>
    </Section>
  );
}

export default About;
