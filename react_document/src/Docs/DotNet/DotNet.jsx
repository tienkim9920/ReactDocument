import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import img8 from '../Image/dotnet/img8.png'
import img9 from '../Image/dotnet/img9.png'
import img10 from '../Image/dotnet/img10.png'

DotNet.propTypes = {

};

function DotNet(props) {

    const isCheck = useSelector(state => state.Check.isCheck)

    // Phần này là chỉnh day/night
    const [isTitle, setisTitle] = useState('')
    const [isContent, setisContent] = useState('')
    const [h2_title, seth2_title] = useState('')
    const [h4_title, seth4_title] = useState('')
    const [text, settext] = useState('')
    const [pl_4, setpl_4] = useState('')

    useEffect(() => {

        if (isCheck) {
            setisTitle('pt-5 h1_dotnet text_night')
            setisContent('pt-3 pb-3 text_night')
            seth2_title('pt-5 pb-2 h2_dotnet text_night')
            seth4_title('pl-2 pt-5 pb-2 text_night')
            settext('pt-1 pb-1 text_night')
            setpl_4('pl-4 text_night')
        } else {
            setisTitle('pt-5 h1_dotnet text_day')
            setisContent('pt-3 pb-3 text_day')
            seth2_title('pt-5 pb-2 h2_dotnet text_day')
            seth4_title('pl-2 pt-5 pb-2 text_day')
            settext('pt-1 pb-1 text_day')
            setpl_4('pl-4 text_day')
        }

    }, [isCheck])


    // Phần này là chỉnh offset cho submenu
    const [khaiNiem, setKhaiNiem] = useState('a_submenu active_submenu')
    const [gioiThieu, setGioiThieu] = useState('')
    const [bien, setBien] = useState('')
    const [caulenh, setCauLenh] = useState('')
    const [lenhlap, setLenhLap] = useState('')
    const [method, setMethod] = useState('')
    const [array, setArray] = useState('')
    const [kythuat, setKyThuat] = useState('')

    window.addEventListener('scroll', () => {

        if (window.pageYOffset < 1200) {
            setKhaiNiem('a_submenu active_submenu')
            setGioiThieu('a_submenu')
            setBien('a_submenu')
            setCauLenh('a_submenu')
            setLenhLap('a_submenu')
            setMethod('a_submenu')
            setArray('a_submenu')
            setKyThuat('a_submenu')
        } else {
            if (window.pageYOffset < 2400) {
                setKhaiNiem('a_submenu')
                setGioiThieu('a_submenu active_submenu')
                setBien('a_submenu')
                setCauLenh('a_submenu')
                setLenhLap('a_submenu')
                setMethod('a_submenu')
                setArray('a_submenu')
                setKyThuat('a_submenu')
            } else {
                if (window.pageYOffset > 2400 && window.pageYOffset < 5200){
                    setKhaiNiem('a_submenu')
                    setGioiThieu('a_submenu')
                    setBien('a_submenu active_submenu')
                    setCauLenh('a_submenu')
                    setLenhLap('a_submenu')
                    setMethod('a_submenu')
                    setArray('a_submenu')
                    setKyThuat('a_submenu')
                }

                if (window.pageYOffset > 5200 && window.pageYOffset < 6600){
                    setKhaiNiem('a_submenu')
                    setGioiThieu('a_submenu')
                    setBien('a_submenu')
                    setCauLenh('a_submenu active_submenu')
                    setLenhLap('a_submenu')
                    setMethod('a_submenu')
                    setArray('a_submenu')
                    setKyThuat('a_submenu')
                }

                if (window.pageYOffset > 6600 && window.pageYOffset < 7500){
                    setKhaiNiem('a_submenu')
                    setGioiThieu('a_submenu')
                    setBien('a_submenu')
                    setCauLenh('a_submenu')
                    setLenhLap('a_submenu active_submenu')
                    setMethod('a_submenu')
                    setArray('a_submenu')
                    setKyThuat('a_submenu')
                }

                if (window.pageYOffset > 7500 && window.pageYOffset < 9000){
                    setKhaiNiem('a_submenu')
                    setGioiThieu('a_submenu')
                    setBien('a_submenu')
                    setCauLenh('a_submenu')
                    setLenhLap('a_submenu')
                    setMethod('a_submenu active_submenu')
                    setArray('a_submenu')
                    setKyThuat('a_submenu')
                }

                if (window.pageYOffset > 9000 && window.pageYOffset < 10500){
                    setKhaiNiem('a_submenu')
                    setGioiThieu('a_submenu')
                    setBien('a_submenu')
                    setCauLenh('a_submenu')
                    setLenhLap('a_submenu')
                    setMethod('a_submenu')
                    setArray('a_submenu active_submenu')
                    setKyThuat('a_submenu')
                }

                if (window.pageYOffset > 10500){
                    setKhaiNiem('a_submenu')
                    setGioiThieu('a_submenu')
                    setBien('a_submenu')
                    setCauLenh('a_submenu')
                    setLenhLap('a_submenu')
                    setMethod('a_submenu')
                    setArray('a_submenu')
                    setKyThuat('a_submenu active_submenu')
                }
            }
        }

    })

    return (
        <div className="grid_right">
            <div className="col_content">
                <div className="content">
                    <div className="container">
                        <h1 className={isTitle}>Tổng quan về C# cơ bản 🚀</h1>
                        <p className={isContent}>Xin chào mọi người, bên dưới là phần sơ lược tổng quan về những kiến thức cơ bản trong C#,
                        nhằm giúp các bạn có cái nhìn tổng quan về C# nha 😍. Ngoài ra các bạn có thể xem video tại
                        <a target="_blank" href="https://www.youtube.com/watch?v=GSEYNoednCY&list=PLnRJxWEhhmzrRNSlF8G7qMrwoeWKnZgCB"> Tiền Kim Study</a>.
                        </p>
                        <h4 className={h4_title}>Nội dung gồm 8 chương:</h4>
                        <ul className="pl-5 pr-5 pt-3 pb-3">
                            <li className={text}>Chương 1: Khái niệm về lập trình.</li>
                            <li className={text}>Chương 2: Giới thiệu về thuật toán.</li>
                            <li className={text}>Chương 3: Biến và các phép toán.</li>
                            <li className={text}>Chương 4: Câu lệnh chọn lựa (if else) và (switch case).</li>
                            <li className={text}>Chương 5: Câu lệnh lặp (for, while).</li>
                            <li className={text}>Chương 6: Hàm (Method).</li>
                            <li className={text}>Chương 7: Mảng một chiều (Array).</li>
                            <li className={text}>Chương 8: Một số kỹ thuật cơ bản.</li>
                        </ul>

                        <div id="khainiem">
                            <h2 className={h2_title}>1. Khái niệm về lập trình 🚀</h2>
                            <h4 className={h4_title}>Một số khái niệm về lập trình</h4>
                            <ul className="pl-5 pr-5 pt-3 pb-3">
                                <li className={text}><i style={{ color: '#00B050', fontSize: '18px' }}>Chạy chương trình: </i>Máy tính sẽ theo các lệnh
                                trong chương trình để hoạt động (còn gọi thực
                                hiện lệnh, thực thi lệnh).</li>
                                <li className={text}><i style={{ color: '#00B050', fontSize: '18px' }}>Ngôn ngữ lập trình: </i>là
                                ngôn ngữ viết mà chúng ta dùng để “nói
                                chuyện” với máy tính.</li>
                                <li className={text}><i style={{ color: '#00B050', fontSize: '18px' }}>Lập trình viên: </i>Người viết ra các
                                chương trình máy tính.</li>
                                <li className={text}><i style={{ color: '#00B050', fontSize: '18px' }}>End user: </i>người sử dụng chương trình do
                                programmer tạo ra.</li>
                            </ul>
                            <h4 className={h4_title}>Có 3 cấu trúc lệnh</h4>
                            <ul className="pl-5 pr-5 pt-3 pb-3">
                                <li className={text}><i style={{ color: '#00B050', fontSize: '18px' }}>Lệnh Tuần Tự: </i>
                                    <p className="pl-4">Các lệnh được viết trên từng dòng, lệnh nào được viết trước sẽ chạy trước.</p></li>
                                <li className={text}><i style={{ color: '#00B050', fontSize: '18px' }}>Lệnh Chọn Lựa: </i>
                                    <p className="pl-4">Khi chúng ta muốn máy tính chọn (quyết định) có thực
                                hiện một lệnh hay không, chúng ta dùng lệnh chọn lựa.</p></li>
                                <li className={text}><i style={{ color: '#00B050', fontSize: '18px' }}>Lệnh Lặp: </i>
                                    <p className="pl-4">Khi chúng ta muốn máy tính thực hiện một lệnh nhiều
                                    lần, chúng ta dùng lệnh lặp để điều khiển máy tính làm
                                việc đó.</p></li>
                            </ul>
                        </div>


                        <div id="gioithieu">
                            <h2 className={h2_title}>2. Giới thiệu về thuật toán 🚀</h2>
                            <h4 className={h4_title}>Khái niệm về thuật toán</h4>
                            <ul className="pl-5 pr-5 pt-3 pb-3">
                                <li className={text}><i style={{ color: '#00B050', fontSize: '20px' }}>Thuật toán (algorithm): </i>
                                    <p className="pl-4" style={{ fontSize: '16px' }}>Thuật toán là dãy các bước logic để giải quyết bài toán.</p></li>
                                <li className={text}>Ví dụ: <i style={{ color: '#00B050', fontSize: '20px' }}>Bài toán Đổi chỗ.</i></li>
                                <p className={pl_4}><i style={{ color: '#00B050', fontSize: '20px' }}>Cho 2 cốc nước: </i>Cốc A đựng nước cam, Cốc B đựng nước chanh. Hãy chỉ ra một số bước để Cốc A đựng nước chanh và Cốc B đựng nước cam
                                </p>
                                <img src={img8} alt="" />
                                <br />
                                <li className={text}>Thuật Toán: <i style={{ color: '#07B2F0', fontSize: '20px' }}>Đổi chỗ.</i></li>
                                <p className={pl_4}>Bước 1. <i style={{ color: '#07B2F0', fontSize: '18px' }}>[Lấy thêm cốc]. Lấy thêm 1 cốc C</i></p>
                                <p className={pl_4}>Bước 2. <i style={{ color: '#07B2F0', fontSize: '18px' }}>[A sang C]. Đổ từ cốc A sang cốc C</i></p>
                                <p className={pl_4}>Bước 3. <i style={{ color: '#07B2F0', fontSize: '18px' }}>[B sang A]. Đổ từ cốc B sang cốc A</i></p>
                                <p className={pl_4}>Bước 4. <i style={{ color: '#07B2F0', fontSize: '18px' }}>[C sang B]. Đổ từ cốc C sang cốc B</i>
                                    <br />
                                    <br />
                                    <img src={img9} alt="" style={{ width: '41.5rem'}} />
                                </p>
                            </ul>
                        </div>

                        <div id="bien">
                            <h2 className={h2_title}>3. Biến và các phép toán 🚀</h2>
                            <h4 className={h4_title}>Biến và phép gán</h4>
                            <ul className="pl-5 pr-5 pt-3 pb-3">
                                <li className={text}><i style={{ color: '#00B050', fontSize: '20px' }}>Biến (variable): </i>
                                    <p className="pl-4" style={{ fontSize: '16px' }}>
                                        Biến là 1 nơi trong bộ nhớ, dùng để lưu dữ liệu/giá trị
                                    (data/value) của chương trình.</p></li>
                                <li className={text}>Mỗi biến trong<i style={{ color: '#00B050', fontSize: '20px' }}> C# </i>có.</li>
                                <p className={pl_4}><i style={{ color: '#00B050', fontSize: '20px' }}>Tên biến</i>
                                </p>
                                <p className={pl_4}><i style={{ color: '#00B050', fontSize: '20px' }}>Kiểu của biến:</i> chỉ loại dữ liệu mà biến có thể chứa
                                (số nguyên, số thực, văn bản, ...)
                                </p>
                                <p className={pl_4}><i style={{ color: '#00B050', fontSize: '20px' }}>Cú Pháp: <i style={{ color: '#07B2F0', fontSize: '18px' }}>Type </i></i>variableName;</p>
                                <table className="table table-bordered mt-5">
                                    <thead>
                                        <tr style={{ background: '#9BBB59', color: '#fff' }}>
                                            <th scope="col">Kiểu</th>
                                            <th scope="col">Mô Tả</th>
                                            <th scope="col">Ví dụ</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className={text}>
                                            <th style={{ color: '#07B2F0' }}>int</th>
                                            <td>Số nguyên</td>
                                            <td>‐2, ‐1, 0, 1, 2</td>
                                        </tr>
                                        <tr className={text}>
                                            <th style={{ color: '#07B2F0' }}>double</th>
                                            <td>Số Thực</td>
                                            <td>7.4</td>
                                        </tr>
                                        <tr className={text}>
                                            <th style={{ color: '#07B2F0' }}>string</th>
                                            <td>Chuỗi</td>
                                            <td>"Nguyen"</td>
                                        </tr>
                                        <tr className={text}>
                                            <th style={{ color: '#07B2F0' }}>bool</th>
                                            <td>Đúng/Sai</td>
                                            <td>true, false</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </ul>
                            <h4 className={h4_title}>Các phép toán trên số nguyên</h4>
                            <ul className="pl-5 pr-5 pt-3 pb-3">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr style={{ background: '#9BBB59', color: '#fff' }}>
                                            <th scope="col">Phép Toán</th>
                                            <th scope="col">Ý Nghĩa</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className={text}>
                                            <th style={{ color: '#07B2F0' }}>+</th>
                                            <td>Cộng</td>
                                        </tr>
                                        <tr className={text}>
                                            <th style={{ color: '#07B2F0' }}>-</th>
                                            <td>Trừ</td>
                                        </tr>
                                        <tr className={text}>
                                            <th style={{ color: '#07B2F0' }}>*</th>
                                            <td>Nhân</td>
                                        </tr>
                                        <tr className={text}>
                                            <th style={{ color: '#07B2F0' }}>/</th>
                                            <td>Chia lấy phần nguyên</td>
                                        </tr>
                                        <tr className={text}>
                                            <th style={{ color: '#07B2F0' }}>%</th>
                                            <td>Chi lấy phần dư</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </ul>

                            <h4 className={h4_title}>Các phép toán so sánh</h4>
                            <ul className="pl-5 pr-5 pt-3 pb-3">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr style={{ background: '#9BBB59', color: '#fff' }}>
                                            <th scope="col">Phép Toán</th>
                                            <th scope="col">Ý Nghĩa</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className={text}>
                                            <th style={{ color: '#07B2F0' }}> {'>'} </th>
                                            <td>Lớn hơn</td>
                                        </tr>
                                        <tr className={text}>
                                            <th style={{ color: '#07B2F0' }}> {'<'}</th>
                                            <td>Nhỏ hơn</td>
                                        </tr>
                                        <tr className={text}>
                                            <th style={{ color: '#07B2F0' }}> {'>='} </th>
                                            <td>Lớn hơn hoặc bằng</td>
                                        </tr>
                                        <tr className={text}>
                                            <th style={{ color: '#07B2F0' }}> {'<='} </th>
                                            <td>Nhỏ hơn hoặc bằng</td>
                                        </tr>
                                        <tr className={text}>
                                            <th style={{ color: '#07B2F0' }}> == </th>
                                            <td>Bằng</td>
                                        </tr>
                                        <tr className={text}>
                                            <th style={{ color: '#07B2F0' }}> != </th>
                                            <td>Khác</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </ul>

                            <h4 className={h4_title}>Các phép toán kết hợp các phép so sánh</h4>
                            <ul className="pl-5 pr-5 pt-3 pb-3">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr style={{ background: '#9BBB59', color: '#fff' }}>
                                            <th scope="col">Phép Toán</th>
                                            <th scope="col">Ý Nghĩa</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className={text}>
                                            <th style={{ color: '#07B2F0' }}> {'&&'} </th>
                                            <td>Và</td>
                                        </tr>
                                        <tr className={text}>
                                            <th style={{ color: '#07B2F0' }}> {'||'}</th>
                                            <td>Hoặc</td>
                                        </tr>
                                        <tr className={text}>
                                            <th style={{ color: '#07B2F0' }}> {'!'} </th>
                                            <td>Phủ định</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </ul>

                            <h4 className={h4_title}>Các phép toán tăng, giảm</h4>
                            <ul className="pl-5 pr-5 pt-3 pb-3">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr style={{ background: '#9BBB59', color: '#fff' }}>
                                            <th scope="col">Phép Toán</th>
                                            <th scope="col">Tương đương</th>
                                            <th scope="col">Ý Nghĩa</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className={text}>
                                            <th style={{ color: '#07B2F0' }}> a++ </th>
                                            <td>a = a + 1</td>
                                            <td>Tăng 1 đơn vị</td>
                                        </tr>
                                        <tr className={text}>
                                            <th style={{ color: '#07B2F0' }}> a-- </th>
                                            <td>a = a - 1</td>
                                            <td>Giảm 1 đơn vị</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </ul>

                            <h4 className={h4_title}>Các phép toán gán kép</h4>
                            <ul className="pl-5 pr-5 pt-3 pb-3">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr style={{ background: '#9BBB59', color: '#fff' }}>
                                            <th scope="col">Phép Toán</th>
                                            <th scope="col">Tương đương</th>
                                            <th scope="col">Ý Nghĩa</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className={text}>
                                            <th style={{ color: '#07B2F0' }}> a += k </th>
                                            <td>a = a + k</td>
                                            <td>Tăng a lên k giá trị</td>
                                        </tr>
                                        <tr className={text}>
                                            <th style={{ color: '#07B2F0' }}> a ‐= k </th>
                                            <td>a = a ‐ k</td>
                                            <td>Giảm a đi k giá trị</td>
                                        </tr>
                                        <tr className={text}>
                                            <th style={{ color: '#07B2F0' }}> a *= k </th>
                                            <td>a = a * k</td>
                                            <td>Tăng a lên k lần</td>
                                        </tr>
                                        <tr className={text}>
                                            <th style={{ color: '#07B2F0' }}> a /= k </th>
                                            <td>a = a / k</td>
                                            <td>Giảm a đi k lần</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </ul>

                            <h4 className={h4_title}>Một số hàm toán học</h4>
                            <ul className="pl-5 pr-5 pt-3 pb-3">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr style={{ background: '#9BBB59', color: '#fff' }}>
                                            <th scope="col">Hàm</th>
                                            <th scope="col">Ý Nghĩa</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className={text}>
                                            <th style={{ color: '#07B2F0' }}> Math.Abs(x) </th>
                                            <td>|x|</td>
                                        </tr>
                                        <tr className={text}>
                                            <th style={{ color: '#07B2F0' }}> Math.Max(x, y) </th>
                                            <td>Giá trị lớn nhất trong 2 số x, y</td>
                                        </tr>
                                        <tr className={text}>
                                            <th style={{ color: '#07B2F0' }}> Math.Min(x, y) </th>
                                            <td>Giá trị nhỏ nhất trong 2 số x, y</td>
                                        </tr>
                                        <tr className={text}>
                                            <th style={{ color: '#07B2F0' }}> Math.Pow(x, y) </th>
                                            <td>x<sup>y</sup></td>
                                        </tr>
                                        <tr className={text}>
                                            <th style={{ color: '#07B2F0' }}> Math.Sqrt(x) </th>
                                            <td>Căn bậc 2 của x</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </ul>
                        </div>
                    
                        <div id="chonlua">
                            <h2 className={h2_title}>4. Câu lệnh chọn lựa 🚀</h2>
                            <h4 className={h4_title}>Câu lệnh chọn lựa đúng sai</h4>
                            <ul className="pl-5 pr-5 pt-3 pb-3 bg_code">
                                <div className="color_green">// Các thao tác X</div>
                                <div className="color_blue">if ( <i className="color_white"> Điều kiện </i> ) </div>
                                <div className="color_white">
                                    {'{'}
                                        <br/>
                                        <div className="pl-3 color_green">
                                            // Các thao tác A
                                        </div>
                                    {'}'}
                                </div>
                                <div className="color_blue">else </div>
                                <div className="color_white">
                                    {'{'}
                                        <br/>
                                        <div className="pl-3 color_green">
                                            // Các thao tác B
                                        </div>
                                    {'}'}
                                </div>
                            </ul>
                            <h4 className={h4_title}>Kết hợp nhiều câu lệnh chọn lựa</h4>
                            <ul className="pl-5 pr-5 pt-3 pb-3 bg_code">
                                <div className="color_green">// Các thao tác X</div>
                                <div className="color_blue">if ( <i className="color_white"> Điều kiện 1</i> ) </div>
                                <div className="color_white">
                                    {'{'}
                                        <br/>
                                        <div className="pl-3 color_green">
                                            // Các thao tác A
                                        </div>
                                    {'}'}
                                </div>
                                <div className="color_blue">else if ( <i className="color_white"> Điều kiện 2</i> )</div>
                                <div className="color_white">
                                    {'{'}
                                        <br/>
                                        <div className="pl-3 color_green">
                                            // Các thao tác B
                                        </div>
                                    {'}'}
                                </div>
                                <div className="color_blue">else if ( <i className="color_white"> Điều kiện 3</i> )</div>
                                <div className="color_white">
                                    {'{'}
                                        <br/>
                                        <div className="pl-3 color_green">
                                            // Các thao tác C
                                        </div>
                                    {'}'}
                                </div>
                                <div className="color_blue">else </div>
                                <div className="color_white">
                                    {'{'}
                                        <br/>
                                        <div className="pl-3 color_green">
                                            // Các thao tác D
                                        </div>
                                    {'}'}
                                </div>
                            </ul>
                            <h4 className={h4_title}>Câu lệnh Switch</h4>
                            <ul className="pl-5 pr-5 pt-3 pb-3 bg_code">
                                <div className="color_green">// Các thao tác X</div>
                                <div className="color_blue">switch ( <i className="color_white"> Biểu thức</i> ) </div>
                                <div className="color_white">
                                    {'{'}
                                        <br/>
                                        <div className="pl-5">
                                            <div className="color_blue">case <i className="color_white"> giáTrị1</i> : </div>
                                            <div className="color_green">// Các thao tác A</div>
                                            <div className="color_blue">break;</div>
                                        </div>
                                        <br/>
                                        <div className="pl-5">
                                            <div className="color_blue">case <i className="color_white"> giáTrị2</i> : </div>
                                            <div className="color_green">// Các thao tác B</div>
                                            <div className="color_blue">break;</div>
                                        </div>
                                        <br/>
                                        <div className="pl-5">
                                            <div className="color_blue">default <i className="color_white"></i> : </div>
                                            <div className="color_green">// Các thao tác C</div>
                                            <div className="color_blue">break;</div>
                                        </div>
                                    {'}'}
                                </div>
                            </ul>
                            <h4 className={h4_title}>Toán Tử 3 ngôi</h4>
                            <ul className="pl-5 pr-5 pt-3 pb-3 bg_code">
                                <div className="color_green">// int n = 5</div>
                                <div className="color_green">// string a = (n == 5) ? "n bằng 5" : "n không bằng 5"</div>
                                <div className="color_sea">tênBiến = ( <i className="color_blue"> Điều Kiện</i> ) 
                                <span className="color_red"> ?</span> Biểu Thức 1 <span className="color_red">:</span> Biểu Thức 2 </div>
                            </ul>
                            <ul className="pl-5 pr-5 pt-3 pb-3">
                                <li className={text}>Nếu "Điều kiện" có kết quả là true thì "tênBiến" sẽ có giá trị của "Biểu thứ 1"</li>
                                <li className={text}>Ngược lại, "tênBiến" sẽ có giá trị của "Biểu thứ 2"</li>
                            </ul>
                        </div>
                    
                        <div id="lenhlap">
                            <h2 className={h2_title}>5. Câu lệnh lặp 🚀</h2>
                            <h4 className={h4_title}>Lặp với câu lệnh while</h4>
                            <ul className="pl-5 pr-5 pt-3 pb-3">
                                <li className={text}>“Miễn điều kiện còn đúng thì sẽ tiếp tục thực hiện các thao tác A”
                                </li>
                                <li className={text}>Điều kiện được kiểm tra trước rồi mới xem xét có thực hiện tiếp các thao tác A hay không
                                </li>
                                <li className={text}>Sau khi thực hiện các thao tác A thì sẽ quay lại kiểm tra điều kiện, quá trình này lặp lại nhiều
                                    lần cho đến khi điều kiện sai
                                </li>
                            </ul>
                            <ul className="pl-5 pr-5 pt-3 pb-3 bg_code">
                                <div className="color_blue">int <span className="color_white"> x = 1;</span> <span className="color_green pl-3"> // Khởi tạo</span></div>
                                <br/>
                                <div className="color_blue">while ( <span className="color_white"> x {'<='} 10 </span> )<span className="color_green pl-3"> // Kiểm tra điều kiện</span></div>
                                <div className="color_white">
                                    {'{'}
                                    <div className="color_white pl-5">
                                        Console.WriteLine(x);
                                        <br/>
                                        x++; <span className="color_green pl-3"> // Cập nhật biến điều kiện. Nếu thỏa mản thì sẽ chạy lại vòng lặp không thì kết thúc.</span>
                                    </div>
                                    {'}'}
                                </div>
                            </ul>
                            <h4 className={h4_title}>Lặp với câu lệnh for</h4>
                            <ul className="pl-5 pr-5 pt-3 pb-3">
                                <li className={text}>Hãy viết chương trình in ra màn hình
                                    các số từ 1 đến 4 sử dụng lệnh for. Sau đó phân
                                    tích từng bước chạy của chương trình
                                </li>
                            </ul>
                            <ul className="pl-5 pr-5 pt-3 pb-3 bg_code">
                                <div className="color_blue">for ( <span className="color_white"> <span className="color_sea">int</span> i {'='} 1; i {'<='} 4; i++ </span> )
                                <span className="color_green pl-3"> // for
                                (các khởi tạo; kiểm tra điều kiện; thay đổi cuối mỗi lần lặp)</span></div>
                                <div className="color_white">
                                    {'{'}
                                    <div className="color_white pl-5">
                                        Console.WriteLine(x);
                                    </div>
                                    {'}'}
                                </div>
                            </ul>
                        </div>

                        <div id="method">
                            <h2 className={h2_title}>6. Hàm (Method) 🚀</h2>
                            <h4 className={h4_title}>Nhận xét:</h4>
                            <ul className="pl-5 pr-5 pt-3 pb-3">
                                <li className={text}><span className="color_red" style={{ fontSize: '20px'}}>
                                Khi truyền theo kiểu tham trị
                                </span> thì một bản sao của đối số lúc gọi hàm sẽ được gán vào tham số của hàm. Do đó đối số được truyền
                                    hoàn toàn không thay đổi giá trị sau lời gọi hàm.
                                </li>
                                <li className={text}><span className="color_red" style={{ fontSize: '20px'}}>
                                Khi truyền theo kiểu tham chiếu (dùng ref hoặc out)
                                </span> thì đối số được truyền và tham số của hàm là một. Do đó giá trị của đối số sẽ
                                thay đổi nếu giá trị tham số bị đổi trong hàm.
                                </li>
                                <li className={text}><span className="color_red" style={{ fontSize: '20px'}}>
                                Khi truyền theo tham chiếu sử dụng ref
                                </span> thì ta phải gán giá trị ban đầu cho đối tượng trước
                                khi truyền vào hàm. Ngược lại dùng out thì
                                không cần thiết.
                                </li>
                            </ul>
                            <h4 className={h4_title}>THAM SỐ LÀ THAM TRỊ</h4>
                            <ul className="pl-5 pr-5 pt-3 pb-3">
                                <li className={text}><span className="color_green" style={{ fontSize: '20px'}}>
                                Tình huống 1:
                                </span> Hãy viết hàm tăng giá trị của biến số nguyên nhập vào 1 đơn vị.
                                </li>
                            </ul>
                            <ul className="pl-5 pr-5 pt-3 pb-3 bg_code">
                                <div className="color_blue">static void <span className="color_sea">TangMotDonVi ( <span className="color_white">int x</span> )</span></div>
                                <div className="color_white">
                                    {'{'}
                                    <div className="color_white pl-5">
                                        x = x + 1;
                                    </div>
                                    {'}'}
                                </div>
                                <div className="color_blue">static void Main ( <span className="color_white"> string[] args </span> )</div>
                                <div className="color_white">
                                    {'{'}
                                    <div className="color_white pl-5">
                                        int a = 0;
                                        <br/>
                                        <span className="color_sea">TangMotDonVi(a);</span>
                                        <br/>
                                        Console.WriteLine(a);
                                    </div>
                                    {'}'}
                                </div>
                            </ul>
                            <h4 className={h4_title}>TRUYỀN THEO THAM CHIẾU</h4>
                            <ul className="pl-5 pr-5 pt-3 pb-3">
                                <li className={text}><span className="color_green" style={{ fontSize: '20px'}}>
                                Tình huống 2:
                                </span> Hãy viết 1 hàm tăng giá trị của biến số nguyên nhập vào 1 đơn vị với <span className="color_red">ref</span>.
                                </li>
                            </ul>
                            <ul className="pl-5 pr-5 pt-3 pb-3 bg_code">
                                <div className="color_blue">static void <span className="color_sea">TangMotDonVi ( <span className="color_red">ref </span> <span className="color_white">int x</span> )</span></div>
                                <div className="color_white">
                                    {'{'}
                                    <div className="color_white pl-5">
                                        x = x + 1;
                                    </div>
                                    {'}'}
                                </div>
                                <div className="color_blue">static void Main ( <span className="color_white"> string[] args </span> )</div>
                                <div className="color_white">
                                    {'{'}
                                    <div className="color_white pl-5">
                                        int a = 0;
                                        <br/>
                                        <span className="color_sea">TangMotDonVi(<span className="color_red">ref </span> a);</span>
                                        <br/>
                                        Console.WriteLine(a);
                                    </div>
                                    {'}'}
                                </div>
                            </ul>
                            <h4 className={h4_title}>TRUYỀN THEO THAM CHIẾU</h4>
                            <ul className="pl-5 pr-5 pt-3 pb-3">
                                <li className={text}><span className="color_green" style={{ fontSize: '20px'}}>
                                Tình huống 3:
                                </span> Hãy viết 1 hàm tăng giá trị của biến số nguyên nhập vào 1 đơn vị với <span className="color_red">out</span>.
                                </li>
                            </ul>
                            <ul className="pl-5 pr-5 pt-3 pb-3 bg_code">
                                <div className="color_blue">static void <span className="color_sea">TangMotDonVi ( <span className="color_red">out </span> <span className="color_white">int x</span> )</span></div>
                                <div className="color_white">
                                    {'{'}
                                    <div className="color_white pl-5">
                                        x = 0;
                                        <br/>
                                        x = x + 1;
                                    </div>
                                    {'}'}
                                </div>
                                <div className="color_blue">static void Main ( <span className="color_white"> string[] args </span> )</div>
                                <div className="color_white">
                                    {'{'}
                                    <div className="color_white pl-5">
                                        int a = 0;
                                        <br/>
                                        <span className="color_sea">TangMotDonVi(<span className="color_red">out </span> a);</span>
                                        <br/>
                                        Console.WriteLine(a);
                                    </div>
                                    {'}'}
                                </div>
                            </ul>
                        </div>

                        <div id="array">
                            <h2 className={h2_title}>7. Mảng 1 chiều (Array) 🚀</h2>
                            <h4 className={h4_title}>Khái niệm:</h4>
                            <ul className="pl-5 pr-5 pt-3 pb-3">
                                <li className={text}><span className="color_green" style={{ fontSize: '20px'}}>
                                Mảng 1 chiều
                                </span> là dùng để biểu diễn một dãy các biến có cùng kiểu dữ liệu.
                                </li>
                                <li className={text}><span className="color_green" style={{ fontSize: '20px'}}>
                                Khai báo mảng: 
                                </span> <span className="color_sea" style={{ fontSize: '18px'}}>type[] arrayName;</span> 
                                </li>
                                <li className={text}><span className="color_green" style={{ fontSize: '20px'}}>
                                Ví dụ: 
                                </span> <span className="color_sea" style={{ fontSize: '18px'}}>int[] a;</span> 
                                </li>
                                <li className={text}><span className="color_green" style={{ fontSize: '20px'}}>
                                Tạo mảng có n phần tử:
                                </span> <span className="color_sea" style={{ fontSize: '18px'}}>type arrayName = new type[n];</span> 
                                <span className="color_gray pl-3">// Ví dụ: int array = new int[n];</span>
                                </li>
                            </ul>
                            <h4 className={h4_title}>Khai báo mảng gồm 5 phần tử</h4>
                            <ul className="pl-5 pr-5 pt-3 pb-3 bg_code">
                                <div className="color_white"><span className="color_red">int[] </span>a = new <span className="color_sea">int[] {'{10, 20, 30, 40, 50}'}</span>;</div>
                            </ul>
                            <ul className="pt-2 pl-5 pr-5 pt-3 pb-3">
                            <table className="table table-bordered">
                                    <thead>
                                        <tr style={{ color: '#07B2F0' }}>
                                            <th scope="col" style={{ color: '#07B2F0' }}>Chỉ số</th>
                                            <th scope="col">0</th>
                                            <th scope="col">1</th>
                                            <th scope="col">2</th>
                                            <th scope="col">3</th>
                                            <th scope="col">4</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className={text}>
                                            <th style={{ color: '#07B2F0' }}>Phần tử</th>
                                            <td style={{ color: '#07B2F0' }}>10</td>
                                            <td style={{ color: '#07B2F0' }}>20</td>
                                            <td style={{ color: '#07B2F0' }}>30</td>
                                            <td style={{ color: '#07B2F0' }}>40</td>
                                            <td style={{ color: '#07B2F0' }}>50</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <li className={text}>Các phần tử trong mảng được truy xuất thông qua chỉ số</li>
                                <li className={text}>Chỉ số mảng được bắt đầu từ 0 và kết thúc n‐1</li>
                                <li className={text}>Cú pháp: <span className="color_sea">arrayName[index]</span></li>
                                <li className={text}>Hợp lệ: <span className="color_sea">A[0]</span>, <span className="color_sea">A[3]</span> ...</li>
                            </ul>
                            <h4 className={h4_title}>Nhập mảng:</h4>
                            <ul className="pl-5 pr-5 pt-3 pb-3 bg_code">
                                <div className="color_blue">
                                    Console.Write(<span className="color_white">“Nhap so luong phan tu n: ”</span>);
                                </div>
                                <div className="color_white">
                                    <span className="color_sea">int</span> n = <span className="color_sea">int</span>.Parse( <span className="color_blue">Console.ReadLine()</span> );
                                </div>
                                <div className="color_white">
                                    <span className="color_sea">int[]</span> A = <span className="color_sea">new int[n]</span>
                                </div>
                                <div className="color_blue">
                                    { 'for ('}<span className="color_sea">int</span> { 'i = 0; i < A.Length; i++)' }
                                    <br/>
                                    {'{'}
                                    <div className="color_blue pl-4">
                                    Console.Write(<span className="color_white">“Nhap phan tu thu {'{0}'}: ”, i</span>);
                                    </div>
                                    <div className="color_white pl-4">
                                    A[i] = <span className="color_sea">int</span>.Parse(<span className="color_blue">Console.ReadLine()</span>);
                                    </div>
                                    {'}'}
                                </div>
                            </ul>
                            <h4 className={h4_title}>Xuất mảng:</h4>
                            <ul className="pl-5 pr-5 pt-3 pb-3 bg_code">
                                <div className="color_blue">
                                    Console.Write(<span className="color_white">“Mang A: ”</span>);
                                </div>
                                
                                <div className="color_blue">
                                    { 'for ('}<span className="color_sea">int</span> { 'i = 0; i < A.Length; i++)' }
                                    <br/>
                                    {'{'}
                                    <div className="color_blue pl-4">
                                    Console.WriteLine(<span className="color_white">“Phan tu thu {'{0}'}: {'{1}'}”, i, A[i]</span>);
                                    </div>
                                    <div className="color_white pl-4">
                                    A[i] = <span className="color_sea">int</span>.Parse(<span className="color_blue">Console.ReadLine()</span>);
                                    </div>
                                    {'}'}
                                </div>
                            </ul>
                        </div>
                    
                        <div id="kythuat">
                        <h2 className={h2_title}>8. Một số kỹ thuật cơ bản 🚀</h2>
                        <h4 className={h4_title}>LinearSearch:</h4>
                        <ul className="pl-5 pr-5 pt-3 pb-3 bg_code">
                            <div className="color_sea">
                                int <span className="color_red">LinearSearch <span className="color_white">( </span></span>int <span className="color_white">a[], </span> int <span className="color_white">x </span><span className="color_white">) </span>
                            </div>
                            
                            <div className="color_blue">
                                {'{'}
                                <br/>
                                <div className="pl-5">
                                    { 'for ('}<span className="color_sea">int</span> { 'i = 0; i < a.Length; i++)' }
                                    <br/>
                                    {'{'}
                                    <div className="color_blue pl-3">
                                        if (a[i] == x)
                                        <div className="color_white pl-4">
                                            return i;
                                        </div>
                                    </div>
                                    {'}'}
                                    <br/>
                                    <span className="color_sea">return -1;</span>
                                </div>
                                {'}'}
                            </div>
                        </ul>
                        <h4 className={h4_title}>Hoán Vị:</h4>
                        <ul className="pl-5 pr-5 pt-3 pb-3 bg_code">
                            <div className="color_sea">
                                void <span className="color_red">swap <span className="color_white">( </span></span>int <span className="color_white">x, </span> int <span className="color_white">y </span><span className="color_white">) </span>
                            </div>
                            
                            <div className="color_white">
                                {'{'}
                                <br/>
                                <div className="pl-5">
                                    <span className="color_sea">int</span> temp;
                                    <br/>
                                    temp = x;
                                    <br/>
                                    x = y;
                                    <br/>
                                    y = temp;
                                </div>
                                {'}'}
                            </div>
                        </ul>
                        <h4 className={h4_title}>InterchangeSort:</h4>
                        <ul className="pl-5 pr-5 pt-3 pb-3 bg_code">
                            <div className="color_sea">
                                void <span className="color_red">InterchangeSort <span className="color_white">( </span></span>int <span className="color_white">a[], </span> int <span className="color_white">n </span><span className="color_white">) </span>
                            </div>
                            
                            <div className="color_blue">
                                {'{'}
                                <br/>
                                <div className="pl-5">
                                    { 'for ( '}<span className="color_sea">int </span> { 'i = 0; i < a.Length - 1; i++ )' }
                                    <br/>
                                    {'{'}
                                    <div className="color_blue pl-3">
                                        { 'for ( '}<span className="color_sea">int </span> { 'j = i + 1; j < a.Length; j++ )' }
                                        <br/>
                                        {'{'}
                                        <br/>
                                        <div className="color_blue pl-3">
                                            {'if (a[j] < a[i])'} 
                                            <div className="color_red pl-4">
                                                swap<span className="color_white">(a[i],a[j]);</span>
                                            </div>
                                        </div>
                                        {'}'}
                                    </div>
                                    {'}'}
                                    <br/>
                                </div>
                                {'}'}
                            </div>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
            <div className="col_submenu">
                <ul className="ul_submenu p-4">
                    <li className="li_submenu"><a className={khaiNiem} href="#khainiem">1. Khái niệm 🚀</a></li>
                    <li className="li_submenu"><a className={gioiThieu} href="#gioithieu">2. Giới thiệu thuật toán 🚀</a></li>
                    <li className="li_submenu"><a className={bien} href="#bien">3. Biến và phép toán 🚀</a></li>
                    <li className="li_submenu"><a className={caulenh} href="#chonlua">4. If else 🚀</a></li>
                    <li className="li_submenu"><a className={lenhlap} href="#lenhlap">5. for while🚀</a></li>
                    <li className="li_submenu"><a className={method} href="#method">6. Hàm (Method)🚀</a></li>
                    <li className="li_submenu"><a className={array} href="#array">7. Mảng (Array)🚀</a></li>
                    <li className="li_submenu"><a className={kythuat} href="#kythuat">8. Kỹ thuật cơ bản (Array)🚀</a></li>
                </ul>
            </div>
        </div>
    );
}

export default DotNet;