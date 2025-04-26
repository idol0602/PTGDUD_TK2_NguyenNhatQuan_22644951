import React from 'react';
import '../css/Contact.css'; // Make sure you have this CSS file

function Contact() {
    return (
        <div className="contact-full-container">
            <div className="contact-section" style={{border: "none"}}>
                <h2>LIÊN HỆ</h2>
                <div className="contact-details">
                    <p>ĐẠI HỌC CÔNG NGHIỆP TP. HỒ CHÍ MINH</p>
                    <p>Địa chỉ: Số 12 Nguyễn Văn Bảo, Phường 4,</p>
                    <p>Quận Gò Vấp, Thành phố Hồ Chí Minh</p>
                    <p>Điện thoại: <a href="tel:02838940390-100">028 38940 390 - 100</a></p>
                    <p>Tuyển sinh: <a href="tel:02839851932">028 3985 1932</a> - <a href="tel:02838955858">028 3895 5858</a> -</p>
                    <p><a href="tel:02839851917">028 3985 1917</a></p>
                    <p>Email: <a href="mailto:dhcn@iuh.edu.vn">dhcn@iuh.edu.vn</a></p>
                </div>
            </div>

            <div className="hoat-dong-khac-section"style={{border: "none"}}>
                <h2>HOẠT ĐỘNG KHÁC</h2>
                <ul>
                    <li>Hoạt động phục vụ cộng đồng</li>
                    <li>Sinh viên tình nguyện</li>
                    <li>CLB/Đội/Nhóm sinh viên</li>
                    <li>Kết nối doanh nghiệp</li>
                </ul>
            </div>

            <div className="thong-tin-mo-rong-section"style={{border: "none"}}>
                <h2>THÔNG TIN MỞ RỘNG</h2>
                <ul>
                    <li>Báo chí viết về IUH</li>
                    <li>Khám phá IUH</li>
                    <li>Kỹ năng mềm</li>
                    <li>Bộ sưu tập</li>
                    <li>Dịch vụ sinh viên</li>
                </ul>
            </div>

            <div className="van-ban-tien-ich-section"style={{border: "none"}}>
                <h2>VĂN BẢN TIỆN ÍCH</h2>
                <ul>
                    <li>Quy chế-Quy định-Quy trình</li>
                    <li>Ba công khai</li>
                    <li>Biểu mẫu đào tạo</li>
                    <li>Quản lý khoa học</li>
                    <li>Phản hồi</li>
                </ul>
            </div>

            <div className="bottom-info">
                <div>
                <img src="/images/logo.png" alt="IUH Logo" className="iuh-logo" />
                </div>
                <div className="visitor-stats">
                    <p><span role="img" aria-label="counter">📊</span> Số lượt truy cập: 288,835,410</p>
                    <p><span role="img" aria-label="person">👤</span> Hôm nay : 21,763</p>
                    <p><span role="img" aria-label="eye">👀</span> Đang xem : 102</p>
                </div>
                <div className="share-icons">
                    <p>Chia sẻ</p>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="facebook"><span role="img" aria-label="facebook">f</span></a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="twitter"><span role="img" aria-label="twitter">t</span></a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="linkedin"><span role="img" aria-label="linkedin">in</span></a>
                </div>
            </div>
        </div>
    );
}

export default Contact;