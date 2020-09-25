import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import fetch from 'unfetch'
import { SWRConfig } from 'swr'
import App from './App';

const fetcher = url => fetch(url).then(r => r.json())

ReactDOM.render(
  <React.StrictMode>
    <SWRConfig value={{
      fetcher: fetcher,
      suspense: true,
    }}>
      <App />
    </SWRConfig>
  </React.StrictMode>,
  document.getElementById('root')
);

