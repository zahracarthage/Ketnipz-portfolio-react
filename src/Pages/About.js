import React from 'react'
import Title from '../Components/Title'
import Imgsection from '../Components/Imgsection';
import SkillsSection from '../Components/SkillsSection';
import Services from '../Components/Services';
import proc from '../img/services.jpg' ;
import disa from '../img/disa.jpg' ;
//import sleep from '../img/slepe.jpg' ;


function About() {
    return (
        <div className="About">

            <Title title={'About Ketznip'} span={'About me'}/>
< Imgsection />
<Title title={'My Skills'} span={'My SKills'}/>
<div className="skillscontainer">
<SkillsSection skill={'sleep'} progress={'30%'} width={'30%'}/>
<SkillsSection skill={'funni'} progress={'50%'} width={'50%'}/>
<SkillsSection skill={'procrastinate'} progress={'80%'} width={'80%'}/>
<SkillsSection skill={'eat'} progress={'100%'} width={'100%'}/>
<SkillsSection skill={'cat'} progress={'60%'} width={'60%'}/>
<SkillsSection skill={'laziness'} progress={'10%'} width={'10%'}/>
<SkillsSection skill={'purring'} progress={'20%'} width={'20%'}/>
<SkillsSection skill={'looking atmiself'} progress={'5%'} width={'5%'}/>
<SkillsSection skill={'cook'} progress={'15%'} width={'15%'}/>
<SkillsSection skill={'gami'} progress={'98%'} width={'98%'}/>


</div>
<Title title={'Mi Services'} span={'Mi Services'}/>

<div className="services-container">
<Services image={proc} title={'procastinate'} text={'hehe'}/>
<Services image={disa} title={'major disapointment'} text={'hoho'}/>

</div>

         </div>
    )
}

export default About;
