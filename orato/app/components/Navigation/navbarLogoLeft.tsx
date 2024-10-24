import Link from 'next/link';
import Image from 'next/image';

const NavbarLogoLeft = () => {
  return (
    <div className="flex items-center ml-6  ">
      <Link href="/">
        <div className="group flex items-center cursor-small">
          {/* Logo with spin animation on hover */}
          <div className="">
            <Image
              src="/Homepage/orato bloem.png"
              alt="Orato"
              width={50}
              height={50}
              priority
              className="transition-transform duration-500 group-hover:rotate-12"
            />
          </div>

          {/* ORATO text with underline animation on hover */}
          <div className="text-xl ml-2 font-bold relative  inline-block     ">
             ORATO
            {/* Underline effect like in NavbarMenuRight */}
            <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NavbarLogoLeft;
