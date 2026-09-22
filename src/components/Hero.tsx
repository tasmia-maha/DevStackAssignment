import bannerStack from "../assets/banner-stack.png";
function Hero(){
    return(
        <section className="bg-white">
            <div className="grid grid-cols-1 items-center gap-8 px-5 py-8 md:grid-cols-2 md:gap-5 md:px-30">
                <div className="text-center md:text-left">
                <h1 className="mt-5 text-4xl leading-tight sm:text-5xl md:text-6xl md:mt-15 font-bold">Build Your Ideal<span className="block bg-linear-to-r from-orange-500 via-pink-600 to-purple-500 bg-clip-text text-transparent">Development Stack</span></h1>
                <p className="text-gray-500 py-5 mx-auto max-w-xl md:mx-0">Explore frontend, backend, database, and tooling options,<br/>compare them side by side, and put together the stack that fits your<br/>
                    next project.</p>
                <div className="flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
                    <button className="px-6 py-3 text-white rounded-xl bg-linear-to-r from-orange-500 via-orange-400-600 to-pink-600 hover:opacity-70 transition">Explore Technologies</button>
                    <button className="px-15 py-3 text-gray-500 rounded-xl border border-gray-500 hover:bg-gray-100 transition">Learn More</button>
                </div>
            </div>
            <div className="flex justify-center">
                <img src={bannerStack} alt="Development Stack" className="w-full max-w-md object-contain" />
            </div>
            </div>
        </section>
    )
}
export default Hero
