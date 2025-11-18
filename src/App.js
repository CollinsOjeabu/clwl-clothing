/**
 * LESSON: React Router Nested Routes & Layouts
 * 
 * Key Concepts:
 * 1. Routes & Route: Define path matching and component rendering
 * 2. Nested Routes: Child routes inherit parent's path (/ is parent, 'shop' becomes /shop)
 * 3. Outlet: Parent component must use <Outlet /> to render child route components
 * 4. index: Default route for parent path (renders when visiting root /)
 * 
 * Best Practice: Always have a layout component (Navigation) as parent
 */

import {Routes, Route} from 'react-router-dom';

import Home from "./routes/home/home.component";
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/sign-in/sign-in.component';


const Shop = () => {
  return <h1>Shop Page</h1>
};

const App = () => {
  return (

    <Routes>
      <Route path='/' element = {<Navigation />}>
      <Route index element={<Home />} />
      <Route path='shop' element={<Shop />} />
      <Route path='sign-in' element={<SignIn />} />
      </Route> 
    </Routes>
  );
};

export default App 