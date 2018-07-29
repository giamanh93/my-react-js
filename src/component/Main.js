import React, {Component} from 'react';
import FlastSale from './../component/FlastSale';
import GroupBuy from './../component/GroupBuy';
import HelpPeopleBuy from './../component/HelpPeopleBuy';

class Main extends Component{
    render () {
        return (
            <div>
                <div className="container">
                    <FlastSale />
                    <GroupBuy />
                    <HelpPeopleBuy />
                </div>
                <div className="container-fluid" style={{background: "#e00708", height: "150px", marginTop:"29px"}}>
                    <div className="col-md-6">
                       <div className="col-md-3">
                           <img style={{maxWidth:"70%",marginLeft:"14rem", marginTop:"35px"}} src="./../../src/public/images/logo-mall.png" alt=""/>
                       </div>
                       <div className="col-md-3 text-white_space">
                           <p style={{marginBottom:"0px"}}>Đăng ký nhận thông tin của Memall</p>
                           <p>Đừng bỏ lỡ hàng ngàn sản phẩm và chương trình siêu hấp dẫn</p>
                       </div>
                    </div>
                    <div className="col-md-6 nopadding input-register">
                        <input className="input-search" type="text" placeholder="Tìm sản phẩm thương hiệu" size="50"/> <span className="div-white-space">Tìm kiếm</span>
                    </div>
                </div>
            </div>

        )
    }
}

export default Main;