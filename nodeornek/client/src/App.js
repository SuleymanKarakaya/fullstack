
import './App.css';
import {BrowserRouter as Router,Route, Link, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Post from "./pages/Post";


function App() {

  return (
    <div className="App">
      <Router>
      <Link to="/createpost">Create a Post</Link><br/>
      <Link to="/">HomePage</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/post/:id" element={<Post />} />
       </Routes>
     </Router>
    </div>
  );
}

export default App;
