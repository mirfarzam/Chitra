import React from 'react'

class About extends React.Component {

    constructor(props) {
        super(props);
        this.props = props
    }


    render() {
        return (
            <section>
                <div className={"row"}>
                    <div className={"col aboutCourseTitle"}>
                        درباره دوره
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col aboutCourseBody"}>
                        <p>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیستری را برای طراحان رایانه ای و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات است.
                        </p>
                        <hr/>
                    </div>
                </div>
            </section>
        );
    }

}


export default About;
