import React from 'react';

const ImageControl = ({ src, alt, className }) => {
    return <img src={src || 'https://via.placeholder.com/150'} alt={alt || 'Image'} className={`w-full h-full object-cover ${className}`} />;
};

export default ImageControl;