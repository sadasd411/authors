//import Detail from './components/Details'
import Update from './components/Update'
import New from './components/New';
import ListAll from './components/List'
import './App.css';
import Header from './components/Header'
import { Router } from '@reach/router';
//import AuthorForm from './views/AuthorForm';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
      <ListAll path ="/" />
      <New path="/author/" />
      {/* <Detail path ="/author/:id"/> */}
      <Update path ="/author/:id"/> 
      </Router>
    </div>
  );
}

export default App;
