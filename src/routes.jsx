import { createBrowserRouter } from 'react-router-dom';
import { Login } from './components/login';
import { TestComponent, TestChildComponent } from './components/test';
import { Newsletter } from './components/newsletter';
import { Index } from './components';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
  },
  {
    path: '/test',
    element: <TestComponent />,
  },
  {
    path: '/main',
    element: <Newsletter />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

export { routes };
