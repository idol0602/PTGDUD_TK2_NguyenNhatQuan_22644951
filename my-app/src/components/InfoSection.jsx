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
        </div>
    );
}

export default InfoSection;