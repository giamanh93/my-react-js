import React, {Component} from 'react';

class Banner extends Component{
    render() {
        return (
            <div className="banner">
                <div className="row">
                    <div className="col-md-3">

                        <img src="./../../src/public/images/1.png" alt=""/>
                        <img src="./../../src/public/images/2.png" alt=""/>
                    </div>
                    <div className="col-md-3">
                        <img src="./../../src/public/images/3.png" alt=""/>
                    </div>
                    <div className="col-md-3">
                        <img src="./../../src/public/images/4.png" alt=""/>
                        <img src="./../../src/public/images/5.png" alt=""/>
                    </div>
                    <div className="col-md-3">
                        <img src="./../../src/public/images/6.png" alt=""/>
                    </div>
                </div>

            </div>
        )
    }

}
export default Banner;