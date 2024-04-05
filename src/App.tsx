import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/common/Layout/Layout';
import PublicRoute from './components/auth/PublicRoute';
import PrivateRoute from './components/auth/PrivateRoute';
import Login from './page/auth/login/Login';
import Sign from './page/auth/sign/Sign';
import Mypage from './page/auth/mypage/Mypage';
import Write from './page/review/Write';
import Edit from './page/review/Edit';
import List from './page/movie/List';
import NotFound from './page/404/NotFound';
import Company from './page/company/Company';

const Main = React.lazy(()=>import('./page/main/Main'));
const View = React.lazy(()=>import('./page/view/View'));

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
          <Route 
            path='/mypage'
            element={
              <PrivateRoute>
                <Mypage/>
              </PrivateRoute>
            }
          />

          <Route
            path='/view/:movieCd'
            element={<View/>}
          />
          
          <Route
            path='/movie'
            element={<List/>}
          />

          <Route
            path='/company'
            element={<Company/>}
          />

          <Route
            path='/review'
          >
            <Route
              path='write/:movieCd'
              element={
                <PrivateRoute>
                  <Write/>
                </PrivateRoute>
              }
            />
            <Route
              path='edit/:docId'
              element={
                <PrivateRoute>
                  <Edit/>
                </PrivateRoute>
              }
            />
          </Route>

        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Suspense>
  );
}

export default App;
