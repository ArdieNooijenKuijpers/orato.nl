'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const NavbarMenuRight = () => {
  const pathname = usePathname();

  const NavbarMenuRightItems = [
    { name: 'COACHING', path: '/Onderwerpen/Coaching' },
    { name: 'PRESENTEREN', path: '/Onderwerpen/Presenteren' },
    { name: 'SUPERVISIE', path: '/Onderwerpen/Supervisie' },
    { name: 'ARDIE', path: '/Onderwerpen/ardie' },
  ];

  return (
    <div className="p-2 mr-14 mt-6 cursor-small">
      <ul className="flex flex-col space-y-0 z-50">
        {NavbarMenuRightItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.path}
              className={`relative inline-block text-lg font-medium text-gray-800 transition-all 
                hover:text-black 
                before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-left before:scale-x-0 
                before:bg-black before:transition-transform before:duration-300 
                hover:before:scale-x-100 
                ${pathname === item.path ? 'before:scale-x-100 text-black' : ''}`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavbarMenuRight;
