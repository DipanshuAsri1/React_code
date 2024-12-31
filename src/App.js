import {Route ,Routes,Link} from 'react-router-dom';
import './App.css';
import Todo from './component/Todo';
import AllMeetupsPage from './pages/AllMeetup';
import FavoritesPage from './pages/Favorites';
import NewMeetupPage from './pages/NewMeetup';
import MainNavigation from './component/layouts/MainNavigation';

function App() {
  return (
    <div>
      <MainNavigation/>

     <h1>My Todos</h1>
     <Todo text='Learn React'/>   
     <Todo text='Master React'/>   
     <Todo text='Explore React'/>  

     <div> 
     <Routes>
        <Route path="/" element={<AllMeetupsPage/> }/>
        <Route path="/new-meetup" element={<NewMeetupPage/>} />
        <Route path="/favorites" element={<FavoritesPage/>} />
      </Routes>

     </div> 
    
    </div>

    
  );
}

export default App;
