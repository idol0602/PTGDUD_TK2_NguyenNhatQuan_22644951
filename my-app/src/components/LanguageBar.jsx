import React from 'react';
import '../css/LanguageBar.css'; // Create this CSS file

function LanguageBar() {
    return (
        <div className="language-bar">
            <div className="left-section">
                <p>ĐẠI HỌC CÔNG NGHIỆP TP. HỒ CHÍ MINH</p>
            </div>
            <div className="right-section">
                <p>TIẾNG VIỆT <span className="flag vn-flag">🇻🇳</span></p>
                <p className="separator">|</p>
                <p>ENGLISH <span className="flag en-flag">🇬🇧</span></p>
            </div>
        </div>
    );
}

export default LanguageBar;