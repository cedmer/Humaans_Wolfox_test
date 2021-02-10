import React  from "react";

const Part1 = (props) =>{

    return(
        <div className="part1" >
            <div className="title_container">
                <h1>1 : Known yourself</h1>
            </div>
            {props.part1.Content.map((item) => {
                return(

                    <div className={"human_text_container"+" "+ item.position}>
                        <div className="human">
                            <img className={"human_head "} src={require(`../Personnalise/img/Head/Front/svg/${props.Data.Head[item.head].pathname}`).default} alt="SVG"/>
                            <img className={"human_body "} src={require(`../Personnalise/img/Body/svg/${props.Data.Body[item.body].pathname}`).default} alt="SVG"/>
                            <img className="human_bottom" src={require(`../Personnalise/img/Bottom/${props.Data.Bottom[item.bottom].position}/svg/${props.Data.Bottom[item.bottom].pathname}`).default} alt="SVG"/>
                        </div>
                        <div className="paragraph">
                            <h2>{item.title}</h2>
                            <div className="line"></div>
                            <p>{item.text}</p>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}
export default Part1