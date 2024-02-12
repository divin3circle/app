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
import Loading from './components/ui/Loading';
import Details from './pages/Details';
import { SidebarProvider } from './context/SidebarContext';
import UserInfo from './pages/UserInfo';
import { DataProvider } from './context/DataContext';

function App() {
  const [count, setCount] = useState<number | undefined>();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User | null | undefined>(undefined);
  const [finalData, setFinalData] = useState({
    username: '',
    type: '',
    interest: '',
    token: 10,
  });

  if (
    finalData.username !== '' &&
    finalData.type !== '' &&
    finalData.interest !== ''
  ) {
    console.log(finalData);
  }
  useEffect(() => {
    (async () =>
      await initJuno({
        satelliteId: 'zfhyx-fyaaa-aaaal-adpaa-cai',
      }))();
    const sub: Unsubscribe = authSubscribe((user: User | null): void => {
      setUser(user);
      // console.log(user);
    });

    return () => sub();
  }, []);

  if (loading)
    return (
      <div className="h-screen flex justify-center items-center">
        <Loading />
      </div>
    );

  return (
    <DataProvider>
      <div className="App">
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
              element={<Dashboard finalData={finalData} />}
            />
            <Route path="/user-info" element={<UserInfo />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </div>
    </DataProvider>
  );
}

export default App;
