import logo from './logo.svg';
import {BrowserRouter as Router,Routes, Route, Link, Outlet, useParams} from 'react-router-dom'
import './App.css';

function App() {
  return (
   <Router>
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path="team" element={<AboutTeam />} />
          <Route path="company/:param1/:param2/:param3" element={<AboutCompany />} />
        </Route>
      </Route>
    </Routes>
   </Router>
  );
}

function Layout(){
  return(
    <div>
      <header>Header content</header>
      <main>
        <Outlet />
      </main>
      <footer>Footer content</footer>
    </div>
  )
}

function Home(){
  return <div>Welcome to my Web site</div>
}

function About(){

  const param1="value1";
  const param2="value2";
  const param3="value3";


  return(
    <div>
      <h2>About Us</h2>
      <nav>
        <Link to="team">Our Team</Link>
        <Link to={`company/${param1}/${param2}/${param3}`}>Our Company</Link>
      </nav>
      <Outlet />
    </div>
  )
}

function AboutTeam(){
  return <div>Meet our team!</div>
}

function AboutCompany(){
  let {param1,param2,param3}=useParams();
  return (
    <div>
      <h3>Learn about our company!</h3>
      <p>Param 1: {param1}</p>
      <p>Param 2: {param2}</p>
      <p>Param 3: {param3}</p>
      
    </div>
  )
}


export default App;
