import React from 'react'; 
import about from '../img/about.jpg';

function Imgsection() {
    return (
        <div className="Imgsection">
            <div className="img">
                <img src={about} alt="" />
            </div>

            <div className="about-info">
            <h4>
                    <span>
                        I am
                    </span>
                    Ketnipz 

                  
                    </h4>
                    <p className="about-text">
                    Lorem ipsum dolor sit amet, consectetur
                     adipiscing elit. Donec in nisl a nisl
                      rhoncus scelerisque sit amet id eros
                      . Nam condimentum pulvinar diam, 
                      vel blandit turpis egestas in.
                    </p>

                    <div className="about-details">
                       <div className="left-sect">
                        <p>Full Name </p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Addresse</p>
                        <p>Countries</p>
                       </div>


                       <div className="right-section">
                        <p>Katnipz</p>
                        <p>2 cat years</p>
                        <p>Americat</p>
                        <p>Engcat, frencat, Spanicat</p>
                        <p>Streets</p>
                        <p>England, USA, French</p>
                       </div>

                    </div>

               <button className="btn">
                   Download cv
               </button>
            </div>
        </div>
    )
}

export default Imgsection
