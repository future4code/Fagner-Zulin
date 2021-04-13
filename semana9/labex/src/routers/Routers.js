import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import ListTripsPage from '../pages/ListTripsPage/ListTripsPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import AdminHomePage from '../pages/AdminHomePage/AdminHomePage';
import TripDetailsPage from '../pages/TripDetailsPage/TripDetailsPage';

export default function Routers() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/trips/list">
          <ListTripsPage />
        </Route>

        <Route exact path="/login">
          <LoginPage />
        </Route>

        <Route exact path="/admin/trips/list">
          <AdminHomePage />
        </Route>

        <Route exact path="/admin/trips/:id">
          <TripDetailsPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
