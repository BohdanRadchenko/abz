import React, {useState} from "react";
import {connect} from 'react-redux'
import {handleCreateUser} from '../../../redux/users/usersOperations'
import {createFormData} from '../../../helpers/formData.helpers';
import css from './Form.module.scss'

const Form = ({positions, token, handleCreateUser}) => {

    const defaultForm = {
        name: '', email: '', phone: '', positions_id: 1, photo: ''
    };
    const [form, setForm] = useState(defaultForm)

    const changeHandler = e => {
        if (e.target.name === 'positions_id') {
            setForm({...form, [e.target.name]: Number(e.target.value)})
        } else (
            setForm({...form, [e.target.name]: e.target.value})
        )
    };

    const uploadFile = async (e) => {
        e.persist();
        const file = e.target.files[0];
        setForm({...form, photo: file})
    };

    const submitHandler = e => {
        e.preventDefault();
        const data = createFormData(form);
        handleCreateUser(data, token);
        // fetchUsers(page); --------
        setForm(defaultForm);
    };

    return (
        <div className={css.container}>
            <form className={css.form} onSubmit={e => submitHandler(e)}>
                <label className={css.label} htmlFor="name">Name</label>
                <input className={css.input}
                       required
                       value={form.name}
                       name='name'
                       onChange={e => changeHandler(e)}
                       minLength="2"
                       maxLength="60"
                       placeholder="Your name"
                       id="name"
                       type="text"/>
                <label className={css.labelValid} htmlFor="name">
                    Enter valid Name
                </label>

                <label className={css.label} htmlFor="email">Email</label>
                <input className={css.input}
                       required
                       value={form.email}
                       name='email'
                       onChange={e => changeHandler(e)}
                       minLength="2"
                       maxLength="100"
                       placeholder="Your email"
                       id="email"
                       type="email"/>
                <label className={css.labelValid} htmlFor="email">
                    Enter valid Email
                </label>

                <label className={css.label} htmlFor="number">Phone number</label>
                <input className={css.input}
                       required
                       minLength="13"
                       maxLength="13"
                       value={form.phone}
                       name='phone'
                       onChange={e => changeHandler(e)}
                       pattern={'^[+]{0,1}380([0-9]{9})$'}
                       placeholder="+380 XX XXX XX XX"
                       id="number"
                       type="tel"/>
                <label className={css.labelValid} htmlFor="number">
                    Enter phone number in open format
                </label>

                {!!positions.length && (
                    <div className="radio">
                        <p className={css.positionTitle}>
                            Select your position
                        </p>
                        <ul className={css.radioList}>
                            {positions.map(el => (
                                <li key={el.id} className={css.radioItem}>
                                    <label className={css.radioLabel}>
                                        <input type="radio"
                                               className={css.radioInput}
                                               onChange={e => changeHandler(e)}
                                               name='positions_id'
                                               value={el.id}
                                               checked={el.id === form.positions_id}
                                        />
                                        {el.name}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}


                <label htmlFor="file" className={css.labelFile}>
                    <input type="text"
                           className={css.pathFile}
                           placeholder='Upload your photo'
                           value={form.photo ?
                               (form.photo.name.length > 25 ? form.photo.name.slice(0, 25) + '...' + form.photo.name.slice(-7)
                                   : form.photo.name)
                               : ''}
                           disabled
                    />
                    <input type="file"
                           required
                           name="photo"
                           id="file"
                           accept=".jpg, .jpeg"
                           className={css.inputfile}
                           onChange={e => uploadFile(e)}
                    />
                    <span className={css.spanFile}>Browse</span>
                </label>

                <button type="submit" className={css.button}>Sign up now</button>
            </form>
        </div>
    )
}

const mDTP = {
    handleCreateUser : handleCreateUser
}

export default connect (null, mDTP)(Form)