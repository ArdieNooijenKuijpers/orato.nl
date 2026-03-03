import NavbarLogoLeft from "./navbarLogoLeft"
import NavbarMenuRight from "./navbarMenuRight"
import NavbarOrangeButton from "./navbarOrangeButton"


const Navbar = () => {
  return (
    <div>
        <div className="fixed top-0 left-0 w-full z-30 flex justify-between pointer-events-none">
            <div className="pointer-events-auto">
                <NavbarLogoLeft showText={false} />
            </div>
        </div>
        <div className="fixed top-0 left-0 w-full z-20 flex justify-between mix-blend-difference text-white pointer-events-none">
            <div className="pointer-events-auto">
                <NavbarLogoLeft showLogo={false} />
            </div>
            <div className="pointer-events-auto mr-3 mt-14 p-1 sm:mr-14 sm:mt-6 sm:p-2">
                <NavbarMenuRight />
            </div>
        </div>
        <div className="fixed top-0 left-0 w-full z-30 flex justify-end pointer-events-none sm:hidden">
            <div className="mr-3 mt-3 p-1 pointer-events-auto">
                <NavbarOrangeButton />
            </div>
        </div>
        <div className="fixed top-0 left-0 w-full z-30 hidden justify-end pointer-events-none sm:flex">
            <div className="mr-3 mt-3 p-1 sm:mr-14 sm:mt-6 sm:p-2 relative pointer-events-none">
                <div className="invisible" aria-hidden="true">
                    <NavbarMenuRight />
                </div>
                <div className="absolute inset-y-0 right-full mr-2 sm:mr-4 flex items-center pointer-events-auto">
                    <NavbarOrangeButton />
                </div>
            </div>
        </div>
    </div>
  )
}
export default Navbar
