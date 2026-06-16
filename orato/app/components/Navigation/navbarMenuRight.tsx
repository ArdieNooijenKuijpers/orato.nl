'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const presentationTrackItems = [
  {
    name: '1-OP-1',
    path: '#coaching',
    inactiveClassName:
      'border-orato-dark/15 bg-white text-orato-dark hover:-translate-y-0.5 hover:border-orato-dark/30 hover:bg-white hover:text-orato-dark hover:shadow-[0_10px_24px_-16px_rgba(20,20,20,0.35)]',
    activeClassName:
      'scale-[1.03] border-orato-dark bg-white text-orato-dark ring-2 ring-orato-dark/30 shadow-[0_16px_36px_-20px_rgba(20,20,20,0.3)]',
  },
  {
    name: 'SPEAKING CIRCLE®',
    path: '#speaking-circle',
    inactiveClassName:
      'border-orato-dark bg-orato-dark text-white hover:-translate-y-0.5 hover:border-orato-dark hover:bg-orato-dark hover:text-white hover:shadow-[0_12px_28px_-18px_rgba(0,0,0,0.55)]',
    activeClassName:
      'scale-[1.03] border-white bg-orato-dark text-white ring-2 ring-white/50 shadow-[0_16px_36px_-20px_rgba(0,0,0,0.65)]',
  },
  {
    name: 'WORKSHOPS',
    path: '#workshops',
    inactiveClassName:
      'border-orato-green bg-orato-green text-orato-dark hover:-translate-y-0.5 hover:border-orato-green hover:bg-orato-green hover:text-orato-dark hover:shadow-[0_12px_28px_-18px_rgba(84,166,94,0.45)]',
    activeClassName:
      'scale-[1.03] border-orato-green bg-orato-green text-orato-dark ring-2 ring-orato-dark/25 shadow-[0_16px_36px_-20px_rgba(84,166,94,0.45)]',
  },
];

export const NavbarPresenterenTracks = () => {
  const pathname = usePathname();
  const [activeTrack, setActiveTrack] = useState<string>('coaching');
  const normalizePath = (path: string) => path.replace(/\/$/, '');
  const currentPath = normalizePath(pathname);
  const isPresenterenPage =
    currentPath.toLowerCase() === '/onderwerpen/presenteren';

  useEffect(() => {
    if (!isPresenterenPage) {
      return;
    }

    const updateActiveTrack = () => {
      const trackIds = ['coaching', 'speaking-circle', 'workshops'];
      const scrollPosition = window.scrollY + 180;

      for (let index = trackIds.length - 1; index >= 0; index -= 1) {
        const id = trackIds[index];
        const element = document.getElementById(id);

        if (element && element.offsetTop <= scrollPosition) {
          setActiveTrack(id);
          return;
        }
      }

      setActiveTrack('coaching');
    };

    updateActiveTrack();
    window.addEventListener('scroll', updateActiveTrack, { passive: true });

    return () => {
      window.removeEventListener('scroll', updateActiveTrack);
    };
  }, [isPresenterenPage]);

  if (!isPresenterenPage) {
    return null;
  }

  return (
    <div className="flex max-w-[15rem] flex-col items-end gap-2 cursor-small">
      {presentationTrackItems.map((item) => (
        <Link
          key={item.name}
          href={item.path}
          onClick={() => setActiveTrack(item.path.slice(1))}
          aria-current={activeTrack === item.path.slice(1) ? 'location' : undefined}
          className={`inline-flex min-h-9 min-w-[11.5rem] items-center justify-start rounded-full border px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.14em] transition-all duration-300 ${
            activeTrack === item.path.slice(1)
              ? item.activeClassName
              : item.inactiveClassName
          }`}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            className={`mr-2 h-3.5 w-3.5 flex-none transition-opacity duration-200 ${
              activeTrack === item.path.slice(1) ? 'opacity-100' : 'opacity-0'
            }`}
            fill="none"
          >
            <path
              d="M3 10h10"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M10 5l5 5-5 5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {item.name}
        </Link>
      ))}
    </div>
  );
};

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
