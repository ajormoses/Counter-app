import Home from "./components/Home";
import Nav from "./components/Nav";
import CustomHookCounter from "./components/CustomHookCounter";
import ReducerCounter from "./components/ReducerCounter";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/home" exact element={<Home />} />
          <Route path="/nav" exact element={<Nav />} />
          <Route path="/hookcounter" exact element={<CustomHookCounter />} />
          <Route path="/reducercounter" exact element={<ReducerCounter />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
