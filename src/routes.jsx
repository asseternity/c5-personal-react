import { createBrowserRouter } from 'react-router-dom';
import { Login } from './components/login';
import { TestComponent, TestChildComponent } from './components/test';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/test',
    element: <TestComponent />,
  },
]);

export { routes };
