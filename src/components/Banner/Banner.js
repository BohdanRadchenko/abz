import React from "react";
import Actions from "../buttons/Actions/Actions";
import css from './Banner.module.scss'

const Banner = () => {
    const {Btn} = Actions()
    const screenWidth = document.documentElement.clientWidth;
    return (
        <section className={css.section}>
            <div className={css.container}>

                <div className={css.titleWrapper}>
                    <h1 className={css.title}>
                        Test assignment
                    </h1>
                    <h1 className={css.title}>
                        for Frontend Developer position
                    </h1>
                </div>

                <div className={css.subtitleWrapper}>
                    {screenWidth < 768 && (
                        <p className={css.subtitle}>
                            We kindly remind you that your test assignment should be submitted as a link to
                            github/bitbucket
                            repository.
                        </p>
                    )}
                    {screenWidth < 1024 && (
                        <p className={css.subtitle}>
                            We kindly remind you that your test assignment should be submitted as a link to
                            github/bitbucket repository. Please be patient, we consider and respond to every application
                            that meets minimum requirements. We look forward to your submission. Good luck! The photo
                            has to scale in the banner area on the different screens
                        </p>
                    )}

                </div>

                <Btn scroll styled={{margin : 0}}>
                    Sign up now
                </Btn>

            </div>
        </section>
    )
}

export default Banner