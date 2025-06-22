import React, { useEffect, useRef } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Keep the library's base styles
import styled from 'styled-components'; // Import styled-components

/**
 * Styled component for the main carousel wrapper.
 * All the CSS for the carousel and its internal elements will be defined here.
 */
const StyledCarouselWrapper = styled.div`
    flex: 1; /* Allows it to take equal space in a flex container (e.g., App.js) */
    position: relative; /* Essential for containing absolutely positioned elements inside */
    overflow: hidden; /* Ensures content within wrapper respects its bounds and rounded corners */
    min-height: 200px; /* Fallback minimum height, will be overridden by JS 'height' prop */
    width: 100%; /* Ensures it takes full width within its parent flex item */

    /* Styles for each individual slide within the react-responsive-carousel.
     * We override some of the library's defaults to ensure our images fill the space.
     */
    .carousel .slide {
        height: 100%; /* Makes each slide take the full height of its parent (the carousel-wrapper) */
        display: flex; /* Use flexbox to center image vertically/horizontally within the slide */
        justify-content: center; /* Centers image horizontally */
        align-items: center; /* Centers image vertically */
        background: transparent; /* Removes any default background color the library might add */
    }

    /* Container for the image within each slide.
     * This ensures the image itself can be styled to cover the full area.
     */
    .carousel .slide .carousel-image-container {
        height: 100%; /* Make this container take the full height of the slide */
        width: 100%; /* Make this container take the full width of the slide */
        display: flex; /* Use flexbox again to center the image if it's smaller than the container */
        justify-content: center;
        align-items: center;
    }

    /* The actual image tag within the carousel.
     * 'object-fit: cover' is critical to make the image fill its container
     * without distortion, cropping parts if necessary.
     */
    .carousel .slide .carousel-image-container img {
        width: 99%;
        height: 100%;
        object-fit: cover;
        display: block; /* Remove any extra space below the image */
    }

    /* --- Optional: Customizing react-responsive-carousel elements --- */

    /* Styles for the navigation arrows */
    .carousel .control-arrow {
        background: rgba(0, 0, 0, 0.4); /* Semi-transparent black background */
        border-radius: 50%; /* Make them round */
        padding: 10px; /* Add some padding */
        opacity: 0.8; /* Make them slightly less opaque */
        transition: opacity 0.3s ease; /* Smooth transition for hover effect */
        z-index: 2; /* Ensure arrows are above images */
    }

    .carousel .control-arrow:hover {
        opacity: 1; /* Fully opaque on hover */
        background: rgba(0, 0, 0, 0.6); /* Darker background on hover */
    }

    /* Styles for the navigation dots (indicators) */
    .carousel .control-dots {
        bottom: 10px; /* Position dots slightly from the bottom */
        z-index: 2; /* Ensure dots are above images */
    }

    .carousel .control-dots .dot {
        background: rgba(255, 255, 255, 0.6); /* Semi-transparent white dots */
        box-shadow: none; /* Remove any default box shadow */
        border: 1px solid rgba(0, 0, 0, 0.2); /* Subtle border for definition */
        width: 8px; /* Size of the dot */
        height: 8px; /* Size of the dot */
        margin: 0 4px; /* Spacing between dots */
        transition: background 0.3s ease, transform 0.3s ease; /* Smooth transition for active state */
    }

    .carousel .control-dots .dot.selected {
        background: #007bff; /* Highlight color for the active (selected) dot */
        transform: scale(1.2); /* Slightly enlarge the active dot */
    }

    /* Optional: Adjust carousel height on smaller screens if stacked layout is used */
    @media (max-width: 768px) {
        /* When the layout potentially switches from side-by-side to stacked,
           the dynamic height from the description might not be appropriate.
           You might want to set a fixed height for the carousel here. */
        height: 250px !important; /* Override dynamic height for mobile */
        /* If you use this, ensure your parent component (e.g., App.js)
           doesn't pass a 'height' prop or handles it conditionally based on screen size.
           The '!important' is a quick fix, but conditional rendering/props are better. */
    }
`;

/**
 * ImageCarousel Component
 * Displays a revolving carousel of images.
 *
 * @param {Array<string>} images - An array of image URLs to display in the carousel.
 * @param {number} height - The desired height of the carousel in pixels.
 * This is typically passed from a parent component
 * to ensure it matches the height of adjacent content.
 */
const ImageCarousel = ({ images, height }) => {
    // useRef to get a direct reference to the carousel's main container.
    // This is used to dynamically set its height.
    const carouselWrapperRef = useRef(null);

    // useEffect hook to adjust the carousel's height.
    // It runs whenever the 'height' prop changes.
    useEffect(() => {
        if (carouselWrapperRef.current && height) {
            carouselWrapperRef.current.style.height = `${height}px`;
        }
    }, [height]); // Dependency array: runs when 'height' changes

    return (
        // Use the styled component as the main wrapper
        <StyledCarouselWrapper ref={carouselWrapperRef}>
            <Carousel
                autoPlay={true}           // Enables automatic sliding of images
                infiniteLoop={true}       // Makes the carousel loop back to the start after the last image
                showThumbs={false}        // Hides the small thumbnail images below the main carousel
                showStatus={false}        // Hides the "1 of 3" status text
                showIndicators={false}     // Shows the dots at the bottom indicating current slide
                showArrows={false}         // Shows the left/right navigation arrows
                interval={7000}           // Sets the duration each image is displayed (3000ms = 3 seconds)
                transitionTime={1000}      // Sets the duration of the slide transition (700ms = 0.7 seconds)
                stopOnHover={true}        // Pauses autoplay when the mouse hovers over the carousel
                // We no longer need a separate className for custom styles as they are defined in StyledCarouselWrapper
            >
                {/* Map over the images array to create a slide for each image */}
                {images.map((image, index) => (
                    <div key={index} className="carousel-image-container">
                        <img src={image} alt={`Carousel Image ${index + 1}`} />
                    </div>
                ))}
            </Carousel>
        </StyledCarouselWrapper>
    );
};

export default ImageCarousel;