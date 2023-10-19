import './App.css'
import Ruler from './components/Ruler/Ruler';
import Header from './components/Header/Header';

export default function App() {
  return (
    <>
      <Ruler />
      <Header />
      <div className='content-page'>
        <div className='content-div'>
          <div className='section1'>Helooo</div>
          <div className='section2'>Helooo2</div>
        </div>
      </div>
    </>
  );
};
