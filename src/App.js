
import './App.css';
import Content from './components/Content';
import Scrollindicator from './components/Scrollindicator';


function App() {
  return (
    <div className="cantaner">
      <div className='header'>
        <header>
          <ul>
            <li>خانه</li>
            <li> درباره ما </li>
            <li> نظرات</li>
            <li> ارطبات با ما</li>
          </ul>
        </header>
      </div>
      <Scrollindicator/>
      <Content/>

     
    </div>
  );
}

export default App;
