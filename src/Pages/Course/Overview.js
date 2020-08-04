import React from 'react'
import '../../Styles/Course.css';



export default function Overview() {
    return (
        <section>
        <div className={"container"}></div>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-lg-3 col-md-3 col-sm-12"}></div>
                    <div className={"col-lg-9 col-md-9 col-sm-12"}>
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
                                <video className={"courseVideo"} width="320" height="240" controls>
                                    <source src="/Chitra/videos/overview.mp4" type="video/mp4" />
                                            مرورگر شما قادر به پخش ویدیو نمی‌باشد
                                </video>
                            </div>
                        </div>
                        <div className={"row description"}>
                            <div className={"col"}>
                            <div className={"row descriptionNavigator"}>
                                <div className={"col d-flex align-items-center"}>
                                    <ul className={"d-flex justify-content-around"}>
                                        <li className={"active"}>
                                            مرور دوره
                                            <div className={"underline pink show"}>
                                                <div className={"line bigLine"}/>
                                                <div className={"line smallLine"}/>
                                            </div>
                                        </li>
                                        <li>درباره مدرس</li>
                                        <li>سرفصل دوره</li>
                                        <li>سوالات متداول</li>
                                        <li>نظرات کاربران</li>
                                    </ul>
                                </div>
                            </div>
                            <div className={"row descriptionBody"}>
                                <div className={"col"}>
                                <div className={"row"}>
                                    <div className={"col aboutCourseTitle"}>
                                        درباره دوره
                                    </div>
                                </div>
                                < div className={"row"}>
                                    <div className={"col aboutCourseBody"}>
                                        <p>
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیستری را برای طراحان رایانه ای و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات است.
                                        </p>
                                    </div>
                                </div>
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
