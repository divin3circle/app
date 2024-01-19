import { useEffect, useState } from 'react';
import './App.css';
import azleLogo from './assets/azle_logo.svg';
import azleShadow from './assets/azle_shadow.png';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import { backend } from './declarations/backend';

function App() {
  const [count, setCount] = useState<number | undefined>();
  const [loading, setLoading] = useState(false);

  // Get the current counter value
  const fetchCount = async () => {
    try {
      setLoading(true);
      const count = await backend.get();
      setCount(+count.toString()); // Convert BigInt to number
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const increment = async () => {
    if (loading) return; // Cancel if waiting for a new count
    try {
      setLoading(true);
      await backend.inc(); // Increment the count by 1
      await fetchCount(); // Fetch the new count
    } finally {
      setLoading(false);
    }
  };

  const decrement = async () => {
    if (loading) return;

    try {
      setLoading(true);
      await backend.dec();
      await fetchCount();
    } catch (err) {
      setLoading(false);
    }
  };

  const multipy = async () => {
    console.log('triggered multiply');
    if (loading) return;
    console.log('not loading');

    try {
      setLoading(true);
      console.log('calling backend/loading');
      await backend.mul();
      console.log('fetching count');
      await fetchCount();
    } catch (err) {
      setLoading(false);
    }
  };

  // Fetch the count on page load
  useEffect(() => {
    fetchCount();
  }, []);

  if (loading) return <div className="App">Loading...</div>;

  return (
    <div className="App">
      <div className="flex justify-between p-4">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://github.com/demergent-labs/azle" target="_blank">
          <span className="logo-stack">
            <img
              src={azleShadow}
              className="logo azle-shadow"
              alt="azle logo"
            />
            <img src={azleLogo} className="logo azle" alt="Azle logo" />
          </span>
        </a>
      </div>
      <h1 className=" font-bold text-red-500">Vite + React + Azle</h1>
      <div className="card">
        <button onClick={increment} style={{ opacity: loading ? 0.5 : 1 }}>
          Count is {count}
        </button>
      </div>
      <div className="card">
        <button onClick={decrement} style={{ opacity: loading ? 0.5 : 1 }}>
          Count is {count}
        </button>
      </div>
      <div className="card">
        <button onClick={multipy} style={{ opacity: loading ? 0.5 : 1 }}>
          Count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite, React, and Azle logos to learn more
      </p>
    </div>
  );
}

export default App;
