import './App.css';
import Characters from './components/Characters/Characters';
import HeaderApp from './components/HeaderApp/HeaderApp';
import { MainContent } from "./style"


function App() {

  return (
    <div className="App">
      <HeaderApp/>
      <MainContent>
        <Characters/>
      </MainContent>
    </div>
  );
}

export default App;
