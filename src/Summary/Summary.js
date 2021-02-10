import React , {} from "react";
import {Link} from "react-scroll";


const Summary = () =>{

    return(
        <div className="Summary" >
            <div className="title_container">
                <div className="Part">
                    <Link className="Title" to="part1" smooth={true} duration={500}>
                        <h2>1 : Known yourself</h2>
                    </Link>

                </div>
                <div className="Part">
                    <Link className="Title" to="part2" smooth={true} duration={500} >
                        <h2>2 : Picking things that you like</h2>
                    </Link>

                </div>
                <div className="Part">
                    <Link className="Title" to="Part 3" smooth={true} duration={500} >
                        <h2>3 : Build your Wardrobe</h2>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Summary