import React from 'react'

class Lecturer extends React.Component {

    constructor(props) {
        super(props);
        this.props = props
    }


    render() {
        return (
            <section>
                <div className={"row"}>
                    <div className={"col aboutCourseTitle"}>
                        درباره مدرس
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col-sm-2"}>
                        <img src={"https://www.biography.com/.image/t_share/MTE5NTU2MzE2MDUxNzAzMzA3/saoirse-ronan-267546-1-402.jpg"} className={"aboutLecturerImage"} />
                    </div>
                    <div className={"col-sm-10"}>
                        <h5 className={"aboutLecturerName"}>
                            نرگس غریب
                        </h5>
                        <p className={"aboutLecturerBody"}>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیستری را برای طراحان رایانه ای و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات است.
                        </p>
                    </div>
                </div>
                <hr />
                <div className={"row"}>
                    <div className={"col-sm-2"}>
                        <div className={"aboutLecturerExperienceTitle"}>
                        سوابق کاری
                        </div>
                    </div>
                    <div className={"col-sm-10 aboutLecturerExperienceBody"}>
                        <ul>
                            <li>بهترین دیزاینر دنیا</li>
                            <li>برنده‌ی بازیگر نقش اول اسکار ۲۰۱۹</li>
                            <li>مدیر نمونه سال هاروارد بیزینس اسکول</li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }

}


export default Lecturer;
