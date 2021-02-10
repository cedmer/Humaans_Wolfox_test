import React , {useState,useEffect} from "react";
import {part1} from "../Data2/part1content"
import {Data} from '../Data2/data'


const Part1 = () =>{

    return(
        <div className="part1" >
            <div className="title_container">
                <h1>1 : Known yourself</h1>
            </div>
            {part1.Content.map((item) => {
                return(

                    <div className={"human_text_container"+" "+ item.position}>
                        <div className="human">
                            <img className={"human_head "} src={require(`../Personnalise/img/Head/Front/svg/${Data.Head[item.head].pathname}`).default} alt="SVG"/>
                            <img className={"human_body "} src={require(`../Personnalise/img/Body/svg/${Data.Body[item.body].pathname}`).default} alt="SVG"/>
                            <img className="human_bottom" src={require(`../Personnalise/img/Bottom/${Data.Bottom[item.bottom].position}/svg/${Data.Bottom[item.bottom].pathname}`).default} alt="SVG"/>
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