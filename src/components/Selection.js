
import React, { useState } from 'react'
import '../styles/Child.css';

export default function Selection(props) {
    const { applyColor, boxTitle } = props;
    const [background, setBackground] = useState("");

    const updateSelectionStyle = (colorObj) => {
        setBackground(colorObj.background);
    };
    return (
        <div className="fix-box" onClick={() => applyColor(updateSelectionStyle)} style={{ backgroundColor: background }}>
            <p className="subheading">{boxTitle}</p>
        </div>
    )
}
