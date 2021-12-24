import { BrowserRouter, Route, Routes } from "react-router-dom";

//components and pages
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Navbar from "./components/Navbar";
import { useAuthContext } from "./hooks/useAuthContext";
import { authReducer } from "./context/AuthContext";

function App() {

  const { authIsReady , user } = useAuthContext()

  return (
    <div className="App">
      {authIsReady && (
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={user ? <Home/>: <Login/>}>
            
          </Route>
          <Route path="/login" element={user ? <Home/> : <Login/>}></Route>
          <Route path="/signup" element={user ? <Home/>: <Signup/>}></Route>
        </Routes>
      </BrowserRouter>
      )}
    </div>
  );
}

export default App
