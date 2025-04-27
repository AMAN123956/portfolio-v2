import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/global.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import BlogPost from './pages/BlogPost';
import ThreeBackground from './components/ThreeBackground';

function App() {
  return (
    <Router>
      <div className="app">
        <ThreeBackground />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/skills" component={Skills} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route path="/blogs" component={Blogs} />
          <Route path="/blog/:slug" component={BlogPost} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
