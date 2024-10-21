'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const NavbarMenuRight = () => {
  const pathname = usePathname();

  const NavbarMenuRightItems = [
    { name: 'ARDIE', path: '/Onderwerpen/ardie' },
    { name: 'COACHING', path: '/Onderwerpen/Coaching' },
    { name: 'PRESENTEREN', path: '/Onderwerpen/Presenteren' },
    { name: 'SUPERVISIE', path: '/Onderwerpen/Supervisie' },
  ];

  return (
    <div className="p-2 mr-14 mt-6">
      <ul className="flex flex-col">
        {NavbarMenuRightItems.map((item) => (
          <li key={item.name} className="">
            <Link href={item.path} className={`block text-lg transition-all hover:border-b-2 hover:border-b-gray-700 hover:animate-borderLine 
                ${pathname === item.path ? 'border-b-2 border-b-black' : ''}`}
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
