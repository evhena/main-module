import './index.css';

import { useRoutes } from 'react-router-dom';
import { AuthProvider } from './AuthProvider';
import { routes } from './Routes';

function App() {
  console.log('main  project');
  const routing = useRoutes(routes());

  return (
    <AuthProvider>
      {routing}
      <div className="container">
        <div>Name: main-module</div>
        <div>Framework: react</div>
        <div>Language: JavaScript</div>
        <div>CSS: Empty CSS</div>
      </div>
    </AuthProvider>
  );
}

export default App;
