import React, {useState} from 'react';
import View1 from '../Home/View1/View1';
import View2 from '../Home/View2/View2';
import View3 from '../Home/View3/View3';
import Jumbotron from '../components/navigation/jumbotron'
import Footer from '../components/navigation/footer'
const Home = () => {

  const [curViewState, setCurViewState] = useState(1);

    function goNext(){
      console.log(curViewState);
      setCurViewState(curViewState +1);
    }

    function previous(){
      console.log(curViewState);
      setCurViewState(curViewState -1);
    }

    if(curViewState ==1){
      return(
        <>
        <View1 incrementCurView = {goNext}/>
        
        <a className="carousel-control-prev" style ={{color:'black',padding: 15, fontSize: 60,fontWeight:'bolder'}} role="button" data-slide="prev" onClick={previous}>
          <span className="carousel-control-prev-icon bx bx-chevron-left" style ={{color:'black'}} aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>

        <a className="carousel-control-next" style ={{color:'black', padding: 15, fontSize: 60}} role="button" data-slide="next" onClick={goNext}>
          <span className="carousel-control-next-icon bx bx-chevron-right" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
        </>
      )
    }
    else if(curViewState ==2){
      console.log("In two")
      return(
        <>
        <a class="carousel-control-prev" style ={{color:'black',padding: 15, fontSize: 60,fontWeight:'bolder'}} role="button" data-slide="prev" onClick={previous}>
          <span class="carousel-control-prev-icon bx bx-chevron-left" style ={{color:'black'}} aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>

        <a class="carousel-control-next" style ={{color:'black', padding: 15, fontSize: 60}} role="button" data-slide="next" onClick={goNext}>
          <span class="carousel-control-next-icon bx bx-chevron-right" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
        <View2 incrementCurView = {goNext}/>
        </>
      )
    }
    else{
      return(
        <>
        <a class="carousel-control-prev" style ={{color:'black',padding: 15, fontSize: 60,fontWeight:'bolder'}} role="button" data-slide="prev" onClick={previous}>
          <span class="carousel-control-prev-icon bx bx-chevron-left" style ={{color:'black'}} aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>

        <a class="carousel-control-next" style ={{color:'black', padding: 15, fontSize: 60}} role="button" data-slide="next" onClick={goNext}>
          <span class="carousel-control-next-icon bx bx-chevron-right" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
        <View3 incrementCurView = {goNext}/>
        </>
      )
    }
};

export default Home;