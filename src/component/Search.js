import React, {Component} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel, faUser, faCaretDown, faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
library.add(faStroopwafel,faUser, faCaretDown, faShoppingBasket)
class Search extends Component{
    render () {
        return (
            <div id="search">
                <div className="row">
                    <div className="col-md-2 nopadding">
                       <img className="logo" src="./../../src/public/images/download.png"/>
                    </div>
                    <div className="col-md-6 nopadding">
                           <input className="input-search" type="text" placeholder="Tìm sản phẩm thương hiệu" size="50"/> <span className="div-white-space">Tìm kiếm</span>
                    </div>
                    <div className="col-md-2 nopadding person">
                        <FontAwesomeIcon className="icon-person" icon="user"></FontAwesomeIcon>
                        <image id="img2"/>
                        <span>Đức nguyễn</span><FontAwesomeIcon className="" icon="caret-down"></FontAwesomeIcon>
                        <p>Đăng nhập bằng google.com</p>

                    </div>
                    <div className="col-md-2 nopadding">
                        <FontAwesomeIcon className="icon-person" icon="shopping-basket"></FontAwesomeIcon><p className="shopping">Giỏ hàng(0)</p>
                    </div>
                </div>
            </div>

        )
    }

}

export default Search;