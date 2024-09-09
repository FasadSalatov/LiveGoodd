import { RouterProvider } from 'react-router-dom';

import { routes } from '@/shared/config/routeConfig/routes';

export const AppRouter = () => {
  return (
    <RouterProvider router={routes}/>
  );
};
