import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import AppRoutes from "./components/AppRoutes";
import PostList from "./feature/posts/PostList";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <h1>Blog. React + Ruby on Rails. </h1>
      </div>
      <AppRoutes />
    </Router>
  );
}

export default App;
