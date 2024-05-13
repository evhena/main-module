import MainPage from './MainPage';

const routes = () => {
  return [{ path: '*', element: <MainPage /> }];
};

export { routes };
