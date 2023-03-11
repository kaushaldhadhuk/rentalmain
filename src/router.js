import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./about";
import AddProperty from "./AddProperty";
import Contact from "./contact";
import Home from "./home";
import RegistrationForm from "./registation";
import Login from "./Login";
import Propertylist from "./Propertylist";
import Propertytype from "./Propertytype";
import Apartment from "./apartment";
import Bulding from "./bulding";
import House from "./house";
import Office from "./office";
import Shop from "./shop";
import Vila from "./vila";
import Otppassword from "./otppassword/Otppassword";
import Changepassword from "./changepassword/Changepassword";
import Forgetpassword from "./forgetpassword/Forgetpassword";
import Profile from "./profile/Profile";
import EditProfile from "./profile/Editprofile";
import Vendor from "./vendor/Vendor";
import Rechangepassword from "./rechangepassword/rechangepassword";
import Property from "./property";
import Propertyform from "./propertyform";

function Router() {
  return (
    // <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/propertylist" element={<Propertylist />}></Route>
      <Route path="/propertytype" element={<Propertytype />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/registration" element={<RegistrationForm />}></Route>
      <Route path="addproperty" element={<AddProperty />}></Route>
      <Route path="/login" element={<Login />} />
      <Route path="/apartment" element={<Apartment />}></Route>
      <Route path="/bulding" element={<Bulding />}></Route>
      <Route path="/house" element={<House />}></Route>
      <Route path="/office" element={<Office />}></Route>
      <Route path="/shop" element={<Shop />}></Route>
      <Route path="/vila" element={<Vila />}></Route>
      <Route path="/otppassword" element={<Otppassword />}></Route>
      <Route path="/changepassword" element={<Changepassword />}></Route>
      <Route path="/forgetpassword" element={<Forgetpassword />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/editprofile" element={<EditProfile />}></Route>
      <Route path="/vendor" element={<Vendor />}></Route>
      <Route path="/rechangepassword" element={< Rechangepassword />}></Route>
      <Route path="/property" element={< Property />}></Route>
      <Route path="/propertyform" element={< Propertyform />}></Route>
    </Routes>
    //</BrowserRouter>
  );
}

export default Router;
