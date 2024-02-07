import React, { useState, useEffect } from 'react';

interface TypeWriterProps {
    text: string;
    speed: number;
}

const TypeWriter: React.FC<TypeWriterProps> = ({ text, speed }) => {
    const [displayText, setDisplayText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentIndex < text.length) {
                setDisplayText((prevText) => prevText + text[currentIndex]);
                setCurrentIndex((prevIndex) => prevIndex + 1);
            } else {
                clearInterval(interval);
            }
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed, currentIndex]);

    const zoomInStyle = {
        animation: `zoomIn ${speed / 1000}s`,
    };

    return (
        <h1 style={zoomInStyle} className="text-3xl md:text-6xl">
            {displayText}
        </h1>
    );
};

export default TypeWriter;
