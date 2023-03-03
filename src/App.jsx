import './App.css';
import { GlobalProvider } from './Context/GlobalContext';

import ProjectRoute from './routes/ProjectRoute';

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <ProjectRoute />
      </GlobalProvider>
    </div>
  );
}

export default App;
