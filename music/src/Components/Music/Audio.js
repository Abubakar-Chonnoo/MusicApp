import React, { useState } from "react";

const Audio = ({value}) => {

    const [isPlaying, setIsPlaying] = useState(false);

    const get_image_path = (albumId) => `https://api.napster.com/imageserver/v2/albums/${albumId}/images/500x500.jpg`;

    const audioHandler = () => {
        setIsPlaying(current => !current);
    };

    const RotateAnimationStyle = () => isPlaying? 'rotate': null;

    return (
        <React.Fragment>
            <img className={RotateAnimationStyle()} src={get_image_path(value.albumId)} alt="album" />
            <audio onPlay={audioHandler} onPause={audioHandler} controls>
                <source src={value.previewURL} type="audio/mp3" />
            </audio>
        </React.Fragment>
    );
    
}

export default Audio;