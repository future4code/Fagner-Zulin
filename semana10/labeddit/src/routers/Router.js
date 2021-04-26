import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from '../pages/LoginPage/LoginPage';
import FeedPage from '../pages/FeedPage/FeedPage';
import PostPage from '../pages/PostPage/PostPage';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route exact path="/feed">
          <FeedPage />
        </Route>
        <Route exact path="/post/:id">
          <PostPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
