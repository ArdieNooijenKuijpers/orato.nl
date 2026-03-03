import NavbarLogoLeft from "./navbarLogoLeft"
import NavbarMenuRight from "./navbarMenuRight"


const Navbar = () => {
  return (
    <div>
        <div className="fixed top-0 left-0 w-full z-10 flex justify-between pointer-events-none">
            <div className="pointer-events-auto">
                <NavbarLogoLeft showText={false} />
            </div>
        </div>
        <div className="fixed top-0 left-0 w-full z-20 flex justify-between mix-blend-difference text-white pointer-events-none">
            <div className="pointer-events-auto">
                <NavbarLogoLeft showLogo={false} />
            </div>
            <div className="pointer-events-auto">
                <NavbarMenuRight />
            </div>
        </div>
    </div>
  )
}
export default Navbar
