// app/components/FoodItems.tsx
import Image from "next/Image";
export default function FoodItems() {
    return (
      <section className="py-16 bg-black">
        <div className="container mx-auto text-center">
            <h1 className="text-2xl text-yellow-500 font-serif font-semibold"><i>Food Category</i></h1>
          <h2 className="text-6xl font-bold text-white mb-12 hover:text-yellow-600 font-sans">Choose Your Food Item</h2>
          <div className="grid grid-rows-1 grid-cols-4 gap-6  ">
            <div className="pt-5 gap-6 shadow-lg">
              <Image src="/food1.png" alt="Food 1" width={900px} height={250px} className="w-[900px] h-[250px] object-cover mb-4 rounded-lg" />
             
             
            </div>
            <div className=" pt-5 gap-6 shadow-lg">
              <Image src="/food2.png" alt="Food 2" width={900px} height={250px} className="w-[900px] h-[250px] object-cover mb-4 rounded-lg" />
             
              
            </div>
            <div className="pt-5 gap-6  shadow-lg">
              <Image src="/food3.png" alt="Food 3" width={900px} height={250px} className="w-[900px] h-[250px] object-cover mb-4 rounded-lg" />
              
             
            </div>
            <div className=" pt-5 gap-6  shadow-lg">
              <Image src="/food4.png" alt="Food 3" width={900px} height={250px} className="w-[900px] h-[250px] object-cover mb-4 rounded-lg" />
              
             
            </div>
          </div>
        </div>
        <div></div>
        
      </section>
    );
  }
  
