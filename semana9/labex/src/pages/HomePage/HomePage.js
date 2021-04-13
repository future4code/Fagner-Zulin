import React from 'react';
import { useHistory } from 'react-router-dom';
import { gotToListTripPage, gotToLoginPage } from '../../routers/coordinates';

export default function HomePage() {
  const history = useHistory();

  return (
    <div>
      <p>Home</p>
      <button type="button" onClick={() => gotToListTripPage(history)}>
        Viagens
      </button>
      <button type="button" onClick={() => gotToLoginPage(history)}>
        Login
      </button>
    </div>
  );
}
