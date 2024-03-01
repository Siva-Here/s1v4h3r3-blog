import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import EditPost from './EditPost';
import About from './About';
import Missing from './Missing';
import {NavLink, Route,Switch} from 'react-router-dom';
import { DataProvider } from './Context/DataContext';

function App() {

  return (

    <div className='App'>
        <Header title="s1v4h3r3 Blog"/>
      <DataProvider>    
        <Nav/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route  exact path="/post" component={NewPost}/>
          <Route  path="/edit/:id" component={EditPost}/>
          <Route path="/post/:id" component={PostPage}/>
          <Route  path="/about" component={About}/>
          <Route  path="*" component={Missing}/>
        </Switch>
        <Footer/>
      </DataProvider>
    </div>
    
  );
}

export default App;