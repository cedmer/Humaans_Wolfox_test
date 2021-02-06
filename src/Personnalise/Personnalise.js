import React , {useState} from "react";
import Data from "../Data/data"


const Personnalise = () =>{

    const [random_head, set_randomhead] = useState(5);
    const [random_head2, set_randomhead2] = useState(0);
    const [random_head3, set_randomhead3] = useState(0);

    const [random_body, set_randombody] = useState(8);
    const [random_body2, set_randombody2] = useState(0);
    const [random_body3, set_randombody3] = useState(0);

    const [random_bottom, set_randombottom] = useState(11);
    const [random_bottom2, set_randombottom2] = useState(0);
    const [random_bottom3, set_randombottom3] = useState(0);

    const Random = ()=>{
        const headmin = 0;
        const headmax = 16;

        const bodymin = 0;
        const bodymax = 9;

        const bottommin = 0;
        const bottommax = 11;
        let rand = 0;

        rand = RandomInt(headmin,headmax);
        set_randomhead(parseInt(rand))
        rand = RandomInt(headmin,headmax);
        set_randomhead2(parseInt(rand))
        rand = RandomInt(headmin,headmax);
        set_randomhead3(parseInt(rand))

        rand = RandomInt(bodymin,bodymax);
        set_randombody(parseInt(rand))
        rand = RandomInt(bodymin,bodymax);
        set_randombody2(parseInt(rand))
        rand = RandomInt(bodymin,bodymax);
        set_randombody3(parseInt(rand))

        rand = RandomInt(bottommin,bottommax);
        set_randombottom(parseInt(rand))
        rand = RandomInt(bottommin,bottommax);
        set_randombottom2(parseInt(rand))
        rand = RandomInt(bottommin,bottommax);
        set_randombottom3(parseInt(rand))
    }

    const RandomInt = (max,min) => {
        return min + Math.random() * (max - min);
    }

    const verifBody =[Data.Bottom[random_bottom].csshead, //if the bottom is standing change margin left to put the head to the right
        Data.Bottom[random_bottom].cssbody,//if the bottom is standing change margin top to bring the body to the bottom
        Data.Body[random_body].csshead,//if the coat is long change margin top to bring the head to the body
        Data.Head[random_head].csshead]//if the head is long change margin top to bring the head to the body
    return(
        <div>
            <div className="personalise">
                <div className="human_container">

                        <div className="human">
                            <img className={"human_head "+verifBody[0]} src={require(`../Personnalise/img/Head/Front/svg/${Data.Head[random_head].pathname}`).default} alt="SVG"/>
                            <img className={"human_body "+verifBody[1]+" "+verifBody[2]+ " " +verifBody[3]} src={require(`../Personnalise/img/Body/svg/${Data.Body[random_body].pathname}`).default} alt="SVG"/>
                            <img className="human_bottom" src={require(`../Personnalise/img/Bottom/${Data.Bottom[random_bottom].position}/svg/${Data.Bottom[random_bottom].pathname}`).default} alt="SVG"/>
                        </div>
                        <div className="human">
                            <img className="human_head" src={require(`../Personnalise/img/Head/Front/svg/${Data.Head[random_head2].pathname}`).default} alt="SVG"/>
                            <img className="human_body" src={require(`../Personnalise/img/Body/svg/${Data.Body[random_body2].pathname}`).default} alt="SVG"/>
                            <img className="human_bottom" src={require(`../Personnalise/img/Bottom/${Data.Bottom[random_bottom2].position}/svg/${Data.Bottom[random_bottom2].pathname}`).default} alt="SVG"/>
                        </div>
                        <div className="human">
                            <img className="human_head" src={require(`../Personnalise/img/Head/Front/svg/${Data.Head[random_head3].pathname}`).default} alt="SVG"/>
                            <img className="human_body" src={require(`../Personnalise/img/Body/svg/${Data.Body[random_body3].pathname}`).default} alt="SVG"/>
                            <img className="human_bottom" src={require(`../Personnalise/img/Bottom/${Data.Bottom[random_bottom3].position}/svg/${Data.Bottom[random_bottom3].pathname}`).default} alt="SVG"/>
                        </div>

                </div>
            </div>
            <button onClick={ ()=>Random()}></button>
        </div>
    )
}
export default Personnalise