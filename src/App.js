import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './routes/routes';
import Main from './layout/Main';

function App() {
  return (
    <div className='lg:w-3/4 m-auto'>
      <RouterProvider router={router}>
        <Main></Main>
      </RouterProvider>
    </div>
  );
}

export default App;
