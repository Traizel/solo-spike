import React from 'react';
import Forum from '../Forum/ForumCategories';
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
        </div>
      </Router>
    </div>
  );
}

export default App;