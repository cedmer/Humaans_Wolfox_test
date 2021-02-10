import React  from "react";

const Example = (props) =>{

    return(
        <div className="example" >
            <div className="title_container">
                <h1>Some example of tops</h1>
            </div>
            <div className="cards">
            {props.examples.Content.map((item) => {
                return(

                        <div className="card">
                            <div className="human_container">
                                <img className={"human_body "} src={require(`../Personnalise/img/Body/svg/${props.Data.Body[item.body].pathname}`).default} alt="SVG"/>
                            </div>
                            <div className="card_text">
                                {item.text}
                            </div>
                        </div>
                )
            })}
            </div>

        </div>
    )
}
export default Example