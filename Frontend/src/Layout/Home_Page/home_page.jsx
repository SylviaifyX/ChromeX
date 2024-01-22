import Home_Feature from "../../Component/Home_Feature/homeFeature"
import Home_Hero from "../../Component/Home_Hero/home_hero"
import Home_Works from "../../Component/Home_Works/home-works"




function Home_Page(){
    return(
        <section className="md:w-full  bg-[#F4F6F8]  ">
           <Home_Hero/>
           <Home_Feature/>
           <Home_Works/>

        </section>
    )
}
export default Home_Page