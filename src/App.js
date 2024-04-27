import './App.css';

import Body from './components/Body/Body';

// App store redux configuration
import { Provider } from 'react-redux';
import appStore  from './utils/Redux/appStore';

function App() {
  
  return (
    <Provider store={appStore}>
      <Body/>
    </Provider>
  );
}

export default App;
