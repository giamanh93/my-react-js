import React, {Component} from 'react';

class Banner extends Component{
    render() {
        return (
            <div className="banner">
                <div className="row">
                    <div className="col-md-3 banner-padding">

                        <img src="./../../src/public/images/1.png" alt=""/>
                        <img src="./../../src/public/images/2.png" className="img-margin-top" alt=""/>
                    </div>
                    <div className="col-md-3 banner-padding">
                        <img src="./../../src/public/images/3.png" alt=""/>
                    </div>
                    <div className="col-md-3 banner-padding">
                        <img src="./../../src/public/images/4.png" alt=""/>
                        <img src="./../../src/public/images/5.png" className="img-margin-top" alt=""/>
                    </div>
                    <div className="col-md-3 nopadding">
                        <img className="padding--left" src="./../../src/public/images/6.png" alt=""/>
                    </div>
                </div>

            </div>
        )
    }

}
export default Banner;