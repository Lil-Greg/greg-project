import React from 'react';

const handleImgError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.target.src = "https://icons.veryicon.com/256/System/Small%20%26%20Flat/sign%20error.png";
    event.target.className = "h-full bg-[var(--light-background)]";
}

export default handleImgError;

