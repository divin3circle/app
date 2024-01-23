import { useEffect, useState } from 'react';
import './App.css';
import azleLogo from './assets/azle_logo.svg';
import azleShadow from './assets/azle_shadow.png';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import { backend } from './declarations/backend';
import Navbar from './components/header/Navbar';
import Landing from './home/Landing';

function App() {
  const [count, setCount] = useState<number | undefined>();
  const [loading, setLoading] = useState(false);

  // Get the current counter value
  // const fetchCount = async () => {
  //   try {
  //     setLoading(true);
  //     const count = await backend.get();
  //     setCount(+count.toString()); // Convert BigInt to number
  //   } catch (err) {
  //     console.error(err);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const increment = async () => {
  //   if (loading) return; // Cancel if waiting for a new count
  //   try {
  //     setLoading(true);
  //     await backend.inc(); // Increment the count by 1
  //     await fetchCount(); // Fetch the new count
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const decrement = async () => {
  //   if (loading) return;

  //   try {
  //     setLoading(true);
  //     await backend.dec();
  //     await fetchCount();
  //   } catch (err) {
  //     setLoading(false);
  //   }
  // };

  // const multipy = async () => {
  //   console.log('triggered multiply');
  //   if (loading) return;
  //   console.log('not loading');

  //   try {
  //     setLoading(true);
  //     console.log('calling backend/loading');
  //     await backend.mul();
  //     console.log('fetching count');
  //     await fetchCount();
  //   } catch (err) {
  //     setLoading(false);
  //   }
  // };

  // // Fetch the count on page load
  // useEffect(() => {
  //   fetchCount();
  // }, []);

  // if (loading) return <div className="App">Loading...</div>;

  return (
    <div className="App font-sans">
      <Navbar />
      <Landing />
    </div>
  );
}

export default App;
