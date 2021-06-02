import React from 'react'
import Title from '../Components/Title'
import Imgsection from '../Components/Imgsection';
import SkillsSection from '../Components/SkillsSection';
function About() {
    return (
        <div className="About">

            <Title title={'About Ketznip'} span={'About me'}/>
<       Imgsection />
<Title title={'My Skills'} span={'My SKills'}/>

<SkillsSection skill={'sleep'} progress={'30%'} width={'50%'}/>


         </div>
    )
}

export default About;
