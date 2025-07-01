import Blogrightsidebar from "./components/Blogrightsidebar";
import BookopenSlider from "./components/BookopenSlider";
import BookSix from "./components/BookSix";
import Contentsection from "./components/Contentsection";
import FaqAccordion from "./components/FaqAccordion";
import GridComponent from "./components/GridComponent";
import Hero from "./components/Hero";
import StoneLaptop from "./components/StoneLaptop";
import SuccessStories from "./components/SuccessStories";
import VideoSection from "./components/videoSection";
import Wordingsection from "./components/Wordingsection";


export default function Home() {
  return (
    <>

    <Hero/>

      <div className='w-full mt-96 md:mt-72 lg:mt-44 xl:mt-80'>

</div>


<BookopenSlider/>

<Blogrightsidebar/>
<Contentsection/>

<VideoSection/>
<BookSix/>
<GridComponent/>
<StoneLaptop/>
<SuccessStories/>
<Wordingsection/>
<FaqAccordion/>
  
    </>
  );
}
