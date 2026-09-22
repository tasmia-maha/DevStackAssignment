import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import{useState,useEffect} from "react"
import TechnologyCard from "./components/TechnologyCard"
import Footer from "./components/Footer"
import type { Technology } from "./types/technology"
import { ToastContainer , toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import TechnologyIcon from "./components/TechnologyIcon"
function App(){
  const [selectedTechnologies,setSelectedTechnologies]=useState<Technology[]>([])
  const [technologies,setTechnologies]=useState<Technology[]>([])
  const [loading,setLoading]=useState(true)
  useEffect(()=>{
    fetch("/data/technologies.json")
    .then((response)=>response.json())
    .then((data)=>{
      setTechnologies(data)
      setLoading(false)
    })
    .catch((error)=>{
      console.error("Failed to load technologies",error)
      setLoading(false)
    })
  },[])
  // Add
  const handleAdd = (technology: Technology) => {
  setSelectedTechnologies((elements) => {
    const alreadyExists = elements.some(
      (item) => item.id === technology.id
    );

      if(alreadyExists){
        toast.warning(`${technology.name} is already in your stack!`)
        return elements
      }
      return [...elements,technology]
    })
    toast.success(`${technology.name} added to your stack!`)
  }
  // Remove
  const handleRemove=(technology:Technology)=>{
      setSelectedTechnologies((elements)=>
        elements.filter((item)=>item.id!==technology.id))
      toast.info(`${technology.name} removed from your stack!`)
      }
  // All remove
  const handleRemoveAll=()=>{
    setSelectedTechnologies([])
    toast.info("All technologies removed from your stack!")
  }
  if(loading){
    return(
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-lg font-medium text-gray-500">Loading technologies...</p>
      </div>
    )
  }
  return (<>
    <ToastContainer/>
    <Navbar />
    <Hero />
    <section className="px-5 sm:px-8 lg:px-30">
      <h2 className="text-3xl font-bold sm:text-4xl">Explore the<span className="bg-linear-to-r from-pink-400 via-pink-500 to-pink-500 bg-clip-text text-transparent"> Technologies</span></h2>
      <p className="text-gray-500 mt-3 text-sm sm:text-base">Pick one technology per category to build your ideal stack.</p>
      {/* Stack */}
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-4 items-start">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:col-span-3">
          {technologies.map((technology)=>(
          <TechnologyCard
            key={technology.id}
            technology={technology}
            onAdd={handleAdd}
            isAdded={selectedTechnologies.some((item)=>item.id===technology.id)}
            />
          ))}
        </div>
        <div className="rounded-2xl border border-gray-300 bg-white p-5">
            <h3 className="text-xl font-bold">Your Stack</h3>
            
          
          {selectedTechnologies.length==0?(
            <div className="mt-8 flex h-20 items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 ">
            <p className="text-sm text-gray-300">Your Stack is empty</p>
          </div>
          ):(<div className="mt-4 space-y-3">
            {selectedTechnologies.map((technology)=>
            <div key={technology.id} className="flex items-center justify-between rounded-xl border border-gray-300 p-3">
              <div className="flex items-center gap-3">
                <TechnologyIcon icon={technology.icon}/>
                <div>
                    <p className="font-medium">{technology.name}</p>
                    <p className="text-xs text-gray-400">{technology.category}</p>
                </div>
              </div>
              <button onClick={()=>handleRemove(technology)} className="text-gray-400 hover:text-red-500">✕</button>
            </div>)}
            <button onClick={handleRemoveAll} className="mt-4 w-full rounded-xl text-sm py-2 transition font-medium bg-red-600 text-white hover:bg-gray-400">Remove All</button>
          </div>)
          }
        </div>
      </div>
    </section>
    <Footer/>
  </>)
}
export default App
