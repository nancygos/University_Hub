import React , {useState} from 'react';
import Typewriter from "typewriter-effect";
import Navbar from './Navbar';
// import { Link } from 'react-router-dom';
import Card from './Card';
import Footer from './Footer';

// images
import eng from './images/engineering.png';
import manage from './images/management.png';
import commerce from './images/commerce.png';
import art from './images/art.png';
import medical from './images/medical.png';
import pharmacy from './images/pharmacy.png';
import computer from './images/computer.png';
import law from './images/law.png';
import glass from './images/glass.png';

function Home() {

  const [search , setSearch] = useState("");

  const setItem = (e) =>{
    setSearch(e.target.value);
  }

  const listen = () =>{
      if(search === "") alert("Please write something in seach bar first.");
      else {
        alert(`${search} is searched` );
        window.scrollTo({top:600,behavior: 'smooth'});                   //Scroll window
      }
  }

  return (
    <>
        <Navbar />
        <div className='homeContainer'>
            <div id='textContainer'>
                <Typewriter
    
                    onInit={(typewriter)=> {
                    typewriter
                    .typeString("View over 2500+ colleges in India")
                        
                    .pauseFor(600)
                    .deleteAll()
                    .typeString("Explore multiple Courses in India")
                    .pauseFor(600)
                    .deleteAll()
                    .typeString("Get to know about all Exams easily")
                    .start();
                    }}
                />
            </div>
            <input type="text" placeholder="What are you looking for?" className='searchBar' onChange={setItem}/> <img className='searchGlass' src={glass}  alt="glass" onClick={listen} />
        </div>
        <div className='courseConatiner'>
          <h1>Select Your Study Goal</h1>
          <div className='cardsWrapper' id='cardsWrapper'>
            <Card logo={eng} name="Engineering" linking1="btech" field1="BE/B.Tech" linking2="diploma" field2="Diploma in Engineering" linking3="mtech" field3="ME/M.Tech" />
            <Card logo={manage} name="Management"  linking1="mba"  field1="MBA/PGDM"  linking2="bba"  field2="BBA/BBM"  linking3="mba"  field3="Executive MBA" />
            <Card logo={commerce} name="Commerce"  linking1="bcom"  field1="B.Com"  linking2="mcom"  field2="M.com" /> 
            <Card logo={art} name="Arts"  linking1="ba"  field1="BA"  linking2="ma"  field2="MA"  linking3="bfa"  field3="BFA" />
            <Card logo={medical} name="Medical"  linking1="mbbs"  field1="MBBS"  linking2="pg"  field2="PG Medical" />
            <Card logo={pharmacy} name="Pharmacy"  linking1="bpharma"  field1="B.Pharma"  linking2="mpharma"  field2="M.Pharma" />
            <Card logo={computer} name="Comp. App."  linking1="bca"  field1="BCA"  linking2="mca"  field2="MCA" />
            
            <Card logo={law} name="LAW"  linking1="llb" field1="LLB"  linking2="llm"  field2="LLM" />
          </div>
        </div>

        <div className='courseConatiner collgeContainer'>
          <h1>College Ranking 2022</h1>
          <div className='tableChoiceButtons'>
            <button className='tableBtn'>NIRF</button>
            <button className='tableBtn'>Indiatoday</button>
            <button className='tableBtn'>Business Today</button>
          </div>
        </div>

        <div className='examConatiner courseConatiner' id='examContainer'>
          <h1>Latest Exams</h1>
          <div className='examWrapper'>
            <div className='exmaChannel'> <a href="https://jeemain.nta.nic.in/" className='examLinks' target="_blank" rel="noopener noreferrer" > JEE Mains</a></div>
            <div className='exmaChannel'> <a href="https://jeeadv.ac.in/" className='examLinks' rel="noopener noreferrer" target="_blank" > JEE Advance </a> </div>
            <div className='exmaChannel'> <a href="https://gate.iitkgp.ac.in/" className='examLinks' target="_blank" rel="noopener noreferrer"> Gate </a> </div>
            <div className='exmaChannel'> <a href="https://iimcat.ac.in/per/g01/pub/756/ASM/WebPortal/1/index.html?756@@1@@1" className='examLinks' target="_blank" rel="noopener noreferrer"> CAT </a> </div>
            <div className='exmaChannel'> <a href="https://mat.aima.in/dec22/" className='examLinks' target="_blank" rel="noopener noreferrer"> MAT </a> </div>
            <div className='exmaChannel'> <a href="https://www.mba.com/exams/gmat-exam?=&utm_source=google&utm_medium=cpc&utm_campaign=sa_in_cpc_phrase_english_alloffers_google_decision_MMG&utm_keyword=gmat%20website&utm_content=s|pcrid|418836894188|pkw|gmat%20website|pmt|p&c3api=418836894188,gmat%20website&gclid=CjwKCAjw5P2aBhAlEiwAAdY7dCbkDyGlPX2TT9QEvyGO4BM6C81qglq3_UJ0BUYSoWdnigWut3BmOBoCGxUQAvD_BwE" className='examLinks' target="_blank" rel="noopener noreferrer"> GMAT </a> </div>
            <div className='exmaChannel'> <a href="https://cmat.nta.nic.in/" className='examLinks' target="_blank" rel="noopener noreferrer" > CMAT </a> </div>
            <div className='exmaChannel'> <a href="https://consortiumofnlus.ac.in/" className='examLinks' target="_blank" rel="noopener noreferrer"> CLAT </a> </div>
            <div className='exmaChannel'> <a href="https://neet.nta.nic.in/" className='examLinks' target="_blank"rel="noopener noreferrer" > NEET </a> </div>
          </div>
        </div>

        <Footer />
    </>
  )
}

export default Home