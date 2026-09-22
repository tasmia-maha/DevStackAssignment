import type { Technology } from "../types/technology"
import TechnologyIcon from "./TechnologyIcon"
import { FaStar } from "react-icons/fa"
interface TechnologyCardsProps{
    technology: Technology
    onAdd:(Technology:Technology)=>void
    isAdded:boolean
}
function TechnologyCards({technology,onAdd,isAdded}:TechnologyCardsProps){
    return (
        <div>
            <div className="rounded-2xl border border-gray-300 bg-white p-5 shadow-sm hover:shadow-md transition">
                {/* Icon+Badges */}
                <div className="flex items-start justify-between gap-3">
                    <div className="shrink-0">
                        <TechnologyIcon icon={technology.icon}/>
                    </div>
                    <span className={`rounded-full px-3 py-1 text-xs font-medium whitespace-nowrap ${
                        technology.badge=="Popular" ? "bg-blue-200 text-blue-500" : technology.badge==="Versatile" ? "bg-green-200 text-green-500" : technology.badge=="Fast" ? "bg-orange-200 text-orange-500" : technology.badge=="Standard" ? "bg-green-200 text-green-500" : technology.badge==="TopSQL" ? "bg-blue-200 text-blue-500" : technology.badge==="Cache" ? "bg-red-200 text-red-500" : technology.badge==="Ubiquitous" ? "bg-yellow-100 text-yellow-500" : technology.badge==="Essential" ? "bg-blue-200 text-blue-500" : technology.badge==="Robust" ? "bg-blue-200 text-blue-500" : technology.badge==="Modern" ? "bg-blue-100 text-blue-500": "bg-teal-100 text-teal-800"}`}>{technology.badge}</span>
                </div>
                <h3 className="mt-4 text-xl font-bold">{technology.name}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-500">{technology.description}</p>
                <div className="mt-4 flex gap-2 items-center flex-wrap">
                    <span className="rounded-full bg-gray-300 px-3 py-1 text-xs text-gray-500">{technology.category}</span>
                    <span className="rounded-full bg-white px-3 py-1 text-xs text-gray-500">{technology.difficulty}</span>
                    <span className="flex items-center gap-1 text-sm font-medium text-gray-700">
                        <FaStar className="text-yellow-500 "/>{technology.rating}</span>
                </div>
                <div>
                    <button onClick={()=>onAdd(technology)}
                    disabled={isAdded}
                    className="mt-5 w-full rounded-xl bg-black py-2 text-sm font-medium text-white hover:bg-gray-400 transition disabled:cursor-not-allowed disabled:bg-gray-400">{isAdded?"Added to stack":"Add to stack"}</button>  
                </div>
            </div>
        </div>
    )
}
export default TechnologyCards