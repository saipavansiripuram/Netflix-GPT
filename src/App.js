import './App.css';
import Browse from './components/Browse';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './components/Login';

function App() {
  const appRouter = createBrowserRouter([

    {
      path: "/",
      element:<Login/>

    },
    {
      path: "/browse",
      element:<Browse/>
    },
  ])
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;
