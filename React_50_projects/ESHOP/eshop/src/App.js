import "./App.css";
import Chekout from "./Chekout";
import Header from "./Header";
import Home from "./Home";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* before v6 */}
      {/* <Router>
        <Routes>
          <Route path="./chekout">
            <Header />
            <Chekout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Routes>
      </Router> */}
      {/* V6 and futher */}

      <Router>
      {/* placing header outside ensures it appears on all pages */}
        <Header/> 
        <Routes>
          <Route path = "/Checkout" element = {<Chekout/>}/>
          <Route path = "/" element = {<Home/>}/>
        </Routes>
      </Router>
      {/* before routing code */}
      {/* <Header />
      <Home /> */}
    </div>
  );
}

export default App;
