import React , {} from "react";
import headtest from './img/Head/Front/svg/Afro.svg'
import bodytest from './img/Body/Hoodie.svg'
import bottomtest from './img/Bottom/Sitting/Baggy Pants.svg'
import headtest2 from './img/Head/Front/svg/Caesar.svg'
import bodytest2 from './img/Body/Long Sleeve.svg'
import bottomtest2 from './img/Bottom/Standing/Sprint.svg'


const Personnalise = () =>{

    return(
        <div className="personalise">
            <div className="human_container">
                <div className="human">
                    <img className="human_head" src={headtest}></img>
                    <img className="human_body" src={bodytest}></img>
                    <img className="human_bottom" src={bottomtest}></img>
                </div>
                <div className="human">
                    <img className="human_head standing_head" src={headtest2}></img>
                    <img className="human_body standing_body" src={bodytest2}></img>
                    <img className="human_bottom" src={bottomtest2}></img>
                </div>
                <div className="human">
                    <img className="human_head standing_head" src={headtest2}></img>
                    <img className="human_body standing_body" src={bodytest2}></img>
                    <img className="human_bottom" src={bottomtest2}></img>
                </div>
            </div>
        </div>
    )
}
export default Personnalise