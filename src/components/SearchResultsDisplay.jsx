/* eslint-disable react/prop-types */
import React from "react";
export default function SearchResultsDisplay({ data, theme }) {

    const [isPlaying, setIsPlaying] = React.useState("false");
    const audioElement = new Audio(data.length > 0 && (data[0].phonetics[1]["audio"] || "../../audio/no-audio.mp3"))

    const toggleAudio = () => {
        isPlaying ? audioElement.pause() : audioElement.play();
        setIsPlaying(!isPlaying);
    }

    if (data.length > 0)
    {
        return (
            <div className="search-results-container">
                <div className="word-display">
                <div className="word">
                    <h1>{data[0].word}</h1>
                    <h4>{data[0].phonetics[1]["text"]}</h4>
                </div>
                <div className="audio" onClick={toggleAudio}>
                    <i className="fas fa-play" style={{color: theme == "dark" ? "rgb(140, 43, 226)":"rgba(206, 95, 240, 0.7)"}}></i>
                </div>
                </div>
                <div className="meanings">
                    {data[0].meanings.map((meaning, index) => {
                        return (
                            <div className="meaning" key={index}>
                                <div className="title">
                                    <h3>{meaning.partOfSpeech}</h3><hr />
                                </div>
                                <h4>Meaning</h4>
                                <ul>
                                {meaning.definitions.map((definition, index) => {
                                    return (
                                        <li className="definition" key={index}>
                                            <p>{definition.definition}</p>
                                            {definition.example && <p>{definition.example}</p>}
                                        </li>
                                    )
                                })}
                                </ul>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
    else
    {
        return (
            <div className="empty">
                <h5>Nothing to display</h5>
                <div className="image-container">
                    <img src="../../Images/empty.png" alt="Bored Ogre" />
                </div>
            </div>
        )
    }
}