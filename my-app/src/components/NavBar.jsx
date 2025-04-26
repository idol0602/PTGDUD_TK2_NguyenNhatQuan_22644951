import React from 'react';
import '../css/Navbar.css'; // Create this CSS file

function Navbar() {
    return (
        <div className="navbar">
            <h2 className="navbar-title">CƠ CẤU TỔ CHỨC</h2>
            <ul className="navbar-list">
                <li className="navbar-item">
                    <a href="#">LÃNH ĐẠO</a>
                    <span className="arrow">&gt;</span>
                </li>
                <li className="navbar-item">
                    <a href="#">CÁC PHÒNG BAN</a>
                    <span className="arrow">&gt;</span>
                </li>
                <li className="navbar-item">
                    <a href="#">CÁC KHOA</a>
                    <span className="arrow">&gt;</span>
                </li>
                <li className="navbar-item">
                    <a href="#">CÁC VIỆN</a>
                    <span className="arrow">&gt;</span>
                </li>
                <li className="navbar-item">
                    <a href="#">CÁC TRUNG TÂM</a>
                    <span className="arrow">&gt;</span>
                </li>
                <li className="navbar-item">
                    <a href="#">CÁC PHÂN HIỆU</a>
                    <span className="arrow">&gt;</span>
                </li>
                <li className="navbar-item">
                    <a href="#">ĐOÀN THỂ</a>
                    <span className="arrow">&gt;</span>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;