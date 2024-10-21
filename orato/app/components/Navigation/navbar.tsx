import NavbarLogoLeft from "./navbarLogoLeft"
import NavbarMenuRight from "./navbarMenuRight"


const Navbar = () => {
  return (
    <div>
        <nav className="fixed top-0 left-0 w-full z-50 flex justify-between">
            <NavbarLogoLeft />
            <NavbarMenuRight />
        </nav>
    </div>
  )
}
export default Navbar