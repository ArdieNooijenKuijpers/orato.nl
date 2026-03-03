import Link from 'next/link';
import Image from 'next/image';

type NavbarLogoLeftProps = {
  showLogo?: boolean;
  showText?: boolean;
};

const NavbarLogoLeft = ({ showLogo = true, showText = true }: NavbarLogoLeftProps) => {
  const logoSize = 58;

  if (!showLogo && showText) {
    return (
      <div className="flex items-center ml-6 mt-6 p-2">
        <Link href="/">
          <div className="group cursor-small">
            <div className="text-xl ml-[66px] h-[58px] font-bold inline-flex items-center leading-none text-white">
              <span className="relative inline-block">
                ORATO
                <span className="absolute -bottom-[2px] left-0 h-[2px] w-full origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100" />
              </span>
            </div>
          </div>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex items-center ml-6 mt-6 p-2">
      <Link href="/">
        <div className="group flex items-center cursor-small">
          {/* Logo with spin animation on hover */}
          {showLogo ? (
            <div className="appearance-none">
              <Image
                src="/Homepage/orato bloem.png"
                alt="Orato"
                width={logoSize}
                height={logoSize}
                priority
                className="transition-transform duration-500 group-hover:rotate-12"
              />
            </div>
          ) : null}

          {/* ORATO text with underline animation on hover */}
          {showText && (
            <div className="text-xl ml-2 h-[58px] font-bold inline-flex items-center leading-none text-white">
              <span className="relative inline-block">
                ORATO
                {/* Underline effect like in NavbarMenuRight */}
                <span className="absolute -bottom-[2px] left-0 h-[2px] w-full origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100" />
              </span>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default NavbarLogoLeft;
