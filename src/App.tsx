import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/common/Layout/Layout';

const Main = React.lazy(()=>import('./page/main/Main'));

function App() {
  return (
    <Suspense fallback={<div>로딩중</div>}>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Main/>}/>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
