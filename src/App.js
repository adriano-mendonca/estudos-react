import React from 'react';

const App = () => {
  const ativo = false;
  return <button>{ativo ? 'Ativo' : 'Inativo'}</button>;
};

export default App;
