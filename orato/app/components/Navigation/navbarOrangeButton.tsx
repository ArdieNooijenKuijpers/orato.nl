'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { usePathname } from 'next/navigation';

type NavbarOrangeButtonProps = {
  href?: string;
  label?: string;
};

const NavbarOrangeButton = ({
  href = '/Contact',
  label = 'CONTACT',
}: NavbarOrangeButtonProps) => {
  const pathname = usePathname();
  const normalizedPath = pathname.replace(/\/$/, '').toLowerCase();

  if (normalizedPath === '/contact') {
    return null;
  }

  return (
    <Link
      href={href}
      className="group cursor-small relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-orato-orange px-3 py-1.5 text-sm font-medium text-white transition-shadow duration-500 ease-out hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 sm:px-5 sm:py-2 sm:text-lg"
    >
      <span
        aria-hidden="true"
        className="absolute right-3 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-black scale-0 transition-transform duration-500 ease-out group-hover:scale-[14]"
      />
      <span className="relative z-10 transition-colors duration-500 ease-out">{label}</span>
      <span className="relative z-10 flex h-5 w-5 items-center justify-center rounded-full bg-white sm:h-6 sm:w-6">
        <ArrowRight className="h-3 w-3 text-black sm:h-3.5 sm:w-3.5" aria-hidden="true" />
      </span>
    </Link>
  );
};

export default NavbarOrangeButton;
