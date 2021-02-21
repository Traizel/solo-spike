import React from 'react';
import Forum from '../Forum/ForumCategories/ForumCategories';
import Thread from '../Forum/Thread/Thread';
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
        </div>
      </Router>
    </div>
  );
}

export default App;