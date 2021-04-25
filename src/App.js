import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import Nav from "./components/Nav/Nav";
import Rating from "./components/Rating/Rating";
import MovieList from "./pages/MovieList/MovieList";
import Movie from "./pages/Movie/Movie";
import Error from "./pages/Error/Error"
import ReviewEditor from "./pages/ReviewEditor/ReviewEditor";
import { endSession, checkSession } from "./services";

function App() {
  const [username, setUsername] = useState();
  const onLogin = (username) => {
    if (username) {
      setUsername(username);
    }
  }
  const onLogOut = () => {
    endSession()
    .then( () => {
      setUsername(null);
    })
    .catch((err) => {
    })
  }
  useEffect(() =>{
    checkSession()
    .then(({username}) => {
      setUsername(username);
    })
    .catch(err => {

    })
  },[])
  return  (
    <div className="App">
      <Nav username={username} onLogOut={onLogOut}></Nav>
      <Switch>
        <Route
          path="/home" exact component={Home} />
        <Route
          path="/login"  >
          <Login onLogin={onLogin}/>
        </Route>
        <Route
          path="/rating" exact component={Rating} />
        <Route
          path="/movie_list" exact component={MovieList}/>
        <Route
          path="/movie/:id" exact component={Movie}/>
        <Route 
          path="/new_review/:id" exact component={ReviewEditor}/>
        <Route
          path="/" exact component={MovieList}/>
        <Route component={Error}></Route>
      </Switch>
    </div>
  );
}

export default App;