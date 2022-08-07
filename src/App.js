import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Components/Header/Header';
import Banner from './Components/Home/Banner/Banner';
import BooksProduct from './Components/BooksProduct/BooksProduct'
import Login from './Components/Login/Login';
import ConfirmBook from './Components/ConfirmBook/ConfirmBook';
import { AuthContextProvider, PrivateRoute } from './authenticationMenager/authentication';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import HomeBooking from './Components/HomeBooking/HomeBooking';
import { useState } from 'react';
import TourPackages from './Components/TourPackages/TourPackages';
import TourItem from './Components/TourItem/TourItem';

function App() {

  const [, setLoading] = useState(true)


  return (
    <div className="App">
      <Router>
        <AuthContextProvider>
          <Switch>
            <Route path="/tour/:itemId">
              <Header />
              <TourItem />
            </Route>
            <Route path="/tour-packages">
              <Header />
              <TourPackages />
            </Route>
            <Route path="/book">
              <Header />
              <BooksProduct />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/forgotpassword">
              <ForgotPassword />
            </Route>
            <PrivateRoute path="/booking">
              <Header />
              <ConfirmBook />
            </PrivateRoute>
            <Route exact path="/">
              <Header />
              <Banner setLoading={setLoading} />
              <HomeBooking />
            </Route>
            <Route path="*">
              <Header />
              <ErrorPage />
            </Route>
          </Switch>
        </AuthContextProvider>
      </Router>
    </div>
  );
}

export default App;