import React from 'react';
import '../css/NewsSection.css'; // Create this CSS file

function NewsSection() {
    return (
        <div className="news-section-container">
            <div className="news-column">
                <div className="news-header">
                    <h3>THÔNG BÁO</h3>
                    <a href="#" className="view-all">xem tất cả</a>
                </div>
                <ul className="news-list">
                    <li>
                        <span className="news-title">Thông báo v/v kế hoạch nghỉ hè đối với sinh viên năm 2025</span>
                        <span className="news-date">24-04-2025</span>
                        <span className="news-new">new</span>
                    </li>
                    <li>
                        <span className="news-title">Thông báo tuyển chọn nam sinh tốt nghiệp đại học cho các trường quân đội...</span>
                        <span className="news-date">21-04-2025</span>
                        <span className="news-new">new</span>
                    </li>
                    {/* Add more "THÔNG BÁO" items here */}
                </ul>
            </div>

            <div className="news-column">
                <div className="news-header">
                    <h3>TUYỂN SINH</h3>
                    <a href="#" className="view-all">xem tất cả</a>
                </div>
                <ul className="news-list">
                    <li>
                        <span className="news-title">Thông báo tuyển sinh đào tạo liên thông từ trình độ cao đẳng lên trình độ...</span>
                        <span className="news-date">28-03-2025</span>
                    </li>
                    <li>
                        <span className="news-title">Thông báo v/v tuyển sinh đại học văn bằng hai, đợt 1 năm 2025</span>
                        <span className="news-date">20-03-2025</span>
                    </li>
                    {/* Add more "TUYỂN SINH" items here */}
                </ul>
            </div>

            <div className="news-column wide-column">
                <div className="news-header">
                    <h3>TIN TỨC - SỰ KIỆN</h3>
                    <a href="#" className="view-all">xem tất cả</a>
                </div>
                <div className="news-item-with-image">
                    <img src="/images/news_event_1.jpg" alt="News Event 1" /> {/* Replace with actual image URL */}
                    <p>AVEVA tài trợ gói phần mềm trị giá 180.000 đô mỹ cho Đại học Công nghiệp... <span className="news-date">25-04-2025</span> <span className="news-new">new</span></p>
                </div>
                <div className="news-item">
                    <p>Hội nghị khoa học quốc tế BAIC 2025 lần 2 tại IUH - Sức mạnh AI trong... <span className="news-date">22-04-2025</span> <span className="news-new">new</span></p>
                </div>
                {/* Add more "TIN TỨC - SỰ KIỆN" items here */}
            </div>

            <div className="news-column wide-column">
                <div className="news-header">
                    <h3>HỢP TÁC QUỐC TẾ</h3>
                    <a href="#" className="view-all">xem tất cả</a>
                </div>
                <div className="news-item-with-image">
                    <img src="/images/international_coop_1.jpg" alt="International Cooperation 1" /> {/* Replace with actual image URL */}
                    <p>Sôi nổi loạt hoạt động Tuần lễ giao lưu văn hóa, khoa học sinh viên... <span className="news-date">24-03-2025</span></p>
                </div>
                <div className="news-item">
                    <p>Đại học Công nghiệp TP. HCM tham gia dự án Green Edu Seeds của quỹ Erasmus <span className="news-date">19-03-2025</span></p>
                </div>
                {/* Add more "HỢP TÁC QUỐC TẾ" items here */}
            </div>
        </div>
    );
}

export default NewsSection;