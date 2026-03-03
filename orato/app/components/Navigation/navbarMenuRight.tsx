'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const NavbarMenuRight = () => {
  const pathname = usePathname();

  const NavbarMenuRightItems = [
    { name: 'COACHING', path: '/Onderwerpen/Coaching' },
    { name: 'SUPERVISIE', path: '/Onderwerpen/Supervisie' },
    { name: 'PRESENTEREN', path: '/Onderwerpen/Presenteren' },
    { name: 'ARDIE', path: '/Info/Ardie' },
  ];

  const normalizePath = (path: string) => path.replace(/\/$/, '');
  const currentPath = normalizePath(pathname);

  return (
    <div className="cursor-small">
      <ul className="flex flex-col space-y-0 sm:space-y-0">
        {NavbarMenuRightItems.map((item) => {
          const isActive = currentPath === normalizePath(item.path);

          return (
            <li key={item.name}>
              <Link
                href={item.path}
                aria-current={isActive ? 'page' : undefined}
                className={`relative inline-block text-sm sm:text-lg transition-all
                  before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-left before:bg-white before:transition-transform before:duration-300
                  hover:before:scale-x-100
                  ${
                    isActive
                      ? 'font-extrabold text-white opacity-100 before:scale-x-100 before:h-[3px]'
                      : 'font-medium text-white before:scale-x-0 hover:text-white'
                  }`}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavbarMenuRight;
