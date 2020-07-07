import React from "react";
import Actions from "../buttons/Actions/Actions";
import css from './Banner.module.scss'

const Banner = () => {
    const {Btn} = Actions()
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
                    <p className={css.subtitle}>
                        We kindly remind you that your test assignment should be submitted as a link to github/bitbucket
                        repository.
                    </p>
                </div>

                <Btn scroll >
                    Sign up now
                </Btn>

            </div>
        </section>
    )
}

export default Banner