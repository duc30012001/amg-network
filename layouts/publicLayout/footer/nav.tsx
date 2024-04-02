import Link from 'next/link';
import AppLogo from '../header/appLogo';
import { footerRoutes } from '../routes';

type Props = {};

function FooterNav({}: Props) {
  return (
    <ul className="mb-20 grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-4">
      <li className="col-span-2">
        <AppLogo />
        <h3 className="mt-3 font-medium">
          Suite 126 West Link House, 981 Great West Road, London, United
          Kingdom, TW8 9DN
        </h3>
      </li>
      {footerRoutes.map((item) => (
        <li key={item.id} className="col-span-2 sm:col-span-1">
          <h3 className="mb-4 text-xl font-bold text-white">{item.label}</h3>
          <ul className="flex list-none flex-col space-y-3">
            {item.children.map((child) => (
              <li key={child.id}>
                {child.href ? (
                  <Link href={child.href} target={child.target ?? '_self'}>
                    {child.label}
                  </Link>
                ) : (
                  <span>{child.label}</span>
                )}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

export default FooterNav;
