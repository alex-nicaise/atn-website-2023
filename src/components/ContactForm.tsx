import { FormikHelpers, useFormik } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {

    interface formValues {
        fullName: string;
        email: string;
        message: string;
    }

    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            message: ''
        },

        validationSchema: Yup.object({
            fullName: Yup.string().required('Required'),
            email: Yup.string().email('Invalid Email').required('Required'),
            message: Yup.string().max(500, 'Value must be under 500 characters.').required('Required')
        }),
        onSubmit: (values: formValues, { setSubmitting }: FormikHelpers<formValues>) => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }
    })

    return (
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="fullName">Name</label>
                <input
                id="fullName"
                name="fullName" placeholder="Your Name..."
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.initialValues.fullName}
                />

                {/* Name Errors */}
                    {formik.touched.fullName && formik.errors.fullName ? (
                        <div>{formik.errors.fullName}</div>
                    ) : null}

                <label htmlFor="email">Email</label>
                <input
                id="email"
                name="email"
                placeholder="johndoe@gmail"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.initialValues.email}
                />

                {/* Email Errors */}
                    {formik.touched.email && formik.errors.email ? (
                        <div>{formik.errors.fullName}</div>
                    ) : null}

                <label htmlFor="message">Message</label>
                <input
                id="contact-message"
                name="message"
                type="text"
                placeholder="Your Message..."
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.initialValues.message}
                />

                {/* Message Errors */}
                    {formik.touched.message && formik.errors.message ? (
                        <div>{formik.errors.fullName}</div>
                    ) : null}

                <button type="submit">Submit</button>
            </form>
    )
}

export default ContactForm;