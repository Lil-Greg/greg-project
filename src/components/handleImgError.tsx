import React from 'react';

const handleImgError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.target.src = "https://www.freeiconspng.com/uploads/no-image-icon-4.png";
    event.target.className = "h-full bg-[var(--light-background)]";
}

export default handleImgError;

