import React from 'react'; 
import {faFacebook} from '@fortawesome/free-brands-svg-icons'; 
import {faGithub} from '@fortawesome/free-brands-svg-icons'; 
import {faTwitter} from '@fortawesome/free-brands-svg-icons'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{Link} from 'react-router-dom';

export default function HomePage() {
    return (
        <div className="HomePage">
                 <header className="hero">
                     <h1 className="hero-text">
                Hi, I am kettnipz

                <span>aasba lik</span>
                     </h1>

                     <p className="h-sub-text">
                         haeeeeeeeeeeeeee hae ymorem 
                         ipsum sit amet 
                         conseteur cupidate facere,
                          numquam vitae quibusdam. 
                         dummy text
                     </p>

                     <div className="icons">
<Link  className="icon-holder">
<FontAwesomeIcon icon={faFacebook} className="icon fb" />
</Link>

<Link className="icon-holder">
<FontAwesomeIcon icon={faTwitter} className="icon tw" />
</Link>

<Link className="icon-holder">
<FontAwesomeIcon icon={faGithub} className="icon gh" />
</Link>
                     </div>

                 </header>

             </div>
      
    );
}
