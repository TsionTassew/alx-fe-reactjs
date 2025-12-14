import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Import necessary components from react-query (now TanStack Query)
import { QueryClient, QueryClientProvider } from 'react-query'; 

// Create a client instance
// You can pass default options here, but for now, we'll stick to the defaults.
const queryClient = new QueryClient(); 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Provide the client to your app */}
    <QueryClientProvider client={queryClient}>
      <App />
      {/* Optional: React Query Devtools for inspection and debugging */}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  </React.StrictMode>
);