import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Main = React.lazy(()=>import('./page/main/Main'));

function App() {
  return (
    <Suspense fallback={<div>로딩중</div>}>
      <Routes>
        <Route>
          <Route index element={<Main/>}/>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
