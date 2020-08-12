import React from 'react'
import VideoPlayer from "../../Components/course/VideoPlayer";
import About from "../../Components/course/description/About";
import Lecturer from "../../Components/course/description/Lecturer";
import Seek from "../../Components/course/seek";


export default class Overview extends React.Component {
    render() {
        return (
            <section>

                <nav className="navbar  navbar-expand-lg navbar-light ">
                    <div className={"container"}>
                        <div className={"row navRow d-flex align-items-center"}>
                            <div className={"col navCol"}>

                                <a className="navbar-brand navbarTitle" href="#">
                                    <img src="/Chitra/teacher.png"/>
                                    <h1>لوگو</h1>
                                </a>


                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>


                                <div className="collapse navbar-collapse navItems" id="navbarNavDropdown">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">همه دوره‌ها</a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink"
                                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                بیشتر
                                                <span></span>
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another action</a>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                            </div>
                                        </li>
                                    </ul>
                                    <a className={"d-flex justify-content-center align-items-center button noselect"}
                                       href={"/Chitra/signin"}>
                                        ورود | ثبت‌نام
                                    </a>
                                    <form>
                                        <input type={"text"} placeholder={"دوره مورد نظرتان را جستجو کنید"} className={""}/>
                                    </form>

                                </div>




                            </div>
                        </div>
                    </div>
                </nav>


                <div className={"container"}>
                    <div className={"row"}>

                        <div className={"col-lg-4 col-md-4 col-sm-12 sidebar"}>

                            <div className={"row coursePrice d-flex align-items-center"}>
                                <div className={"col-sm-4 coursePriceBefore"}>۴۰۰,۰۰۰ <span>تومان</span></div>
                                <div className={"col-sm-2 coursePriceDiscount"}>۲۰٪</div>
                                <div className={"col-sm-6 coursePriceMain"}>۳۴۵,۰۰۰ <span>تومان</span></div>
                            </div>

                            <div className={"row"}>
                                <div className={"col"}>
                                    <a className={"d-flex justify-content-center align-items-center button noselect full-width"}>
                                        خرید این دوره
                                    </a>
                                </div>
                            </div>

                            <div className={"row"}>
                                <div className={"col"}>
                                    <div className={"courseDetail"}>
                                        <ul>
                                            <li><i className="uil uil-heart"></i>۱۰۰٪ بازخورد مثبت (۳۸)</li>
                                            <li><i className="uil uil-users-alt"></i>۲۱۲۱ شرکت‌کننده</li>
                                            <li><i className="uil uil-video"></i>۲۳ ویدیو (۲۳ ساعت و ۴۵ دقیقه)</li>
                                            <li><i className="uil uil-file-alt"></i>۳ مقاله</li>
                                            <li><i className="uil uil-file-download"></i>۷۰ فایل قابل دانلود</li>
                                            <li><i className="uil uil-layer-group"></i>سطح حرفه‌ای</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className={"row"}>
                                <div className={"col"}>
                                    <div className={"courseShareLinks d-flex justify-content-between align-items-center noselect"}>
                                        <div className={"courseShareLinksTitle"}>
                                            اشتراک‌گذاری
                                        </div>
                                        <div className={"courseShareLinksLinks"}>
                                            <ul>
                                                <li><a><i className="uil uil-telegram"></i></a></li>
                                                <li><a><i className="uil uil-linkedin"></i></a></li>
                                                <li><a><i className="uil uil-facebook"></i></a></li>
                                                <li><a><i className="uil uil-twitter"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>


                        <div className={"col-lg-8 col-md-8 col-sm-12"}>
                            <div className={"row"}>
                                <div className={"col"}>
                                    <div className={"courseTitle"}>
                                        دوره جامع رنگ‌شناسی
                                    </div>
                                </div>
                            </div>
                            <div className={"row"}>
                                <div className={"col"}>
                                    <div className={"courseLecturer"}>
                                        <img className={"courseLecturerImage"} src={"https://www.biography.com/.image/t_share/MTE5NTU2MzE2MDUxNzAzMzA3/saoirse-ronan-267546-1-402.jpg"} />
                                        <span className={"courseLecturerName"}>نرگس غریب</span>
                                        <span>  </span>
                                        <span className={"courseLecturerCareer"}>طراح رابط کاربری</span>
                                    </div>
                                </div>
                            </div>
                            <div className={"row videoRow"}>
                                <div className={"col"}>
                                    <VideoPlayer />
                                </div>
                            </div>

                            <div className={"row description"}>
                                <div className={"col"}>

                                    <div className={"row descriptionNavigator"}>
                                        <div className={"col d-flex align-items-center"}>
                                            <ul className={"d-flex justify-content-around"}>
                                                <li className={"active"}>
                                                    مرور دوره
                                                    <div className={"underline pink"}>
                                                        <div className={"line bigLine"}/>
                                                        <div className={"line smallLine"}/>
                                                    </div>
                                                </li>
                                                <li>
                                                    درباره مدرس
                                                    <div className={"underline pink"}>
                                                        <div className={"line bigLine"}/>
                                                        <div className={"line smallLine"}/>
                                                    </div>
                                                </li>
                                                <li>سرفصل دوره
                                                    <div className={"underline pink"}>
                                                        <div className={"line bigLine"}/>
                                                        <div className={"line smallLine"}/>
                                                    </div>
                                                </li>
                                                <li>سوالات متداول
                                                    <div className={"underline pink"}>
                                                        <div className={"line bigLine"}/>
                                                        <div className={"line smallLine"}/>
                                                    </div>
                                                </li>
                                                <li>نظرات کاربران
                                                    <div className={"underline pink"}>
                                                        <div className={"line bigLine"}/>
                                                        <div className={"line smallLine"}/>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className={"row descriptionBody"}>
                                        <div className={"col"}>
                                            <Lecturer/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
