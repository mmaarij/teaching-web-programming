import BillingForm from "../billing";
import { ShoppingCart} from "../shoppingCart";
import { RedeemBox } from "../redeemBox";
import { Heading } from "./../heading"
import { Footer } from "./../footer"
import './App.css';
import logo from './../../logo.svg'; //importing from parent directory

function App() {
  return (
    <div className="App">
      <div class="container">
        <Heading />
        <div class="row">
          <div class="col-md-4 order-md-2 mb-4">
            <ShoppingCart />
            <RedeemBox />
          </div>
          <div class="col-md-8 order-md-1">
            <BillingForm />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
