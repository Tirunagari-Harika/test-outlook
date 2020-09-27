import React from 'react';
import './App.css';
import OutlookEmail from "./components/OutlookEmail";

function App() {
  console.log(process.env.PUBLIC_URL);
  return (
    <React.Fragment>
      <OutlookEmail />
    </React.Fragment>
  );
}

export default App;
