import './App.css';
import AboutMe from './components/AboutMe';
import Banner from './components/Banner';
import Projects from './components/Projects';
import Tech from './components/Tech';
import ContactMe from './components/ContactMe';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div className="nav d-flex justify-content-between align-items-center">
        <Link className="text-decoration-none wF ms-3" to="/"><img src={"images/home.png"} alt="" /></Link>
        <div className="myLinks">
          <a className="me-1" href="https://github.com/alsanta/"><img src={"/images/git.png"} alt="Git Hub" /></a>
          <a href="https://www.linkedin.com/in/alsanta/"><img src={"/images/linkedin.png"} alt="Linkedin" /></a>
        </div>
        <Link className="text-decoration-none wF me-3" to="/email"><img src={"/images/email.png"} alt="" /></Link>
      </div>
      <Route exact path="/">
        <Banner></Banner>
      </Route>
      <Switch>
        <Route exact path="/projects">
          <Projects></Projects>
        </Route>
        <Route exact path="/me">
          <AboutMe></AboutMe>
        </Route>
        <Route exact path="/tech">
          <Tech></Tech>
        </Route>
        <Route exact path="/email">
          <ContactMe></ContactMe>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;