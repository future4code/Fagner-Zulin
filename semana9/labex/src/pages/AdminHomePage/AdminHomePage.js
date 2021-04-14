import React from 'react';
import { useHistory } from 'react-router-dom';
import useProtectedPage from '../../hooks/useProtectedPage';

export default function AdminHomePage() {
  const history = useHistory();
  useProtectedPage(history);
  return (
    <div>
      <p>Adm Page</p>
    </div>
  );
}
