import logo from "../assets/logo-text.png"
function Footer(){
    return(
        <>
        <footer className="mt-20 border-t border-gray-300 bg-white md:mx-20">
            <div className="grid grid-cols-4 gap-4 px-4 py-8 md:gap-10 md:px-7">
                <div>
                    <div className="flex items-center gap-2">
                        <img src={logo} alt="logo" className="h-20 w-20 object-contain"/>
                    </div>
                    <p className="mt-2 max-w-xs leading-5 text-sm text-gray-400 md:leading-6">Curated tools, technologies, and resources for developers building modern software.</p>
                    <div className="mt-5 flex gap-5">
                        <a href="#" className="text-gray-700 hover:text-gray-500">GitHub</a>
                        <a href="#" className="text-gray-700 hover:text-gray-500">Twitter</a>
                        <a href="#" className="text-gray-700 hover:text-gray-500">LinkedIn</a>
                    </div>  
                </div>
                <div>
                    <h4 className="py-5">PRODUCT</h4>
                    <a href="#" className="block text-gray-500 hover:text-gray-700 text-sm">Home</a>
                    <a href="#" className="block text-gray-500 hover:text-gray-700 text-sm">Technologies</a>
                    <a href="#" className="block text-gray-500 hover:text-gray-700 text-sm">Projects</a>
                </div>
                <div>
                    <h4 className="py-5">COMPANY</h4>
                    <a href="#" className="block text-gray-500 hover:text-gray-700 text-sm">About</a>
                    <a href="#" className="block text-gray-500 hover:text-gray-700 text-sm">Contacts</a>
                    <a href="#" className="block text-gray-500 hover:text-gray-700 text-sm">Careers</a>
                </div>
                <div>
                    <h4 className="py-5">LEGAL</h4>
                    <a href="#" className="block text-gray-500 hover:text-gray-700 text-sm">Privacy Policy</a>
                    <a href="#" className="block text-gray-500 hover:text-gray-700 text-sm">Terms of Service</a>
                </div>
            </div>
            <div className="border-t border-gray-300">
                <div className="flex flex-col text-gray-500 px-6 py-5 text-sm md:flex-row md:items-center md:justify-between">
                    <p>©2026 Dev Stack. All rights reserved.</p>
                    <div className="flex gap-10 ">
                        <a href="#" className="block hover:text-gray-700 text-sm">Privacy</a>
                        <a href="#" className="block hover:text-gray-700 text-sm">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}
export default Footer