import './App.css'
import Ruler from './components/Ruler/Ruler';
import Header from './components/Header/Header';
import Content from './components/Content/Content';

export default function App() {
  return (
    <>
      {/* <div className='background-pic'>
        <img src="matrix.jpg" alt="blah" />
      </div> */}
      <Ruler />
      <Header />
      <Content />
    </>
  );
};
