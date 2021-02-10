import '../Scss/_style.scss';
import Personnalise from "../Personnalise/Personnalise";
import Navbar from "../Navbar/Navbar";
import Landing from "../Landing/Landing";
import Summary from "../Summary/Summary";
import Part1 from "../Parts/Part1";
import Example from "../Parts/Example";
import Part2 from "../Parts/Part2";
import {part1} from "../Data2/part1content"
import {Data} from '../Data2/data'
import {Nav} from "../Data2/navbarcontent"
import {examples} from "../Data2/part2content"
import React from 'react';

function App() {
  return (
    <div className="App">
        <Navbar
        Data={Nav}/>
        <Landing
        Data={Data}/>
        <Summary/>
        <Part1
        part1={part1}
        Data={Data}/>
        <Part2/>
        <Example
            examples={examples}
            Data={Data}/>
        <Personnalise
            Data={Data}/>
    </div>
  );
}

export default App;
