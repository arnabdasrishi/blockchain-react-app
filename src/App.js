import LeftNavPanel from './components/LeftNavPannel';
import Navbar from './components/Navbar';
import RightContents from './components/RightContents';

function App() {
  return (
    <div className="App">
      {/* Navbar of the application */}
      <Navbar />

      <div className='main__contents__area'>
        <LeftNavPanel />
        <RightContents />
      </div>
    </div>
  );
}

export default App;
