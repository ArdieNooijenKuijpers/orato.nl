'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const NavbarMenuRight = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const NavbarMenuRightItems = [
    { name: 'COACHING', path: '/Onderwerpen/Coaching' },
    { name: 'SUPERVISIE', path: '/Onderwerpen/Supervisie' },
    { name: 'PRESENTEREN', path: '/Onderwerpen/Presenteren' },
    { name: 'ARDIE', path: '/Info/Ardie' },
  ];

  const normalizePath = (path: string) => path.replace(/\/$/, '');
  const currentPath = normalizePath(pathname);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className="cursor-small">
      <div className="sm:hidden flex justify-end">
        <div className="relative">
          <button
            type="button"
            aria-label={isOpen ? 'Sluit menu' : 'Open menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-black/25 text-white backdrop-blur-sm transition-colors hover:bg-black/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>

          {isOpen ? (
            <div className="absolute right-0 top-full mt-3 min-w-[220px] rounded-3xl border border-white/20 bg-black/80 p-4 text-right shadow-xl backdrop-blur-md">
              <ul className="flex flex-col gap-3">
                {NavbarMenuRightItems.map((item) => {
                  const isActive = currentPath === normalizePath(item.path);

                  return (
                    <li key={item.name}>
                      <Link
                        href={item.path}
                        aria-current={isActive ? 'page' : undefined}
                        className={`relative inline-block text-sm transition-all
                          before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-right before:bg-white before:transition-transform before:duration-300
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
          ) : null}
        </div>
      </div>

      <ul className="hidden flex-col space-y-0 sm:flex sm:space-y-0">
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
