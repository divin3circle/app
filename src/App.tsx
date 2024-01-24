import { useEffect, useState } from 'react';
import './App.css';
import { backend } from './declarations/backend';
import Navbar from './components/header/Navbar';
import Landing from './pages/Landing';
import { Unsubscribe, User, initJuno } from '@junobuild/core';
import { authSubscribe } from '@junobuild/core';
import Dashboard from './pages/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error from './components/ui/Error';
import { Spinner } from './components/ui/Loading';

function App() {
  const [count, setCount] = useState<number | undefined>();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User | null | undefined>(undefined);
  useEffect(() => {
    (async () =>
      await initJuno({
        satelliteId: 'zfhyx-fyaaa-aaaal-adpaa-cai',
      }))();
    const sub: Unsubscribe = authSubscribe((user: User | null): void =>
      setUser(user),
    );

    return () => sub();
  }, []);

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

  if (loading)
    return (
      <div className="h-screen flex justify-center items-center">
        <Spinner />
      </div>
    );

  return (
    <div className="App font-sans">
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route
            index
            element={<Landing loading={loading} setLoading={setLoading} />}
          />
          <Route
            path="/home"
            element={<Landing loading={loading} setLoading={setLoading} />}
          />
          <Route
            path="/dashboard"
            element={
              <Dashboard
                user={user}
                loading={loading}
                setLoading={setLoading}
              />
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
