import Action from "./components/Action";
import Activity from "./components/Activity";
import Bottomsection from "./components/Bottomsection";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Location from "./components/Location";
import Magnifi from "./components/Magnifi";
import Navbar from "./components/Navbar";
import Sliderbottom from "./components/Sliderbottom";
import Sliderimage from "./components/Sliderimage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Magnifi />
      <Feature />
      <Sliderimage />
      <Action />
      {/* <Sliderbottom />
      <Activity /> */}
      <Bottomsection />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
