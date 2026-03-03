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
      <div className="flex items-center ml-3 mt-3 p-1 sm:ml-6 sm:mt-6 sm:p-2">
        <Link href="/">
          <div className="group cursor-small">
            <div className="text-base sm:text-xl ml-[50px] sm:ml-[66px] h-[44px] sm:h-[58px] font-bold inline-flex items-center leading-none text-white">
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
    <div className="flex items-center ml-3 mt-3 p-1 sm:ml-6 sm:mt-6 sm:p-2">
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
                className="h-11 w-11 sm:h-[58px] sm:w-[58px] transition-transform duration-500 group-hover:rotate-12"
              />
            </div>
          ) : null}

          {/* ORATO text with underline animation on hover */}
          {showText && (
            <div className="text-base sm:text-xl ml-2 h-[44px] sm:h-[58px] font-bold inline-flex items-center leading-none text-white">
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
