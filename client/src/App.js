import React, { useState, useLayoutEffect } from 'react';
import { useRoutes, usePath } from 'hookrouter';
import Routes from './router';
import './App.css';
import axios from 'axios';

function App() {
  const routeResult = useRoutes(Routes);
  const path = usePath();
  return (
    <>

      {routeResult}
    </>
  );
}

export default App;
