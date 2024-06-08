import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { registerLicense } from '@syncfusion/ej2-base';

// Registering Syncfusion license key
registerLicense('input your Syncfusion license key');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <App />
  </div>
);

