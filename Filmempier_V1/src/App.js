
import React from 'react';
import Layout from './Layout';
import { Route, Routes} from 'react-router-dom';
import Detail from './Views/Details';
import Home from './Views/Home/Home';
import Categories from './Views/category';
import GridView from './component/GridView';
import Serchresult from './component/Search/SerachResult';
function App() {
  return (
   <>
   
   <Routes>
  <Route path='/' element={<Layout/>}>
    <Route index path='' element={<Home/>}/>
    <Route path='category' element={<Categories/>}/>
    <Route path='detail' element={<Detail/>}/>
    <Route path='movies' element={<GridView/>}/>
    <Route path='search' element={<Serchresult/>}/>
  </Route>
  
  </Routes>
    
   </>
  );
}

export default App;
