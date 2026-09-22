import {FiMenu} from "react-icons/fi"
import { useState } from "react"
function Navbar(){
    const [menuOpen,setMenuOpen]=useState(false)
    return (
        <nav className="sticky top-0 z-50 bg-white border-b">
            <div className="max-w-7xl flex justify-between items-center mx-auto px-4 py-5">
                {/* Menu button */}
                <button type="button" aria-label="Toggle navigation menu" onClick={()=>setMenuOpen(!menuOpen)} className="md:hidden text-gray-500"><FiMenu size={25}/></button>
                {/* logo */}
                <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-lg bg-linear-to-tr from-orange-500 via-pink-500 to-purple-600 flex items-center justify-center text-white font-bold">DS</div>
                        <span className="text-xl font-bold text-black">
                        Dev<span className="text-pink-500"> Stack</span>
                        <span/>
                        </span>
                </div>
                {/* menu */}
                {menuOpen && (
                    <div className="absolute left-0 top-full w-full border-b bg-white px-5 py-5 shadow md md:hidden">
                        <div className="flex flex-col gap-5 text-sm font-medium text-gray-500 hover:text-gray-600">
                            <a href="#" onClick={()=>setMenuOpen(false)}>Home</a>
                            <a href="#" onClick={()=>setMenuOpen(false)}>Technologies</a>
                            <a href="#" onClick={()=>setMenuOpen(false)}>Projects</a>
                            <a href="#" onClick={()=>setMenuOpen(false)}>About</a>
                            <a href="#" onClick={()=>setMenuOpen(false)}>Contact</a>
                        </div>
                    </div>
                )}
                <div className="flex items-center gap-3">
                    <button className="sm:block text-gray-500 hover:text-gray-600 font-medium hover:opacity-80 transition">Sign In</button>
                    <button className="px-5 py-2 rounded-full hover:bg-pink-700 bg-pink-600 text-white">Sign Up</button>
                </div>
            </div>
        </nav>
    )
}
export default Navbar