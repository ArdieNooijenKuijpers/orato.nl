import Link from 'next/link';

type NavbarOrangeButtonProps = {
  href?: string;
  label?: string;
};

const NavbarOrangeButton = ({
  href = '/Contact',
  label = 'CONTACT',
}: NavbarOrangeButtonProps) => {
  return (
    <Link
      href={href}
      className="cursor-small inline-flex items-center justify-center rounded-full bg-orato-orange px-3 py-1.5 text-sm font-medium text-white transition-opacity hover:opacity-90 sm:px-5 sm:py-2 sm:text-lg"
    >
      {label}
    </Link>
  );
};

export default NavbarOrangeButton;
