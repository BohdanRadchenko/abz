import React from "react";
import Actions from '../buttons/Actions/Actions'
import css from './AboutMe.module.scss'

const AboutMe = () => {

    const {Lnk} = Actions()

    return (
        <section className={css.section}>
            <div className={css.container}>

                <h1 className={css.title}>
                    Let's get acquainted
                </h1>

                <div className={css.content}>
                    <div className={css.leftSide}>
                        <div className={css.manImage}/>
                    </div>

                    <div className={css.rightSide}>
                        <h2 className={css.subtitle}>
                            I am cool frontend developer
                        </h2>

                        <div className={css.textWrapper}>
                            <p className={css.text}>
                                We will evaluate how clean your approach to writing CSS and Javascript code is. You can
                                use any
                                CSS
                                and Javascript 3rd party libraries without any restriction.
                            </p>
                            <p className={css.text}>
                                If 3rd party css/javascript libraries are added to the project via bower/npm/yarn you
                                will get
                                bonus
                                points. If you use any task runner (gulp/webpack) you will get bonus points as well.
                                Slice
                                service
                                directory page P​SD mockup​ into HTML5/CSS3.
                            </p>
                        </div>

                        <Lnk styled={{margin: 0, textAlign: 'left'}}>
                            Sign up now
                        </Lnk>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default AboutMe