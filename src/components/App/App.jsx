import React from 'react';
import Forum from '../Forum/ForumCategories/ForumCategories';
import Thread from '../Forum/Thread/Thread';
import Post from '../Forum/Post/Post';
import { HashRouter as Router, Route, Link } from "react-router-dom";

function App() {

  return (
    <div >
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/forum">Forums</Link>
            </li>
          </ul>

          <hr />

          <Route path="/forum" component={Forum} />
          <Route path="/thread" component={Thread} />
          <Route path="/post" component={Post} />
        </div>
      </Router>
    </div>
  );
}

export default App;