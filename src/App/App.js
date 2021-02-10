import '../Scss/_style.scss';
import Personnalise from "../Personnalise/Personnalise";
import Navbar from "../Navbar/Navbar";
import Landing from "../Landing/Landing";
import Summary from "../Summary/Summary";
import Part1 from "../Parts/Part1";
import Example from "../Parts/Example";
import Part2 from "../Parts/Part2";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Landing/>
        <Summary/>
        <Part1/>
        <Part2/>
        <Example/>
        <Personnalise/>
    </div>
  );
}

export default App;
