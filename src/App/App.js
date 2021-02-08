import '../Scss/_style.scss';
import Personnalise from "../Personnalise/Personnalise";
import Navbar from "../Navbar/Navbar";
import Landing from "../Landing/Landing";
import Summary from "../Summary/Summary";
import Part1 from "../Parts/Part1";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Landing/>
        <Summary/>
        <Part1/>
        <Personnalise/>
    </div>
  );
}

export default App;
