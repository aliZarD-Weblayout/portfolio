import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CommentForm } from './CommentForm';

function AppRouter() {
  return (
    <Router>
      <Route path="/posts/:postIdFromUrl">
        <CommentForm />
      </Route>
    </Router>
  );
}

export default AppRouter;
