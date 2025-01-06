import Daisyui from "./components/Daisyui/Daisyui";
import LineChart from "./components/LineChart/LineChart";
import Navbar from "./components/Navbar/Navbar";
import Phones from "./components/Phones/Phones";
import PriceOptions from "./components/PriceOptions/PriceOptions";

const App = () => {
  return (
    <div>
      
      <Navbar></Navbar>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
      {/* <Daisyui></Daisyui> */}
    </div>
  );
};

export default App;