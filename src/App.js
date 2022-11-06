import Home from "./components/Home";
import Nav from "./components/Nav";
import CustomHookCounter from "./components/CustomHookCounter";
import ReducerCounter from "./components/ReducerCounter";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/nav" exact element={<Nav />} />
          <Route path="/hookcounter" exact element={<CustomHookCounter />} />
          <Route path="/reducercounter" exact element={<ReducerCounter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;