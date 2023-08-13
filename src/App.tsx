import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Login from './pages/Login';
import NavBar from './components/NavBar';
import CreatePost from './pages/create-post/CreatePost';

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/createpost' element={<CreatePost />} />
          <Route path='*' element={<h1>Error 404.</h1>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;