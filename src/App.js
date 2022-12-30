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
    return (
        <div>
            <div className="card">
                <span className="search-emoji">&#128269;</span>
                <input placeholder="Search for an Emoji!"></input>
            </div>
            <div>
                {emojis.map((element, index) => {
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
                                                        display: myStyle[`${index}`]
                                                            ? 'block'
                                                            : 'initial',
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
