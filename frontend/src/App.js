import "./App.css";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import Home from "./screens/Home";
import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignupPage/>}/>
        <Route path="/login" element={  <LoginPage/>}/>
        <Route path="/home" element={  <Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
