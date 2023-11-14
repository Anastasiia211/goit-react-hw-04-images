import React, { Component } from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { SearchForm, ErrMessage } from './Searchbar.styled';
import { BsSearchHeart } from "react-icons/bs";


const SignupSchema = Yup.object().shape({
    search: Yup.string().required('This fiels is empty. Write something'),
});

export class Searchbar extends Component {
    render() {
        return (
            <SearchForm>
                <div className='wrapper'>
                    <Formik
                        initialValues={{
                            search: '',
                        }}
                        validationSchema={SignupSchema}
                        onSubmit={(values, actions) => {
                            this.props.onSubmit(values);
                        }}
                    >
                        <Form>
                            <div className='search-list'>
                                <label htmlFor='search'></label>
                                <Field
                                    id='search'
                                    name='search'
                                    autoComplete='off'
                                    className='input'
                                    type='text'
                                    placeholder='Search images and photos'
                                />
                                <ErrMessage name='search' component='div' />
                                <button type='submit' className='button'>
                                    <BsSearchHeart />
                                </button>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </SearchForm>
        );
    }
}