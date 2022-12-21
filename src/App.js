
import './App.css';
import Input from './Input';
import EmojiCard from './EmojiCard';


function App() {
  return (
  <div className='card' onClick={() => document.querySelector('.card').style.width = '20rem'}>
    <span className='search-emoji'>&#128269;</span>
    <Input />

  </div>

  );
}

export default App;
