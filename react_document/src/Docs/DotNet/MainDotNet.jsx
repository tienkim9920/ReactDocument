import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './DotNet.css'
import { useSelector } from 'react-redux';

import img1 from '../Image/dotnet/img1.png'
import img2 from '../Image/dotnet/img2.png'
import img3 from '../Image/dotnet/img3.png'
import img4 from '../Image/dotnet/img4.png'
import img5 from '../Image/dotnet/img5.png'
import img6 from '../Image/dotnet/img6.png'
import img7 from '../Image/dotnet/img7.png'

MainDotNet.propTypes = {

};

function MainDotNet(props) {

    const isCheck = useSelector(state => state.Check.isCheck)

    // Phần này là chỉnh day/night
    const [isTitle, setisTitle] = useState('')
    const [isContent, setisContent] = useState('')
    const [h2_title, seth2_title] = useState('')
    const [h4_title, seth4_title] = useState('')
    const [text, settext] = useState('')

    useEffect(() => {

        if (isCheck) {
            setisTitle('pt-5 h1_dotnet text_night')
            setisContent('pt-3 pb-3 text_night')
            seth2_title('pt-5 pb-2 h2_dotnet text_night')
            seth4_title('pl-2 pt-5 pb-2 text_night')
            settext('pt-1 pb-1 text_night')
        } else {
            setisTitle('pt-5 h1_dotnet text_day')
            setisContent('pt-3 pb-3 text_day')
            seth2_title('pt-5 pb-2 h2_dotnet text_day')
            seth4_title('pl-2 pt-5 pb-2 text_day')
            settext('pt-1 pb-1 text_day')
        }

    }, [isCheck])

    
    // Phần này là chỉnh offset cho submenu
    const [heightInstall, setHeightInstall] = useState('')
    const [heightCreate, setHeightCreate] = useState('')
    const [heightRun, setHeightRun] = useState('')

    window.addEventListener('scroll', () => {

        if (window.pageYOffset < 1200){
            setHeightInstall('a_submenu active_submenu')
            setHeightCreate('a_submenu')
            setHeightRun('a_submenu')
        }else{
            setHeightInstall('a_submenu')

            if (window.pageYOffset < 3900){
                setHeightInstall('a_submenu')
                setHeightCreate('a_submenu active_submenu')
                setHeightRun('a_submenu')
            }else{
                setHeightInstall('a_submenu')
                setHeightCreate('a_submenu')
                setHeightRun('a_submenu active_submenu')
            }
        }

    })

    return (
        <div className="grid_right">
            <div className="col_content">
                <div className="content">
                    <div className="container">
                    <h1 className={isTitle}>Cài đặt môi trường làm việc cho khoá học C# Cơ Bản 🚀</h1>
                    <p className={isContent} >Tài liệu này sẽ giúp các bạn cài đặt môi trường làm việc để sẵn sàng cho khoá học C# dành cho người mới bắt đầu tại
                    <a target="_blank" href="https://www.youtube.com/watch?v=GSEYNoednCY&list=PLnRJxWEhhmzrRNSlF8G7qMrwoeWKnZgCB"> Tiền Kim Study</a>.</p>
                    
                    <div id="install">
                        <h2 className={h2_title}>1. Tải và cài đặt Visual Studio 2019 🚀</h2>
                        <ul className="pl-5 pr-5 pt-3 pb-3">
                            <li className={text}>Vào website VS2019: <a target="_blank" href="https://visualstudio.microsoft.com/downloads/">https://visualstudio.microsoft.com/downloads/</a></li>
                            <li className={text}>Click Download Community để tải phần mềm về.</li>
                            <li className={text}>Tiến hành cài đặt như hướng dẫn</li>
                            <li className={text}>Khi chạy lần đầu VS2019 sẽ có giao diện như sau:</li>
                        </ul>
                        <img className="img_content" src={img1} alt="" />
                    </div>
                    <h2 id="create" className={h2_title}>2. Tạo Project đầu tiên - Hello World 🚀</h2>
                    <ul className="pl-5 pr-5 pt-3 pb-3">
                        <li className={text}>Bước 1: Chọn Create a new project.</li>
                    </ul>
                    <img className="img_content" src={img2} alt="" />
                    <ul className="pl-5 pr-5 pt-3 pb-3">
                        <li className={text}>Bước 2: Tìm kiếm Console App (.NET Framework) như hình.</li>
                    </ul>
                    <img className="img_content" src={img3} alt="" />
                    <h4 className={h4_title}>Bạn sẽ phải chọn những thuộc tính như sau:</h4>
                    <ul className="pl-5 pr-5 pt-3 pb-3">
                        <li className={text}>Project Name: tên dự án, đây cũng là tên mặc định của chương trình về sau.</li>
                        <li className={text}>Location: thư mục chứa tất cả file của dự án.</li>
                        <li className={text}>Solution name: solution cho phép quản lý nhiều dự án có liên quan (và sử dụng chung code với nhau).</li>
                        <li className={text}>Framework: lựa chọn phiên bản của .NET
                        framework; nếu lựa chọn phiên bản nào, khi triển khai ứng dụng đòi hỏi trên hệ
                thống của người dùng phải cài đặt .NET framework phiên bản tương đương hoặc caohơn.</li>
                    </ul>
                    <img className="img_content" src={img4} alt="" />
                    <h4 className={h4_title}>Tạo thành công và cửa sổ làm việc sẽ hiện ra.</h4>
                    <img className="img_content" src={img5} alt="" />
                    <h2 id="run" className={h2_title}>3. Chạy chương trình 🚀</h2>
                    <h4 className={h4_title}>Biên dịch và chạy debug.</h4>
                    <ul className="pl-5 pr-5 pt-3 pb-3">
                        <li className={text}>Dịch và chạy chương trình ở chế độ debug: F5.</li>
                        <li className={text}>Dịch và chạy chương trình (không debug): Ctrl + F5.</li>
                        <li className={text}>Cũng có thể gọi các lệnh này qua menu Debug {'=>'} Start Debugging hoặc Start Without Debugging.</li>
                    </ul>
                    <img className="img_content" src={img6} alt="" />
                    <h4 className={h4_title}>Kết quả chạy chương trình.</h4>
                    <img className="img_content" src={img7} alt="" />
                </div>
            </div>
            </div>
            <div className="col_submenu">
                <ul className="ul_submenu p-4">
                    <li className="li_submenu"><a className={heightInstall} href="#install">1. Tải và cài đặt VS2019 🚀</a></li>
                    <li className="li_submenu"><a className={heightCreate} href="#create">2. Tạo Project đầu tiên 🚀</a></li>
                    <li className="li_submenu"><a className={heightRun} href="#run">3. Chạy chương trình 🚀</a></li>
                </ul>
            </div>
        </div>
    );
}

export default MainDotNet;