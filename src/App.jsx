import './App.css'

export default function App() {
  const lines = [];

  for(let i=1; i<=36; i++){
    lines.push(i);
  }
  
  return (
    <div className='ruler'>
      {lines.map( (lineNo) =>  <div className='ruler-line'>{lineNo}</div>)}
    </div>
  );
};
