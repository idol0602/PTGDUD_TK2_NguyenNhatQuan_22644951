import React, { useState } from 'react';
import '../css/Header.css';

function Header() {
    const [isGioiThieuSubmenuVisible, setIsGioiThieuSubmenuVisible] = useState(false);
    const [isDaoTaoSubmenuVisible, setIsDaoTaoSubmenuVisible] = useState(false);
    const [isTuyensinhSubmenuVisible, setIsTuyensinhSubmenuVisible] = useState(false);

    const handleGioiThieuMouseEnter = () => {
        setIsGioiThieuSubmenuVisible(true);
    };

    const handleGioiThieuMouseLeave = () => {
        setIsGioiThieuSubmenuVisible(false);
    };

    const handleDaoTaoMouseEnter = () => {
        setIsDaoTaoSubmenuVisible(true);
    };

    const handleDaoTaoMouseLeave = () => {
        setIsDaoTaoSubmenuVisible(false);
    };

    const handleTuyensinhMouseEnter = () => {
        setIsTuyensinhSubmenuVisible(true);
    };

    const handleTuyensinhMouseLeave = () => {
        setIsTuyensinhSubmenuVisible(false);
    };

    return (
        <div className="header">
            
            <ul className="main-menu">
                <li
                    onMouseEnter={handleGioiThieuMouseEnter}
                    onMouseLeave={handleGioiThieuMouseLeave}
                    className="menu-item has-submenu"
                >
                    GIỚI THIỆU
                    {isGioiThieuSubmenuVisible && (
                        <ul className="submenu">
                            <li>Giới thiệu chung</li>
                            <li>Tầm nhìn - Sứ mạng - Mục tiêu chiến lược</li>
                            <li>Triết lý giáo dục</li>
                            <li>Phương châm hoạt động</li>
                            <li>Giá trị cốt lõi</li>
                            <li>Chính sách chất lượng</li>
                            <li>Sơ đồ bộ máy tổ chức</li>
                            <li>Cơ sở vật chất</li>
                            <li>Đội ngũ</li>
                            <li>Ba công khai</li>
                            <li>Hệ thống nhận diện</li>
                        </ul>
                    )}
                </li>
                <li
                    onMouseEnter={handleDaoTaoMouseEnter}
                    onMouseLeave={handleDaoTaoMouseLeave}
                    className="menu-item has-submenu"
                >
                    ĐÀO TẠO
                    {isDaoTaoSubmenuVisible && (
                        <ul className="submenu">
                            <li>Chuyên trang đào tạo</li>
                            <li>Đào tạo quốc tế</li>
                            <li>Học đại học</li>
                            <li>Sau đại học</li>
                            <li>Tuyển sinh</li>
                            <li>Chuẩn đầu ra</li>
                            <li>Học phí</li>
                            <li>Hỏi đáp</li>
                        </ul>
                    )}
                </li>
                <li
                    onMouseEnter={handleTuyensinhMouseEnter}
                    onMouseLeave={handleTuyensinhMouseLeave}
                    className="menu-item has-submenu"
                >
                    TUYỂN SINH
                    {isTuyensinhSubmenuVisible && (
                        <ul className="submenu tuyensinh-submenu">
                            <li className="submenu-header">Tuyển sinh Đại học</li>
                            <li>Tuyển sinh chương trình liên kết</li>
                            <li>Tuyển sinh trình độ Tiến sĩ - Thạc sĩ</li>
                            <li>Thông tin tuyển sinh</li>
                            <li>Quy chế tuyển sinh</li>
                            <li>Ngành nghề đào tạo</li>
                            <li>Chính sách ưu tiên</li>
                            <li>Học bổng - Hỗ trợ học tập</li>
                            <li>Hướng dẫn nhập học</li>
                        </ul>
                    )}
                </li>
                <li className="menu-item">NGHIÊN CỨU</li>
                <li className="menu-item">SINH VIÊN</li>
                <li className="menu-item">GIẢNG VIÊN</li>
                <li className="menu-item">VĂN BẰNG</li>
            </ul>
            <div className="search-bar">
                <input type="text" placeholder="Tìm kiếm..." />
                <button>Q</button>
            </div>
        </div>
    );
}

export default Header;