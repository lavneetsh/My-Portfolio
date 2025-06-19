import React from 'react'
import "../Education/education.css"
import school from "../../img/school.png"
import college from "../../img/college.png"
import degree from "../../img/higher-college.jpg"

const Education = () => {
  return (
    <div>

<section id="education">
        <h2>Education</h2>
        <div className="education">
            <div className="box">
                <div className="image-holder">
                    <img src={school} alt="school" className="school"/>
                </div>
                <p>Lotus Valley Convent School</p>
                <p>10<sup>th</sup> - 86.33%</p>
                <p>July-2017</p>
            </div>

            <div className="box">
                <div className="image-holder">
                    <img src={college} alt="college" className="school"/>
                </div>
                <p>Bhartiya Sen. Secondary School</p>
                <p>12<sup>th</sup> - 90.60%</p>
                <p>July-2019</p>
            </div>

            <div className="box">
                <div className="image-holder">
                    <img src={degree} alt="higher-college" className="school"/>
                </div> 
                <p>Vellore Institute of Technology</p>
                <p>B.Tech(CGPA) = 7.43</p>
                <p>Sep 2020 = July 2024</p>
            </div>
        </div>
    </section>
        
    </div>
  )
}

export default Education