import React , {} from "react";
import Data from "../Data/data"

const Landing = () =>{

    return(
            <div className="landing" >
                <div className="title_container">
                    <h1>Find your own style</h1>
                </div>
                <div className="human_text_container">
                    <div className="human">
                        <img className={"human_head "} src={require(`../Personnalise/img/Head/Front/svg/${Data.Head[3].pathname}`).default} alt="SVG"/>
                        <img className={"human_body "} src={require(`../Personnalise/img/Body/svg/${Data.Body[4].pathname}`).default} alt="SVG"/>
                        <img className="human_bottom" src={require(`../Personnalise/img/Bottom/${Data.Bottom[10].position}/svg/${Data.Bottom[10].pathname}`).default} alt="SVG"/>
                    </div>
                    <div className="paragraph">
                        <h2>Find an outfit that suits you</h2>
                        <div className="line"></div>
                        <p>Going clothes shopping can be difficult and confusing.
                            That why it is easier to have an idea in mind but you don’t know were to
                            start. There are so many different styles, cuts, sizes and colors that may
                            feel hopeless. Having preferences and and an reference outfit will be much
                            easier to find new clothes
                        </p>
                    </div>
                </div>
            </div>
    )
}
export default Landing