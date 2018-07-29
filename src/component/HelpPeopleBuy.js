import React, {Component} from 'react';
import Products from './../component/Products';

class HelpPeopleBuy extends Component{
    render() {
        return (
            <div>
                <div className="row row-border">
                    <div className="col-md-2"> <span>Giúp nhau giảm giá</span></div>
                    <div className="col-md-1"> <span>Laptop</span></div>
                    <div className="col-md-2"> <span>Điện thoại di động</span></div>
                    <div className="col-md-1"> <span>Phụ kiện</span></div>
                    <div className="col-md-6"> <span>Xem tất cả</span></div>
                </div>
                <Products />
            </div>

        )
    }
}
export default HelpPeopleBuy;