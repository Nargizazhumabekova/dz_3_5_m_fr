
import './App.css';
import UsersPage from './pages/usersPage/UsersPage'
import {Route, Routes} from 'react-router-dom'
import Card from "./components/user/Card";



function App() {
  return (
    <Routes>
        <Route path='/' element={<UsersPage/>}/>
        <Route path='/user/:id' element={<Card/>}/>
    </Routes>
  );
}

export default App;
