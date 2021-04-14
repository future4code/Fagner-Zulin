import React from 'react';
import { useHistory } from 'react-router-dom';
import useProtectedPage from '../../hooks/useProtectedPage';

export default function TripDetailsPage() {
  const history = useHistory();
  useProtectedPage(history);
  return (
    <div>
      <p>Trip details</p>
    </div>
  );
}
