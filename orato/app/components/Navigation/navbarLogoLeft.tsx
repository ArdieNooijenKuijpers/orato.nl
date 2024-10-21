import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NavbarLogoLeft = () => {
  return (
    <nav className="flex items-center ml-6">
      <Link href="/">
        <Image src="/orato bloem.png" alt="Orato" width={50} height={50} priority/>
      </Link>
      <div className="text-xl ">
        <Link href="/" className='text-xl ml-2 hover:text-blue-500  transition-colors duration-200'>
          ORATO
        </Link>
      </div>
    </nav>
  );
};

export default NavbarLogoLeft;
