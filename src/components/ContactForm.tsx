import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';

const ContactForm = () => {

    const formSchema = object({
        name: string().required(),
        email: string().required(),
        message: string().required()
    })

    const handleSubmit = (values) => {
        
    }

    return (
        <Formik
        initialValues={{
            name: '',
            email: '',
            message: ''
        }}
        validationSchema={formSchema}
        onSubmit={values => handleSubmit(values)}
        >
            <Form></Form>
        </Formik>
    )
}

export default ContactForm;