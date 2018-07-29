import React, {Component} from 'react';
import Products from './../component/Products';

class FlastSale extends Component{
    render () {
        return (
            <div>
                <div className="row row-border">
                    <div className="col-md-2"> <span>Flat Sale</span></div>
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
export default FlastSale;