import React from 'react';
import './Home.css';
import banner1 from './banner1.svg'
import banner2 from './banner2.png'
import banner3 from './banner3.png'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Home(props) {

    const isCheck = useSelector(state => state.Check.isCheck)

    let isTitle = ''
    let isContent = ''

    if (isCheck){
        isTitle = 'pt-2 h4_bold text_night'
        isContent = 'pt-1 text_night'
    }else{
        isTitle = 'pt-2 h4_bold text_day'
        isContent = 'pt-1 text_day'
    }

    return (
        <div>
            <div className="banner">
                <div className="container">
                    <div className="group_home_title">
                        <h1 className={isCheck ? 'h1_title text-center text_day' : 'h1_title text-center text_night'}>CODE WITH TIENKIM</h1>
                        <p className={isCheck ? 'p_title text-center text_day' : 'p_title text-center text_night'}>Rèn luyện bản thân tốt hơn mỗi ngày</p>
                        <div className="button_start pt-2 text-center">
                            <Link className="text-white" to="/react-document/docs/dotnet">Bắt Đầu Thôi</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className={isCheck ? 'learn night_header' : 'learn day_header'}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm p-5">
                            <div className="img_home d-flex justify-content-center">
                                <img src={banner1} alt="" />
                            </div>
                            <h4 className={isTitle}>Tài liệu kỹ thuật</h4>
                            <p className={isContent}>Nơi chia sẻ các bài hướng dẫn về kĩ thuật được sử dụng nhiều trong dự án thực tế sẽ được mình tổng hợp tại đây.</p>
                        </div>
                        <div className="col-sm p-5">
                            <div className="img_home d-flex justify-content-center">
                                <img src={banner2} alt="" />
                            </div>
                            <h4 className={isTitle}>Khóa học C# cơ bản</h4>
                            <p className={isContent}>Khoá học do mình biên soạn và thiết kế nhằm giúp các bạn nắm vững kiến thức nền tảng của C# cơ bản.</p>
                        </div>
                        <div className="col-sm p-5">
                            <div className="img_home d-flex justify-content-center">
                                <img src={banner3} alt="" />
                            </div>
                            <h4 className={isTitle}>Khóa học Javascipt cơ bản</h4>
                            <p className={isContent}>Khoá học do mình biên soạn và thiết kế nhằm giúp các bạn nắm vững kiến thức nền tảng của React cơ bản.</p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;