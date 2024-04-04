import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/common/Layout/Layout';
import Login from './page/auth/login/Login';
import Sign from './page/auth/sign/Sign';
import PublicRoute from './components/auth/PublicRoute';

const Main = React.lazy(()=>import('./page/main/Main'));

function App() {
  return (
    <Suspense fallback={<div>로딩중</div>}>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Main/>}/>
          <Route 
            path='/login' 
            element={
              <PublicRoute>
                <Login/>
              </PublicRoute>
            }
          />
          <Route 
            path='/sign' 
            element={
              <PublicRoute>
                <Sign/>
              </PublicRoute>
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
