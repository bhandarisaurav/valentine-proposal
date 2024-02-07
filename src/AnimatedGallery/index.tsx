import React, { useEffect, useMemo, useState } from "react";
import "./styles.css"; // Make sure to include your CSS styles

const AnimatedImageGallery: React.FC = () => {
    // Define image URLs

    const imageUrls: string[] = useMemo(() =>
        [
            "photos/img_1.jpeg",
            "photos/img_2.jpeg",
            "photos/img_3.jpeg",
            "photos/img_4.jpeg",
            "photos/img_5.jpeg",
            "photos/img_6.jpeg",
            "photos/img_7.jpeg",
            "photos/img_8.jpeg",
            "photos/img_9.jpeg",
            "photos/img_10.jpeg",
            "photos/img_11.jpeg",
            "photos/img_12.jpeg",
            "photos/img_13.jpeg",
            "photos/img_15.jpeg",
            "photos/img_16.jpeg",
            "photos/img_17.jpeg",
            "photos/img_18.jpeg",
            "photos/img_19.jpeg",
            "photos/img_20.jpeg",
            "photos/img_21.jpeg",
            "photos/img_22.jpeg",
            "photos/img_23.jpeg",
            "photos/img_24.jpeg",
            "photos/img_25.jpeg",
            // Add more image URLs as needed
        ], [] // Dependency array is empty because imageUrls never changes
    );

    // State to store the images
    const [images, setImages] = useState<JSX.Element[]>([]);

    useEffect(() => {
        // Function to create image elements and append them to the container
        const showImagesWithDelay = (urls: string[], delay: number) => {
            urls.forEach((url, index) => {
                setTimeout(() => {
                    const imageBlock = (
                        <figure
                            key={index}
                            className="image-block relative bg-white overflow-hidden rounded-md shadow-md transition-transform transform hover:translate-y-1 active:translate-y-0"
                        >
                            <img src={url} alt={`Image ${index + 1}`} className="h-auto" />
                            <div className="image-tooltip absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-75 text-white px-4 py-2 rounded-md opacity-0 transition-opacity">
                                Tooltip for Image {index + 1}
                            </div>
                        </figure>
                    );
                    setImages(prevImages => [...prevImages, imageBlock]);
                }, (index) * delay);
            });
        };

        showImagesWithDelay(imageUrls, 300);
    }, [imageUrls]);

    return (
        <div className="container mx-auto py-8">
            <div className="grid grid-cols-4 gap-8" id="image-container">
                {/* Render images */}
                {images.map((image, index) => (
                    <React.Fragment key={index}>{image}</React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default AnimatedImageGallery;
