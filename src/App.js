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
import { AuthContextProvider, PrivateRoute } from './contextApiMenager/contextApiMenager';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import HomeBooking from './Components/HomeBooking/HomeBooking';
import { useState } from 'react';
import TourPackages from './Components/TourPackages/TourPackages';
import TourItem from './Components/TourItem/TourItem';
import Footer from './Components/Footer/Footer';
import ContactUs from './Components/ContactUs/ContactUs';
import Admin from './Components/Admin/Admin';
import BannerTest from './Components/Home/Banner/BannerTest/BannerTest';

function App() {

  const [, setLoading] = useState(true)


  return (
    <div className="App">
      <Router>
        <AuthContextProvider>
          <Switch>
            <Route path="/test">
              <BannerTest />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
            <Route path="/contact-us">
              <Header />
              <main className='flex-shrink-0'>
                <ContactUs />
              </main>
              <Footer />
            </Route>
            <Route path="/tour/:itemId">
              <Header />
              <main className='flex-shrink-0'>
                <TourItem />
              </main>
              <Footer />
            </Route>
            <Route path="/tour-packages">
              <Header />
              <main className='flex-shrink-0'>
                <TourPackages />
              </main>
              <Footer />
            </Route>
            <Route path="/book">
              <Header />
              <main className='flex-shrink-0'>
                <BooksProduct />
              </main>
              <Footer />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/forgotpassword">
              <ForgotPassword />
            </Route>
            <PrivateRoute path="/booking">
              <Header />
              <main className='flex-shrink-0'>
                <ConfirmBook />
              </main>
              <Footer />
            </PrivateRoute>
            <Route exact path="/">
              <Header />
              <Banner setLoading={setLoading} />
              <HomeBooking />
              <Footer />
            </Route>
            <Route path="*">
              <Header />
              <main className='flex-shrink-0'>
                <ErrorPage />
              </main>
              <Footer />
            </Route>
          </Switch>
        </AuthContextProvider>
      </Router>
    </div>
  );
}

export default App;