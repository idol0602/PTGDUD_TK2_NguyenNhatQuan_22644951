import React from 'react';
import '../css/InfoSection.css';

function InfoSection() {
    return (
        <div className="info-section-container">
            <div className="top-sections">
                <div className="image-section quảng-cáo">
                    <h2>PHẢN HỒI QUẢNG CÁO</h2>
                    <img src="/images/quangngai.png" alt="Phản hồi quảng cáo" style={{maxHeight: 300}}/>
                </div>
                <div className="image-section thanh-hoa">
                    <h2>CƠ SỞ THANH HÓA</h2>
                    <img src="/images/thanhhoa.png" alt="Cơ sở Thanh Hóa"  style={{maxHeight: 300}}/>
                </div>
                <div className="image-section video">
                    <h2>VIDEO VÀ HÌNH ẢNH</h2>
                    <div className="video-placeholder">
                        <img src="/images/videovahinhanh.png" alt="Video và hình ảnh thumbnail"  style={{maxHeight: 300}}/>
                        <div className="play-button">▶</div>
                    </div>
                    <a href="#" className="xem-tat-ca">xem tất cả</a>
                </div>
            </div>
            <div className="contact-section">
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
        </div>
    );
}

export default InfoSection;