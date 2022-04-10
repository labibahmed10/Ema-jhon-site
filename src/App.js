import "./App.css";
import Header from "./Components/Header/Header";
import Shop from "./Components/Shop/Shop";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/HomePage/Home";
import NotFound from "./Components/NotFound/NotFound";
import OrderReview from "./Components/OrderReview/OrderReview";
import LogIn from "./Components/LogIn/LogIn";
import SignUp from "./Components/SignUp/SignUp";
import ManageInventory from "./Components/ManageInventoy/ManageInventory";
import RequireAuth from "./Components/RequireAuth/RequireAuth";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/shop" element={<Shop></Shop>}></Route>
        <Route path="/order" element={<OrderReview></OrderReview>}></Route>
        <Route
          path="/inventory"
          element={
            <RequireAuth>
              <ManageInventory></ManageInventory>
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<LogIn></LogIn>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
