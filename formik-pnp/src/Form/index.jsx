import React, { Fragment } from "react";
import { useFormik, ErrorMessage } from "formik"; 
import * as yup from "yup";

const validationSchema = yup.object().shape({ 
    email : yup.string().email().required(),
    firstname : yup.string().required(),
    lastname : yup.string().required()
})

const Form = () => { 
    const formik = useFormik({
        initialValues: {
        email:'',
        firstname:'', 
        lastname:''
        }, 
        validationSchema,
        onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
        }
    });
    return ( 
        <div className="form-container"> 
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="email">Email Address</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                /> 
                {formik.errors.email}
                <label htmlFor="firstname">First Name</label> 
                <input  
                    id="firstname"
                    name="firstname"
                    type="text"
                    onChange={formik.handleChange} 
                    value={formik.values.firstname}
                /> 
                {formik.errors.firstname}
                <label htmlFor="lastname">Last Name</label> 
                <input  
                    id="lastname"
                    name="lastname"
                    type="text"
                    onChange={formik.handleChange} 
                    value={formik.values.lastname}
                /> 
                {formik.errors.lastname}
                <button type="submit">Submit</button>
            </form>
        </div>
        
    );
};

export default Form;
