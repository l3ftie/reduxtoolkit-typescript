import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { Contact } from "./Pages/Contact";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <div>
            <Link to={"/"}>Home</Link>
            <Link to={"/contact"}>Contact</Link>
            <Link to={"/login"}>Login</Link>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;

{
  /* <Person
        name="Nyasha karodza"
        email="nkarodza@gmail.com"
        age={23}
        isMarried={true}
        country={Country.Zimbabwe}
        friends={["Tapiwa", "Kuda", "James", "Kemp"]}
      /> */
}
