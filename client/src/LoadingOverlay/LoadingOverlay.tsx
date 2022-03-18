import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';
import './LoadingOverlay.scss';

interface LoadingOverlayProps {
    enabled:boolean;
    bgColor:string;
    spinnerColor:string;
}
const LoadingOverlay = ({enabled, bgColor, spinnerColor}:LoadingOverlayProps) => {

    let styles:Object = {
        backgroundColor:bgColor
    }
    return (
        (enabled)
        ? 
        <div className="loading-overlay" style={styles}>
            <Loader
                type="Triangle"
                color={spinnerColor}
                height={150}
                width={150}
            />
        </div>
        : <div></div>
    );
}

export default LoadingOverlay;