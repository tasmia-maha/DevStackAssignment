import {SiReact,SiVuedotjs,SiSvelte,SiNextdotjs,SiNodedotjs,SiPostgresql,SiRedis,SiJavascript,SiTypescript,SiTailwindcss,SiDocker} from "react-icons/si"
import {FaJava} from "react-icons/fa"
interface TechnologyCardsProps{
    icon:string
    size?:number
}
function TechnologyIcon({icon,size=30}:TechnologyCardsProps){
  if(icon==="react") return<SiReact size={size} color="#61DAFB"/>
  if(icon==="vue") return<SiVuedotjs size={size} color="#41B883"/>
  if(icon==="svelte") return<SiSvelte size={size} color="#FF3E00"/>
  if(icon==="next") return<SiNextdotjs size={size} />
  if(icon==="node") return<SiNodedotjs size={size} color="#83CD29"/>
  if(icon==="postgreSQL") return<SiPostgresql size={size} color="#336791"/>
  if(icon==="redis") return<SiRedis size={size} color="#AD2115"/>
  if(icon==="javascript") return<SiJavascript size={size} color="#F0DB4F"/>
  if(icon==="typescript") return<SiTypescript size={size} color="#007ACC"/>
  if(icon==="java") return<FaJava size={size} color="#0074BD"/>
  if(icon==="tailwindcss") return<SiTailwindcss size={size} color="#38BDF8"/>
  if(icon==="docker") return<SiDocker size={size} color="#00ACD3"/>
  return null
}
export default TechnologyIcon