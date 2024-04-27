import './App.css';
import InitUser from './components/Auth/init';
import Footer from './components/Footer/footer';
import About from './components/Home/about';
import Hero from './components/Home/hero';
import RestaurantList from './components/Home/restaurantlist';
import Nav from './components/Nav/nav';
import RestaurantDetail from './components/Restaurant/detail';
import UserCustomer from './pages/Customer';

function App() {
  const user = {
    address:{
      city:"Pittsburgh",
      country:"US"},
    email:"ali@gmail.com",
    password:"ali_1234",
    role:"manager",
    username:"ali"
  }
  return (
    <div className="App">
      {/* <RestaurantList/> */}
      <UserCustomer user={user} />
    </div>
  );
}

export default App;
