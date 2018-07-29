import React, {Component} from 'react'

class Footer extends Component{
    render() {
        return (
            <div className="container" style={{marginTop:"50px",borderBottom: "1px solid #E5E5E5",paddingBottom: "25px"}}>
                <div className="row">
                    <div className="col-md-4 nopadding footer" style={{whiteSpace:"nowrap"}}>
                        <span className="title">VỀ MEMALL</span>
                        <p style={{paddingTop:"27px"}}>Giới thiệu về Memall</p>
                        <p>Cơ chế hoạt động sàn TMDT</p>
                        <p>Điều khoản và điều kiện giao dịch</p>
                        <p>Thông báo từ Memall</p>
                        <p>Tra cứu hóa đơn</p>
                        <p style={{paddingBottom:"27px"}}>Liên hệ Memall</p>
                        <span className="title">ĐƯỢC CHỨNG NHẬN BỞI</span>
                        <div style={{marginTop: "27px"}}>
                            <img src="./../../src/public/images/footer-1.png" style={{maxWidth: "85%", float:"left"}} alt=""/>
                            <img src="./../../src/public/images/footer-2.png" style={{maxWidth: "85%",paddingTop:"5px"}} alt=""/>
                        </div>
                    </div>
                    <div className="col-md-4 nopadding footer" style={{whiteSpace:"nowrap", left: "12rem"}}>
                        <span className="title">CHĂM SÓC KHÁCH HÀNG</span>
                        <p style={{paddingTop:"27px"}}>Trung tâm hỗ trợ khách hàng</p>
                        <p>Chính sách bảo mật thanh toán</p>
                        <p>Chính sách định danh khách hàng</p>
                        <p>Chính sách thanh toán</p>
                        <p>Chính sách giao hàng</p>
                        <p>Chính sách đổi trả</p>
                        <p>Hướng dẫn gửi trả hàng</p>
                        <p>Chính sách bảo hành</p>
                        <p>Câu hỏi thường gặp</p>
                    </div>
                    <div className="col-md-4 nopadding footer" style={{whiteSpace:"nowrap", left: "24rem"}}>
                        <span className="title">HỢP TÁC VÀ LIÊN KẾT</span>
                        <p style={{paddingTop:"27px"}}>Quy chế hoạt động Sàn GDTMĐT</p>
                        <p style={{paddingBottom:"27px"}}>Bán hàng cùng Tiki</p>
                        <span className="title">TẢI ỨNG DỤNG</span>
                        <div style={{marginTop: "27px"}}>
                            <img src="./../../src/public/images/footer-3.png" style={{maxWidth: "80%", float:"left",paddingTop:"10px"}} alt=""/>
                            <img src="./../../src/public/images/footer-4.png" style={{maxWidth: "80%", float:"left", paddingTop: "15px"}} alt=""/>
                            <img src="./../../src/public/images/footer-5.png" style={{maxWidth: "80%",paddingTop:"5px"}} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;