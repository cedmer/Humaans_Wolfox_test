import React , {} from "react";
import headtest from './img/Head/Front/svg/Afro.svg'
import bodytest from './img/Body/Hoodie.svg'
import bottomtest from './img/Bottom/Sitting/Baggy Pants.svg'


const Personnalise = () =>{

    return(
        <div className="personnalise">
            <div className="human_container">
                <div className="human">
                    <img className="human_head" src={headtest}></img>
                    <img className="human_body" src={bodytest}></img>
                    <img className="human_bottom" src={bottomtest}></img>
                </div>
                <div className="human">
                    <img className="human_head" src={headtest}></img>
                    <img className="human_body" src={bodytest}></img>
                    <img className="human_bottom" src={bottomtest}></img>
                </div>
                <div className="human">
                    <img className="human_head" src={headtest}></img>
                    <img className="human_body" src={bodytest}></img>
                    <img className="human_bottom" src={bottomtest}></img>
                </div>
            </div>
        </div>
    )
}
export default Personnalise