import React, {Component} from 'react';

class BannerHead extends Component{
    render() {
        return(
            <div id="banner-head">
                <div className="row">
                    <div className="col-md-8">
                        <div className="category">
                            <span>Danh mục sản phẩm</span>
                        </div>
                        <div className="col-md-4 category-list">
                            <ul>
                                <li>Voucher giảm giá</li>
                                <li>Đi - Ăn - Chơi</li>
                                <li>Laptop - Taplet - Moblie</li>
                                <li>Nạp thẻ di động - Thẻ game</li>
                                <li>Tivi - Máy ảnh</li>
                                <li>Điện lạnh - Điện gia dụng</li>
                                <li>Thực phẩm tươi sống</li>
                                <li>Hàng tiêu dùng</li>
                                <li>Thời trang</li>
                                <li>Mỹ phẩm</li>
                                <li>Mẹ bé</li>
                                <li>Nội thất</li>
                                <li>Nội thất nhà cửa</li>
                                <li>Sách - Văn phòng phẩm</li>
                                <li>Xe - Phụ kiện</li>
                            </ul>
                        </div>
                        <div className="col-md-8 banner-home">
                            <img src="./../../src/public/banner/banner.png"></img>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="home-right">
                            <ul>
                                <li>Nạp tiền</li>
                                <li>Thẻ cào</li>
                                <li>...</li>
                            </ul>
                        </div>
                        <form id="form-right">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Số điện thoại</label>
                                <input type="email" className="form-control" id="exampleInputEmail1"
                                       aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Số tiền nạp</label>
                                <select className="form-control" id="exampleFormControlSelect1">
                                    <option>Chọn Mệnh giá</option>
                                    <option>10,000đ</option>
                                    <option>50,000đ</option>
                                    <option>100,000đ</option>
                                    <option>500,000đ</option>
                                </select>
                            </div>
                            <div className="btn btn-red"><span>Nạp ngay</span></div>
                        </form>

                        <div className="time-shopping"><span>Thời gian mua hàng</span></div>
                        <div className="time-shopping--context">
                            <ul>
                                <li>
                                    <img src="./../../src/public/images/img-context.png"/>
                                    <span><a href="#">Áo ba lỗ nam</a> bắt đầu có đơn hàng đầu tiên</span>
                                    <p>vừa xong</p>
                                </li>
                                <li>
                                    <img src="./../../src/public/images/img-context.png"/>
                                    <span><a href="#">Áo ba lỗ nam</a> bắt đầu có đơn hàng đầu tiên</span>
                                    <p>vừa xong</p>
                                </li>
                                <li>
                                    <img src="./../../src/public/images/img-context.png"/>
                                    <span><a href="#">Áo ba lỗ nam</a> bắt đầu có đơn hàng đầu tiên</span>
                                    <p>vừa xong</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default BannerHead;