import style from '@/features/aboutUs/aboutStyle.module.css';
import Image from 'next/image';
import Link from 'next/link';

type Props = {};

function AppLogo({}: Props) {
  return (
    <Link
      href={'/'}
      className="flex items-center justify-center gap-3 text-2xl sm:justify-start"
    >
      <Image src={'/logo.png'} alt="logo" width={40} height={40} />
      <span className={style.highlightCompanyName}>AMG Network</span>
    </Link>
  );
}

export default AppLogo;
