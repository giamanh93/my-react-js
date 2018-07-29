import React, {Component} from 'react';
import Search from './../component/Search';
import BannerHead from './../component/BannerHead';
import Banner from './../component/Banner';
class Home extends Component{
    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-2 nopadding"></div>
                    <div className="col-md-10 nopadding" id="menu">
                        <ul>
                            <li><a href="#">Bán hàng cùng Memall</a></li>
                            <li><a href="#">Tích Lũy điểm vàng</a></li>
                            <li><a href="#">Chăm sóc khách hàng</a></li>
                            <li><a href="#">Đăng nhập</a></li>
                            <li><a href="#">Đăng ký</a></li>
                            <li><a href="#">Ngôn ngữ</a></li>
                        </ul>
                    </div>
                </div>
                <Search />
                <BannerHead />
                <Banner />
            </div>
        )
    }
}
export default Home;