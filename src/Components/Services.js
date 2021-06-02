import React from 'react'

function Services({image,title,text}) {
    return (
        <div className="Services">
             <div className="service">
                 <div className="service-content">
                <div className="img">
                <img src={image} alt="services" />

                </div>
                     <h5 className="service-title">
                         {title}
                     </h5>

                            <p className="service-text">
                                {text}
                            </p>
                     </div>
              

             </div>
        </div>
    )
}

export default Services
