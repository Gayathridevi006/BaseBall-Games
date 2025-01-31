import React from 'react';
import { useLocation } from 'react-router-dom';
import DefaultImage from "../assets/image.png"; // Import the default image

const GameResult = () => {
    const location = useLocation();
    const { data } = location.state || {};  // Destructure the passed data

    if (!data) {
        return <div>Error: No game data found!</div>;
    }

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Game Results</h1>

            <div className="mb-4">
                <strong className="text-lg">Key Moment:</strong>
                <p>{data.key_moment}</p>
            </div>

            <div className="mb-4">
                <strong className="text-lg">Sentiment Score:</strong>
                <p>{data.sentiment_score}</p>
            </div>

            <div className="mb-4">
                <strong className="text-lg">Summary:</strong>
                <p>{data.summary}</p>
            </div>

            {/* Display Image */}
            <div className="mb-4">
                <strong className="text-lg">Image:</strong>
                <img
                    src={data.imageSrc || DefaultImage} // Use default image if data.imageSrc is not available
                    alt="Game"
                    className="rounded-md w-full sm:max-w-[400px] md:max-w-[400px] lg:max-w-[600px] mx-auto h-auto" // Responsive image styling
                />
                
            </div>

            {/* Display Audio */}
            <div className="mb-4">
                <strong className="text-lg">Audio:</strong>
                {data.audioSrc ? (
                    <audio controls className="w-full max-w-[500px] mx-auto">
                        <source src={data.audioSrc} type="audio/wav" />
                        Your browser does not support the audio element.
                    </audio>
                ) : (
                    <p>No audio available.</p>
                )}
            </div>
        </div>
    );
};

export default GameResult;
