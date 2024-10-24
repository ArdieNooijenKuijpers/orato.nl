import NavbarLogoLeft from "./navbarLogoLeft"
import NavbarMenuRight from "./navbarMenuRight"


const Navbar = () => {
  return (
    <div>
        <nav className="fixed top-0 left-0 w-full z-10  flex justify-between ">
            <NavbarLogoLeft />
            <div>
                             
                <NavbarMenuRight />
            
            </div>

        </nav>
    </div>
  )
}
export default Navbar