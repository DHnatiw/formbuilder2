import React from 'react';

const ImageControl = ({ src, alt }) => {
    return <img src={src || 'https://via.placeholder.com/150'} alt={alt || 'Image'} className="w-full h-full object-cover" />;
};

export default ImageControl;