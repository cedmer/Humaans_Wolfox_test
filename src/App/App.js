import '../Scss/_style.scss';
import Personnalise from "../Personnalise/Personnalise";
import Navbar from "../Navbar/Navbar";
import Landing from "../Landing/Landing";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Landing/>
        <Personnalise/>
    </div>
  );
}

export default App;
