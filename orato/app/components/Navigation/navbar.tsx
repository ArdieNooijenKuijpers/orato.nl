import NavbarLogoLeft from "./navbarLogoLeft"
import NavbarMenuRight from "./navbarMenuRight"


const Navbar = () => {
  return (
    <div>
        {/* here change the text-white and add mix-blend-difference but then underline and image is not visible */}
        <div className="fixed top-0 left-0 w-full z-10  flex justify-between mix-blend-difference text-white  ">
            <NavbarLogoLeft />
            <div>
         
                <NavbarMenuRight />
            
            </div>

        </div>
    </div>
  )
}
export default Navbar