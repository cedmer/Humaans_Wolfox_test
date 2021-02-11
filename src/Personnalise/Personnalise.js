import React , {useState} from "react";

const Personnalise = (props) =>{



    //states variable for the head
    const [random_head, set_randomhead] = useState(10);
    const [random_head2, set_randomhead2] = useState(0);
    const [random_head3, set_randomhead3] = useState(0);

    //states variables for the body
    const [random_body, set_randombody] = useState(7);
    const [random_body2, set_randombody2] = useState(0);
    const [random_body3, set_randombody3] = useState(0);

    //states variables for the bottom
    const [random_bottom, set_randombottom] = useState(2);
    const [random_bottom2, set_randombottom2] = useState(0);
    const [random_bottom3, set_randombottom3] = useState(0);

    const Humans = [
        {
            head : random_head,
            body : random_body,
            bottom : random_bottom,
            verifBody : {
                standing_head : props.Data.Bottom[random_bottom].csshead, //if the bottom is standing change margin left to put the head to the right : className = standing_head
                standing_bottom :props.Data.Bottom[random_bottom].cssbody,//if the bottom is standing change margin top to bring the body to the bottom
                long_coat : props.Data.Body[random_body].csshead,//if the coat is long change margin top to bring the head to the body
                long_head : props.Data.Head[random_head].csshead,//if the head is long change margin top to bring the head to the body
                long_coat_head : props.Data.Bottom[random_bottom].csshead2
            }
        },
        {
            head : random_head2,
            body : random_body2,
            bottom : random_bottom2,
            verifBody : {
                standing_head : props.Data.Bottom[random_bottom2].csshead, //if the bottom is standing change margin left to put the head to the right : className = standing_head
                standing_bottom :props.Data.Bottom[random_bottom2].cssbody,//if the bottom is standing change margin top to bring the body to the bottom
                long_coat : props.Data.Body[random_body2].csshead,//if the coat is long change margin top to bring the head to the body
                long_head : props.Data.Head[random_head2].csshead,//if the head is long change margin top to bring the head to the body
                long_coat_head : props.Data.Bottom[random_bottom2].csshead2
            }
        },
        {
            head : random_head3,
            body : random_body3,
            bottom : random_bottom3,
            verifBody : {
                standing_head : props.Data.Bottom[random_bottom3].csshead, //if the bottom is standing change margin left to put the head to the right : className = standing_head
                standing_bottom :props.Data.Bottom[random_bottom3].cssbody,//if the bottom is standing change margin top to bring the body to the bottom
                long_coat : props.Data.Body[random_body3].csshead,//if the coat is long change margin top to bring the head to the body
                long_head : props.Data.Head[random_head3].csshead,//if the head is long change margin top to bring the head to the body
                long_coat_head : props.Data.Bottom[random_bottom3].csshead2
            }
        }
    ]
    const setHumans = [
        {
            head : set_randomhead,
            body : set_randombody,
            bottom : set_randombottom
        },
        {
            head : set_randomhead2,
            body : set_randombody2,
            bottom : set_randombottom2
        },
        {
            head : set_randomhead3,
            body : set_randombody3,
            bottom : set_randombottom3
        }
    ]

    const Random = ()=>{
        const headmin = 0;
        const headmax = 16;

        const bodymin = 0;
        const bodymax = 9;

        const bottommin = 0;
        const bottommax = 11;
        let rand = 0;

        {setHumans.map((item) => {
            //random the human and apply with the setstates
            rand = RandomInt(headmin,headmax)
            item.head(parseInt(rand))
            rand = RandomInt(bodymin,bodymax)
            item.body(parseInt(rand))
            rand = RandomInt(bottommin,bottommax)
            item.bottom(parseInt(rand))
        })}
    }

    //function who give a random number between 2 numbers
    const RandomInt = (max,min) => {
        return min + Math.random() * (max - min);
    }

    return(
        <div className="personalise">
            <h1>Create your own remix</h1>
            <h2>Change the hairdos, tops and pants</h2>
            <div className="human_container">
                <div className="circle"></div>
                {Humans.map((item) => {
                    return(
                        <div className="human">
                            <img className={"human_head "+item.verifBody.standing_head+ " " +item.verifBody.long_head+" "
                                 +item.verifBody.long_coat+"_head"+item.verifBody.long_coat_head}
                                 src={require(`../Personnalise/img/Head/Front/svg/${props.Data.Head[item.head].pathname}`).default} alt="SVG"/>

                            <img className={"human_body "+item.verifBody.standing_bottom+" "+item.verifBody.long_coat}
                                 src={require(`../Personnalise/img/Body/svg/${props.Data.Body[item.body].pathname}`).default} alt="SVG"/>

                            <img className="human_bottom" src={require(`../Personnalise/img/Bottom/${props.Data.Bottom[item.bottom].position}/svg/${props.Data.Bottom[item.bottom].pathname}`).default} alt="SVG"/>
                        </div>
                    )
                })}
            </div>
            <button className="RandomChange" onClick={ ()=>Random()}>Change</button>
        </div>
    )
}
export default Personnalise