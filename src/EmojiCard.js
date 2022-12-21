import React, { useState } from "react";
import './App.css';
import emojis from "./Emoji";

const EmojiCard = () => {
const [isActive, setIsActive] = useState(false)
const onClickStyle = () => {
    setIsActive(true)}

    return (
        <div >
            {emojis.map(element => {
                    return <div className="emoji-card" onClick={onClickStyle} style={{
                        height: isActive ? '20rem' : ''
                    }}>
                    <span>{element.emoji}</span>
                    <span key={element.unicode_version} className="description">{element.description}</span>
                    </div>
            })}
            <i className="gg-chevron-double-down"></i>
        </div>
    )
}

export default EmojiCard