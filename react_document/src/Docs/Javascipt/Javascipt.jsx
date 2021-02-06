import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

Javascipt.propTypes = {

};

function Javascipt(props) {

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
    const [gioiThieu, setGioiThieu] = useState('')
    const [functionJS, setfunctionJS] = useState('')
    const [number, setnumber] = useState('')
    const [string, setString] = useState('')
    const [boolean, setBoolean] = useState('')
    const [object, setObject] = useState('')
    const [array, setArray] = useState('')
    const [conditional, setConditional] = useState('')
    const [switchJS, setSwitch] = useState('')
    const [timeout, setTimeout] = useState('')
    const [interval, setInterval] = useState('')
    const [promise, setPromise] = useState('')
    const [awaitJS, setWait] = useState('')


    window.addEventListener('scroll', () => {

        if (window.pageYOffset < 1000) {
            setGioiThieu('a_submenu active_submenu')
            setfunctionJS('a_submenu')
            setnumber('a_submenu')
            setString('a_submenu')
            setBoolean('a_submenu')
            setObject('a_submenu')
            setArray('a_submenu')
            setConditional('a_submenu')
            setSwitch('a_submenu')
            setTimeout('a_submenu')
            setInterval('a_submenu')
            setPromise('a_submenu')
            setWait('a_submenu')
        } else {
            if (window.pageYOffset > 1000 && window.pageYOffset < 2000) {
                setGioiThieu('a_submenu')
                setfunctionJS('a_submenu active_submenu')
                setnumber('a_submenu')
                setString('a_submenu')
                setBoolean('a_submenu')
                setObject('a_submenu')
                setArray('a_submenu')
                setConditional('a_submenu')
                setSwitch('a_submenu')
                setTimeout('a_submenu')
                setInterval('a_submenu')
                setPromise('a_submenu')
                setWait('a_submenu')
            }

            if (window.pageYOffset > 2000 && window.pageYOffset < 2800) {
                setGioiThieu('a_submenu')
                setfunctionJS('a_submenu')
                setnumber('a_submenu active_submenu')
                setString('a_submenu')
                setBoolean('a_submenu')
                setObject('a_submenu')
                setArray('a_submenu')
                setConditional('a_submenu')
                setSwitch('a_submenu')
                setTimeout('a_submenu')
                setInterval('a_submenu')
                setPromise('a_submenu')
                setWait('a_submenu')
            }

            if (window.pageYOffset > 2800 && window.pageYOffset < 3500) {
                setGioiThieu('a_submenu')
                setfunctionJS('a_submenu')
                setnumber('a_submenu')
                setString('a_submenu active_submenu')
                setBoolean('a_submenu')
                setObject('a_submenu')
                setArray('a_submenu')
                setConditional('a_submenu')
                setSwitch('a_submenu')
                setTimeout('a_submenu')
                setInterval('a_submenu')
                setPromise('a_submenu')
                setWait('a_submenu')
            }

            if (window.pageYOffset > 3500 && window.pageYOffset < 4000) {
                setGioiThieu('a_submenu')
                setfunctionJS('a_submenu')
                setnumber('a_submenu')
                setString('a_submenu')
                setBoolean('a_submenu active_submenu')
                setObject('a_submenu')
                setArray('a_submenu')
                setConditional('a_submenu')
                setSwitch('a_submenu')
                setTimeout('a_submenu')
                setInterval('a_submenu')
                setPromise('a_submenu')
                setWait('a_submenu')
            }

            if (window.pageYOffset > 4000 && window.pageYOffset < 4800) {
                setGioiThieu('a_submenu')
                setfunctionJS('a_submenu')
                setnumber('a_submenu')
                setString('a_submenu')
                setBoolean('a_submenu')
                setObject('a_submenu active_submenu')
                setArray('a_submenu')
                setConditional('a_submenu')
                setSwitch('a_submenu')
                setTimeout('a_submenu')
                setInterval('a_submenu')
                setPromise('a_submenu')
                setWait('a_submenu')
            }

            if (window.pageYOffset > 4800 && window.pageYOffset < 5800) {
                setGioiThieu('a_submenu')
                setfunctionJS('a_submenu')
                setnumber('a_submenu')
                setString('a_submenu')
                setBoolean('a_submenu')
                setObject('a_submenu')
                setArray('a_submenu active_submenu')
                setConditional('a_submenu')
                setSwitch('a_submenu')
                setTimeout('a_submenu')
                setInterval('a_submenu')
                setPromise('a_submenu')
                setWait('a_submenu')
            }

            if (window.pageYOffset > 5800 && window.pageYOffset < 6600) {
                setGioiThieu('a_submenu')
                setfunctionJS('a_submenu')
                setnumber('a_submenu')
                setString('a_submenu')
                setBoolean('a_submenu')
                setObject('a_submenu')
                setArray('a_submenu')
                setConditional('a_submenu active_submenu')
                setSwitch('a_submenu')
                setTimeout('a_submenu')
                setInterval('a_submenu')
                setPromise('a_submenu')
                setWait('a_submenu')
            }

            if (window.pageYOffset > 6600 && window.pageYOffset < 7200) {
                setGioiThieu('a_submenu')
                setfunctionJS('a_submenu')
                setnumber('a_submenu')
                setString('a_submenu')
                setBoolean('a_submenu')
                setObject('a_submenu')
                setArray('a_submenu')
                setConditional('a_submenu')
                setSwitch('a_submenu active_submenu')
                setTimeout('a_submenu')
                setInterval('a_submenu')
                setPromise('a_submenu')
                setWait('a_submenu')
            }

            if (window.pageYOffset > 7200 && window.pageYOffset < 7300) {
                setGioiThieu('a_submenu')
                setfunctionJS('a_submenu')
                setnumber('a_submenu')
                setString('a_submenu')
                setBoolean('a_submenu')
                setObject('a_submenu')
                setArray('a_submenu')
                setConditional('a_submenu')
                setSwitch('a_submenu')
                setTimeout('a_submenu active_submenu')
                setInterval('a_submenu')
                setPromise('a_submenu')
                setWait('a_submenu')
            }

            if (window.pageYOffset > 7300 && window.pageYOffset < 7400) {
                setGioiThieu('a_submenu')
                setfunctionJS('a_submenu')
                setnumber('a_submenu')
                setString('a_submenu')
                setBoolean('a_submenu')
                setObject('a_submenu')
                setArray('a_submenu')
                setConditional('a_submenu')
                setSwitch('a_submenu')
                setTimeout('a_submenu')
                setInterval('a_submenu active_submenu')
                setPromise('a_submenu')
                setWait('a_submenu')
            }

            if (window.pageYOffset > 7400 && window.pageYOffset < 8100) {
                setGioiThieu('a_submenu')
                setfunctionJS('a_submenu')
                setnumber('a_submenu')
                setString('a_submenu')
                setBoolean('a_submenu')
                setObject('a_submenu')
                setArray('a_submenu')
                setConditional('a_submenu')
                setSwitch('a_submenu')
                setTimeout('a_submenu')
                setInterval('a_submenu')
                setPromise('a_submenu active_submenu')
                setWait('a_submenu')
            }

            if (window.pageYOffset > 8100 && window.pageYOffset < 8400) {
                setGioiThieu('a_submenu')
                setfunctionJS('a_submenu')
                setnumber('a_submenu')
                setString('a_submenu')
                setBoolean('a_submenu')
                setObject('a_submenu')
                setArray('a_submenu')
                setConditional('a_submenu')
                setSwitch('a_submenu')
                setTimeout('a_submenu')
                setInterval('a_submenu')
                setPromise('a_submenu')
                setWait('a_submenu active_submenu')
            }

        }

    })

    return (
        <div className="grid_right">
            <div className="col_content">
                <div className="content">
                    <div className="container">
                        <h1 className={isTitle}>Tổng quan về Javascript 🚀</h1>
                        <p className={isContent} >Xin chào mọi người, bên dưới là phần sơ lược tổng quan về những kiến thức cơ bản trong Javascript,
                        nhằm giúp các bạn có cái nhìn tổng quan về Javascript nha 😍</p>
                        <h4 className={h4_title}>Nội dung gồm 13 phần:</h4>
                        <ul className="pl-5 pr-5 pt-3 pb-3">
                            <li className={text}>1. JS là gì</li>
                            <li className={text}>2. Function trong JS</li>
                            <li className={text}>3. Number</li>
                            <li className={text}>4. String</li>
                            <li className={text}>5. Boolean</li>
                            <li className={text}>6. Object</li>
                            <li className={text}>7. Array</li>
                            <li className={text}>8. Conditional</li>
                            <li className={text}>9. Switch</li>
                            <li className={text}>10. setTimeout</li>
                            <li className={text}>11. setInterval</li>
                            <li className={text}>12. Promise</li>
                            <li className={text}>13. Async / Await</li>
                        </ul>

                        <div id="gioiThieuJS">
                            <h2 className={h2_title}>1. JS là gì 🚀</h2>
                            <p>Ngôn ngữ lập trình mà trình duyệt web có thể hiểu và thực thi ngay trên trình duyệt.
                            Hiện nay thì Javascript còn thể chạy được ở phía server nhờ có NodeJS và ở phía client nhờ có AngularJS, ReactJS, VueJS,... .</p>
                        </div>

                        <div id="function">
                            <h2 className={h2_title}>2. Function trong JS 🚀</h2>
                            <h4 className={h4_title}>Function declaration</h4>
                            <ul className="pl-5 pr-5 pt-3 pb-3 bg_code font_family">
                                <div className="color_blue">
                                    <span className="font_family">function</span> <span className="color_green">add</span> <span className="color_white"> (a, b) {'{'}</span>
                                </div>
                                <div className="color_blue">
                                    <div className="color_green pl-3">
                                        // Make sure params are valid
                                </div>
                                    <div className="color_blue pl-3">
                                        <span className="font_family">if</span> <span className="color_white">{'(a < 0 || b < 0)'}</span> <span className="font_family">return</span> <span className="color_white">0 ;</span>
                                    </div>
                                    <br />
                                    <div className="color_green pl-3">
                                        // Calculate and return the result
                                </div>
                                    <div className="color_blue pl-3">
                                        return <span className="color_white">a + b;</span>
                                    </div>

                                    {'}'}
                                </div>
                            </ul>

                            <h4 className={h4_title}>Function expression</h4>
                            <ul className="pl-5 pr-5 pt-3 pb-3 bg_code font_family">
                                <div className="color_blue">
                                    <span className="color_blue">const </span>  <span className="color_green">add</span><span className="color_white"> =</span> <span className="font_family">function</span> <span className="color_white"> (a, b) {'{'}</span>
                                </div>
                                <div className="color_blue">
                                    <div className="color_green pl-3">
                                        // Make sure params are valid
                                </div>
                                    <div className="color_blue pl-3">
                                        <span className="font_family">if</span> <span className="color_white">{'(a < 0 || b < 0)'}</span> <span className="font_family">return</span> <span className="color_white">0 ;</span>
                                    </div>
                                    <br />
                                    <div className="color_green pl-3">
                                        // Calculate and return the result
                                </div>
                                    <div className="color_blue pl-3">
                                        return <span className="color_white">a + b;</span>
                                    </div>

                                    {'}'}
                                </div>
                            </ul>

                            <h4 className={h4_title}>Arrow Function</h4>
                            <ul className="pl-5 pr-5 pt-3 pb-3 bg_code font_family">
                                <div className="color_blue">
                                    <span className="color_blue">const </span>  <span className="color_green">add</span><span className="color_white"> =</span> <span className="color_white"> (a, b) {'{'}</span>
                                </div>
                                <div className="color_blue">
                                    <div className="color_green pl-3">
                                        // Make sure params are valid
                                </div>
                                    <div className="color_blue pl-3">
                                        <span className="font_family">if</span> <span className="color_white">{'(a < 0 || b < 0)'}</span> <span className="font_family">return</span> <span className="color_white">0 ;</span>
                                    </div>
                                    <br />
                                    <div className="color_green pl-3">
                                        // Calculate and return the result
                                </div>
                                    <div className="color_blue pl-3">
                                        return <span className="color_white">a + b;</span>
                                    </div>

                                    {'}'}
                                </div>
                            </ul>
                        </div>

                        <div id="number">
                            <h2 className={h2_title}>3. Number 🚀</h2>
                            <h4 className={h4_title}>Function declaration</h4>
                            <p className={text}>Có số nguyên (Integer) hoặc số thực (Float)</p>
                            <ul className="pl-5 pr-5 pt-3 pb-3 bg_code font_family">
                                <div className="color_white">
                                    <span className="color_blue">const</span> number = 10; <span className="color_green pl-2">// integer</span>
                                    <br />
                                    <span className="color_blue">const</span> radius = 2.35; <span className="color_green pl-2">// float</span>
                                </div>
                            </ul>

                            <p className={text}>Cộng chuỗi trong Javascipt</p>
                            <ul className="pl-5 pr-5 pt-3 pb-3 bg_code font_family">
                                <div className="color_white">
                                    <span className="color_blue">const</span> a = 1 + <span className="color_red">'23'</span> <span className="color_green pl-2">// a = '123' tương đương nối chuỗi </span>
                                    <br />
                                    <span className="color_blue">const</span> b = 1 + 2 + <span className="color_red">'3'</span>  <span className="color_green pl-2">// b = '33'</span>
                                </div>
                            </ul>

                            <p className={text}>Số có thể chuyển sang chuỗi và ngược lại</p>
                            <ul className="pl-5 pr-5 pt-3 pb-3 bg_code font_family">
                                <div className="color_white">
                                    <span className="color_blue">const</span> number = 123;
                                <br />
                                    <span className="color_blue">const</span> numberString = number.<span className="color_green">toString</span>(); <span className="color_green pl-2">// number to string </span>
                                    <br />
                                    <span className="color_blue">const</span> parsedNumber = <span className="color_green">parseInt</span>(numberString); <span className="color_green pl-2">// string to number </span>
                                </div>
                            </ul>

                            <p className={text}>Làm tròn số</p>
                            <ul className="pl-5 pr-5 pt-3 pb-3 bg_code font_family">
                                <div className="color_white">
                                    <span className="color_blue">const</span> number = 2.75;
                                <br />
                                    <span className="color_blue">const</span> roundedNumber = Math.<span className="color_green">round</span>(number); <span className="color_green pl-2">// 2.8 </span>
                                </div>
                            </ul>

                            <p className={text}>Các hàm tính toán có sẵn</p>
                            <ul className="pl-5 pr-5 pt-3 pb-3">
                                <li className={text}>Math.random()</li>
                                <li className={text}>Math.abs()</li>
                                <li className={text}>Math.min()</li>
                                <li className={text}>Math.max()</li>
                                <li className={text}>Math.sqrt()</li>
                            </ul>
                        </div>

                        <div id="string">
                            <h2 className={h2_title}>4. String 🚀</h2>
                            <p className={text}>Chuỗi dùng single quote</p>
                            <ul className="pl-5 pr-5 pt-3 pb-3 bg_code font_family">
                                <div className="color_white">
                                    <span className="color_blue">const</span> name = <span className="color_sea font_family">'Tien Kim Study'</span>;
                            </div>
                            </ul>

                            <p className={text}>Dùng template expression khi muốn thêm biến vào chuỗi.</p>
                            <ul className="pl-5 pr-5 pt-3 pb-3 bg_code font_family">
                                <div className="color_white">
                                    <span className="color_blue">const</span> name = <span className="color_sea font_family">'Tien Kim Study'</span>;
                                <br />
                                    <span className="color_blue">const</span> hello = <span className="color_sea font_family">`Xin Chào <span className="color_white">{'${name}'}</span>`</span>;
                            </div>
                            </ul>

                            <p className={text}>Cắt chuỗi, gộp chuỗi</p>
                            <ul className="pl-5 pr-5 pt-3 pb-3 bg_code font_family">
                                <div className="color_white">
                                    <span className="color_blue">const</span> sentence = <span className="color_sea font_family">'Javascript is powerful'</span>;
                                <br />
                                    <br />
                                    <span className="color_green font_family">
                                        // split sentence into array by space
                                <br />
                                // ['Javascript', 'is', 'powerful']
                                </span>
                                    <br />
                                    <span className="color_blue">const</span> words = sentence.<span className="color_green font_family">split</span>(<span className="color_blue">' '</span>);

                                <br />
                                    <br />
                                    <span className="color_green font_family">
                                        // split sentence into array by space
                                <br />
                                // ['Javascript', 'is', 'powerful']
                                </span>
                                    <br />
                                    <span className="color_blue">const</span> joinWordsWithSpace = words.<span className="color_green font_family">join</span>(<span className="color_blue">' '</span>);
                            </div>
                            </ul>

                            <p className={text}>Kiểm tra nội dung có trong chuỗi</p>
                            <ul className="pl-5 pr-5 pt-3 pb-3 bg_code font_family">
                                <div className="color_white">
                                    <span className="color_blue">const</span> name = <span className="color_sea font_family">'Tien Kim Study'</span>.<span className="span color_green font_family">includes</span>( <span className="color_sea font_family">'Study'</span> );
                            </div>
                            </ul>
                        </div>

                        <div id="boolean">
                            <h2 className={h2_title}>5. Boolean 🚀</h2>
                            <p className={text}>Kiểu dữ liệu true / false.</p>
                            <ul className="pl-5 pr-5 pt-3 pb-3 bg_code">
                                <div className="color_white font_family">
                                    <span className="color_blue">const</span> isActive = true;
                                <br />
                                    <span className="color_blue">const</span> isDisable = false;
                            </div>
                            </ul>

                            <p className={text}>Ternary operator.</p>
                            <ul className="pl-5 pr-5 pt-3 pb-3 bg_code">
                                <div className="color_white font_family">
                                    <span className="color_blue">const</span> isIronman = true;
                                <br />
                                    <span className="color_blue">const</span> power = isIronman ? 100 : 90; <span className="color_green">// power = 100</span>
                                </div>
                            </ul>

                            <p className={text}>Nullish coalescing operator '??'.</p>
                            <ul className="pl-5 pr-5 pt-3 pb-3 bg_code">
                                <div className="color_white font_family">
                                    <span className="color_blue">const</span> power = 0 ?? 100; <span className="color_green">// power = 0</span>
                                </div>
                            </ul>
                        </div>

                        <div id="object">
                            <h2 className={h2_title}>6. Object 🚀</h2>
                            <p className={text}>Kiểu dữ liệu phức tạp, có nhiều key, mỗi key lại là một kiểu dữ liệu khác nhau.</p>
                            <ul className="pl-5 pr-5 pt-3 pb-3 bg_code">
                                <div className="color_white font_family">
                                    <span className="color_blue">const</span> student = {'{'}
                                    <br />
                                    <span className="pl-4">name: 'Hau',</span>
                                    <br />
                                    <span className="pl-4">isInstructor: true,</span>
                                    <br />
                                    <span className="pl-4">age: 18,</span>
                                    <br />
                                    <span className="pl-4">hobbies: [<span className="color_blue">'music'</span>], [<span className="color_blue">'football'</span>]</span>
                                    <br />
                                    {'}'}
                                </div>
                            </ul>

                            <p className={text}>Loop qua các keys của một object.</p>
                            <ul className="pl-5 pr-5 pt-3 pb-3 bg_code">
                                <div className="color_white font_family">
                                    Object.<span className="color_green">keys</span>(student).<span className="color_green">forEach</span>(key {'=>'} {'{'}
                                    <br />
                                    <span className="pl-4">console.<span className="color_green">log</span>(key, student[key]);</span>
                                    <br />
                                    {'})'}
                                </div>
                            </ul>

                            <p className={text}>Kiểm tra object có dữ liệu không?</p>
                            <ul className="pl-5 pr-5 pt-3 pb-3 bg_code">
                                <div className="color_white font_family">
                                    <span className="color_blue">if</span> (Object.<span className="color_green">keys</span>(student).<span className="color_green">length</span> {'>'} 0) {'{'}
                                    <br />
                                    <span className="pl-4">console.<span className="color_green">log</span>(<span className="color_sea">'Object has data'</span>)</span>
                                    <br />
                                    {'})'}
                                </div>
                            </ul>

                            <p className={text}>Xóa một key của object.</p>
                            <ul className="pl-5 pr-5 pt-3 pb-3 bg_code">
                                <div className="color_white font_family">
                                    <span className="color_blue">delete</span> student.age;
                            </div>
                            </ul>

                            <p className={text}>Copy object.</p>
                            <ul className="pl-5 pr-5 pt-3 pb-3 bg_code">
                                <div className="color_white font_family">
                                    <span className="color_blue">const </span> studentB = {'{'}
                                    <br />
                                    <span className="pl-4">...student,</span>
                                    <br />
                                    {'}'};
                            </div>
                            </ul>

                        </div>

                        <div id="array">
                            <h2 className={h2_title}>7. Array 🚀</h2>
                            <p className={text}>Kiểu dữ liệu dạng danh sách, mỗi item có một kiểu dữ liệu khác nhau.</p>
                            <ul className="pl-5 pr-5 pt-3 pb-3 bg_code">
                                <div className="color_white font_family">
                                    <span className="color_blue">const </span> numbers = [1, 2, 3, 4, 5];
                                <br />
                                    <span className="color_blue">const</span>
                                    <span> name = [<span className="color_blue">'Tien'</span>], [<span className="color_blue">'Toan'</span>]</span>;
                                <br />
                                    <br />
                                    <span className="color_blue">const </span> studentList = [
                                    <div className="pl-3">
                                        {'{'}
                                        <br />
                                        <span className="color_white pl-3">name: <span className="color_red">'Tien'</span>,</span><br />
                                        <span className="color_white pl-3">age: 21,</span><br />
                                        {'}'},
                                        <br />
                                        {'{'}
                                        <br />
                                        <span className="color_white pl-3">name: <span className="color_red">'Toan'</span>,</span><br />
                                        <span className="color_white pl-3">age: 21,</span><br />
                                        {'}'},
                                    </div>
                                ]
                            </div>
                            </ul>

                            <p className={text}>Thêm phần tử mới vào mảng.</p>
                            <ul className="pl-5 pr-5 pt-3 pb-3 bg_code">
                                <div className="color_white font_family">
                                    numbers.<span className="color_green">push</span>(6);
                                <br />
                                    <br />
                                studentList.<span className="color_green">push</span>({'{'}
                                    <br />
                                    <span className="color_white pl-3">name: <span className="color_red">'Tien'</span>,</span><br />
                                    <span className="color_white pl-3">age: 21,</span><br />
                                    {'})'};
                            </div>
                            </ul>

                            <p className={text}>Xóa một phần tử ra khỏi mảng.</p>
                            <ul className="pl-5 pr-5 pt-3 pb-3 bg_code">
                                <div className="color_white font_family">
                                    <span className="color_green">// delete two items started from index 1</span>
                                    <br />
                                    <span className="color_white">numbers.<span className="color_green">splice</span>(1, 2);</span>
                                </div>
                            </ul>
                        </div>

                        <div id="conditional">
                            <h2 className={h2_title}>8. Conditional 🚀</h2>
                            <p className={text}>Câu điều kiện để thực thi đoạn code khác nhau khi kiểm tra một điều kiện nào đó.</p>
                            <ul className="pl-5 pr-5 pt-3 pb-3 bg_code">
                                <div className="color_white font_family">
                                    <span className="color_blue">const </span> const isTurnedOn = true;
                                <br />
                                    <br />
                                    <span className="color_blue">if </span>(isTurnedOn){'{'}
                                    <br />
                                    <div className="pl-3">
                                        <span className="color_white pl-3">console.<span className="color_green">log</span>(<span className="color_sea">'Handle something when isTurnedOn is true'</span>);</span>
                                    </div>
                                    {'}'} <span className="color_blue">else</span> {'{'}
                                    <br />
                                    <span className="color_white pl-3">console.<span className="color_green">log</span>(<span className="color_sea">'Handle something when isTurnedOn is false'</span>);</span>
                                    <br />
                                    {'}'}
                                </div>
                            </ul>
                        </div>

                        <div id="switchJS">
                            <h2 className={h2_title}>9. Switch 🚀</h2>
                            <p className={text}>Xử lý khác nhau khi một biến có giá trị cố định khác nhau.</p>
                            <ul className="pl-5 pr-5 pt-3 pb-3 bg_code">
                                <div className="color_white font_family">
                                    <span className="color_blue">const </span> month = 9;
                                <br />
                                    <br />
                                    <span className="color_blue">switch </span>(month){'{'}
                                    <br />
                                    <div className="pl-3">
                                        <span className="color_blue pl-3">case <span className="color_white">1:</span></span>
                                        <br />
                                        <span className="color_white pl-5">console.<span className="color_green">log</span>(<span className="color_sea">'Jan'</span>);</span>
                                        <br />
                                        <span className="color_blue pl-5">break</span>;
                                    </div>
                                    <div className="pl-3">
                                        <span className="color_blue pl-3">case <span className="color_white">2:</span></span>
                                        <br />
                                        <span className="color_white pl-5">console.<span className="color_green">log</span>(<span className="color_sea">'Feb'</span>);</span>
                                        <br />
                                        <span className="color_blue pl-5">break</span>;
                                    </div>
                                    <div className="color_sea">// ...</div>
                                    <div className="pl-3">
                                        <span className="color_blue pl-3">case <span className="color_white">11:</span></span>
                                        <br />
                                        <span className="color_white pl-5">console.<span className="color_green">log</span>(<span className="color_sea">'Nov'</span>);</span>
                                        <br />
                                        <span className="color_blue pl-5">break</span>;
                                    </div>
                                    <div className="pl-3">
                                        <span className="color_blue pl-3">case <span className="color_white">12:</span></span>
                                        <br />
                                        <span className="color_white pl-5">console.<span className="color_green">log</span>(<span className="color_sea">'Dec'</span>);</span>
                                        <br />
                                        <span className="color_blue pl-5">break</span>;
                                    </div>
                                    <div className="pl-3">
                                        <span className="color_blue pl-3">default <span className="color_white">:</span></span>
                                        <br />
                                        <span className="color_white pl-5">console.<span className="color_green">log</span>(<span className="color_sea">'N/A'</span>);</span>
                                    </div>
                                    {'}'}
                                </div>
                            </ul>
                        </div>

                        <div id="timeout">
                            <h2 className={h2_title}>10. setTimeout 🚀</h2>
                            <ul className="pl-5 pr-5 pt-3 pb-3 bg_code font_family">
                                <div className="color_white">
                                    <span className="color_blue">const </span> timeout = <span className="color_green">setTimeout</span>(() {'=> {'}
                                    <br />
                                    <div className="pl-3">
                                        <span className="color_white pl-3">console.<span className="color_green">log</span>(<span className="color_sea">'Log after 500ms'</span>);</span>
                                    </div>
                                    {'}, 500);'}
                                </div>
                                <br />
                                <div className="color_blue">
                                    // you can clear timeout when needed
                            </div>
                                <div className="color_white">
                                    <span className="color_green">clearTimeout</span>(timeout);
                            </div>
                            </ul>
                        </div>

                        <div id="interval">
                            <h2 className={h2_title}>11. setInterval 🚀</h2>
                            <ul className="pl-5 pr-5 pt-3 pb-3 bg_code font_family">
                                <div className="color_white">
                                    <span className="color_blue">const </span> interval = <span className="color_green">setInterval</span>(() {'=> {'}
                                    <br />
                                    <div className="pl-3">
                                        <span className="color_white pl-3">console.<span className="color_green">log</span>(<span className="color_sea">'Log every 500ms'</span>);</span>
                                    </div>
                                    {'}, 500);'}
                                </div>
                                <br />
                                <div className="color_blue">
                                    // you can clear interval when needed
                            </div>
                                <div className="color_white">
                                    <span className="color_green">clearInterval</span>(interval);
                            </div>
                            </ul>
                        </div>

                        <div id="promise">
                            <h2 className={h2_title}>12. Promise 🚀</h2>
                            <p className={text}>Dùng để xử lý những tác vụ bất đồng bộ trong javascript như gọi API lên server lấy dữ liệu, đợi hàm callback của thư viện bên ngoài thực thi, ...</p>
                            <ul className="pl-5 pr-5 pt-3 pb-3 bg_code">
                                <div className="color_white font_family">
                                    <span className="color_green">fetch</span>(<span className="color_sea">'https://jsonplaceholder
                                .typicode.com/posts'</span>)
                                    <br />
                                    <span className="color_white pl-3">.<span className="color_green">then</span></span>((response) {'=> {'}
                                    <div className="pl-3">
                                        <span className="color_blue pl-3">return <span className="color_white">response.<span className="color_green">json</span></span></span>()
                                    </div>
                                    <div className="pl-3">
                                        {'}).'}<span className="color_green">catch<span className="color_white">((error) {'=> {'}</span></span>
                                    </div>
                                    <div className="pl-3">
                                        <span className="color_white pl-3">console.<span className="color_green">log</span>(<span className="color_sea">'parsing failed'</span>, error);</span>
                                    </div>
                                    <span className="color_white pl-3">{'})'}</span>
                                </div>
                            </ul>
                        </div>

                        <div id="await">
                            <h2 className={h2_title}>13. Async / Await 🚀</h2>
                            <p className={text}>Cú pháp mới sử dụng thay thế cho then...catch, dễ nhìn hơn, gọn hơn 😍</p>
                            <ul className="pl-5 pr-5 pt-3 pb-3 bg_code font_family">
                                <div className="color_white">
                                    <span className="color_blue">const </span><span className="color_green">fetchData</span> = <i className="color_blue">async</i>{' () => {'}
                                    <br />
                                    <span className="color_blue pl-3">try</span>{' {'}<br />
                                    <div className="pl-4">
                                        <span className="color_blue">const</span> response = <span className="color_blue">await </span><span className="color_green">fetch</span>(<span className="color_sea">'https://jsonplaceholder
                                    .typicode.com/posts'</span>);
                                    <br />
                                        <span className="color_blue">return <i>await</i></span> response.<span className="color_green">json</span>();
                                </div>
                                    <span className="color_blue pl-3"></span>{'}'}<span className="color_blue"> catch</span> (error) {'{'}
                                    <br />
                                    <div className="pl-3">
                                        <span className="color_white pl-3">console.<span className="color_green">log</span>(<span className="color_sea">'parsing failed'</span>, error);</span>
                                        <br />
                                        {'}'}
                                    </div>
                                    {'}'}
                                </div>
                                <br />
                                <span className="color_green">fetchData</span><span className="color_white">();</span>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col_submenu">
                <ul className="ul_submenu p-4">
                    <li className="li_submenu"><a className={gioiThieu} href="#gioiThieuJS">1. JS là gì 🚀</a></li>
                    <li className="li_submenu"><a className={functionJS} href="#function">2. Function trong JS 🚀</a></li>
                    <li className="li_submenu"><a className={number} href="#number">3. Number 🚀</a></li>
                    <li className="li_submenu"><a className={string} href="#string">4. String 🚀</a></li>
                    <li className="li_submenu"><a className={boolean} href="#boolean">5. Boolean 🚀</a></li>
                    <li className="li_submenu"><a className={object} href="#object">6. Object 🚀</a></li>
                    <li className="li_submenu"><a className={array} href="#array">7. Array 🚀</a></li>
                    <li className="li_submenu"><a className={conditional} href="#conditional">8. Conditional 🚀</a></li>
                    <li className="li_submenu"><a className={switchJS} href="#switchJS">9. Switch 🚀</a></li>
                    <li className="li_submenu"><a className={timeout} href="#timeout">10. setTimeout 🚀</a></li>
                    <li className="li_submenu"><a className={interval} href="#interval">11. setInterval 🚀</a></li>
                    <li className="li_submenu"><a className={promise} href="#promise">12. Promise 🚀</a></li>
                    <li className="li_submenu"><a className={awaitJS} href="#await">13. Async / Await 🚀</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Javascipt;