import React from 'react'

function Services({image,title,text}) {
    return (
        <div className="Services">
             <div className="service">
                 <div className="service-content">
                <img src={image} alt="services" />

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
