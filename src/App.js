import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner.js';
import BooksProduct from './Components/BooksProduct/BooksProduct'
import Login from './Components/Login/Login';
import ConfirmBook from './Components/ConfirmBook/ConfirmBook';
import { AuthContextProvider, PrivateRoute } from './authenticationMenager/authentication';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthContextProvider>
          <Header />
          <Switch>
            <Route path="/book">
              <BooksProduct />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/forgotpassword">
              <ForgotPassword/>
            </Route>
            <PrivateRoute path="/booking">
              <ConfirmBook />
            </PrivateRoute>
            <Route exact path="/">
              <Banner />
            </Route>
            <Route path="*">
              Error
          </Route>
          </Switch>
        </AuthContextProvider>
      </Router>
    </div>
  );
}

export default App;