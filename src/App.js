import './App.css';
import { useState } from 'react';
import emojis from './Emoji';

const App = () => {

    const [myStyle, setMyStyle] = useState({});
    const handleClick = (id) => {
        setMyStyle((prevState) => ({
            ...myStyle,
            [id]: !prevState[id],
        }));
    };
    const [searchValue, setSearchValue] = useState('');
    const [data, setData] = useState(emojis);
    const handleChange = event => {
        setSearchValue(event.target.value);
      };
      const filteredEmojis = emojis.filter(element => {
        return element.description.includes(searchValue.toLowerCase());
      });

    return (
        <div>
            <div className="card">
                <span className="search-emoji">&#128269;</span>
                <input placeholder="Search for an Emoji!" onChange={handleChange} value={searchValue}></input>
            </div>
            <div>
                {filteredEmojis.map((element, index) => {
                    return (
                        <div
                            className="emoji-card"
                            key={element.aliases}
                            onClick={() => handleClick(index)}

  
                        >
                            <span>{element.emoji}</span>
                            <span
                                key={element.unicode_version}
                                className="description"
                            >
                                {element.description}
                            </span>
                            <div className='info
                            '
                            style={{
                                visibility: myStyle[`${index}`]
                                    ? 'visible'
                                    : 'hidden',
                                height:  myStyle[`${index}`]
                                ? '3rem'
                                : '0rem'
                            }}

                            >
                                <p className='expand'>unicode version: {element.unicode_version}</p>
                                <p className='expand'>iOS version: {element.ios_version}</p>
                                <p className='expand'>catergory: {element.category.toLowerCase()}</p>
                            </div>
                        </div>
                    );
                })}
                <i className="gg-chevron-double-down"></i>
            </div>
        </div>
    );
};

export default App;
