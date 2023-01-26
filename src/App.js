import "./App.css";
import Miniinfo from "./components/First/Miniinfo";
import Detailinfo from "./components/CenterData/Detailinfo";
import Tabsbutton from "./components/Third/Tabsbutton";

// import Priceplan from "./components/Priceplan";

function App() {
  return (
    <div className="main bg-backroundcol mx-auto h-full w-full flex font-sans">
      
     <Miniinfo/>
     <Detailinfo/>
     <Tabsbutton/>
    
  
    </div>
  );
}

export default App;
