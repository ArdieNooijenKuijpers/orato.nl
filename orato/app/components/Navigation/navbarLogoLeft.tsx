import Link from 'next/link';
import Image from 'next/image';


const NavbarLogoLeft = () => {
  return (
    <nav className="flex items-center ml-6">
      <Link href="/">
        <div className="group flex items-center">
          {/* Logo with spin animation on hover */}
          <div className="relative">
            <Image
              src="/orato bloem.png"
              alt="Orato"
              width={50}
              height={50}
              priority
              className="transition-transform duration-500 group-hover:rotate-12" // Add rotation on hover
            />
          </div>

          {/* ORATO text with underline animation on hover */}
          <div className="text-xl ml-2 font-bold relative inline-block">
            <Link href="/" className="relative inline-block transition-all">
              ORATO
              {/* Underline effect like in NavbarMenuRight */}
              <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-black transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          </div>
        </div>
      </Link>
    </nav>
  );
};

export default NavbarLogoLeft;
