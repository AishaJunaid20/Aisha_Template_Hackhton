import Dessert from "@/components/Dessert/Dessert";
import Drink from "@/components/Drinks/Drink";
import Experience from "@/components/Experience/Experience";
import Hero from "@/components/Herosection/Hero";
import MainCours from "@/components/MainCourse/Maincourse";
import PartnersAndClients from "@/components/PartnerClient/partnerclient";
import { Menu } from "lucide-react";

export default function Home() {
  return (
<>

<div>


 <Hero/>
 <Menu/>
 <MainCours/>
 <Experience/>
 <Dessert/>
 <Drink/>
 <PartnersAndClients/>
 
</div>
</>
  );
}