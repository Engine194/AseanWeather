import { Formik, FastField, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ReactstrapInput } from "reactstrap-formik";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap';
import { useHistory } from 'react-router';
import logo from "../../data/weatherImgs/logo.png";
import { loginApi } from '../../data/api/apiRequest';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getLoginAdminRequest} from '../redux/effects/loginAdminEffect' 

const LoginAdmin = ({propsAdmin,getLoginAdminRequest}) => {
   
    const history = useHistory();
    const warningNotify = (message) => {
        toast.error(message, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            });
    }
    const successNotify = (message) => {
        toast.success(message, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            });
    }
    return (
        <>
            <Formik
                initialValues={
                    {
                        email: '',
                        password: '',
                    }
                }
                validationSchema={
                    Yup.object({
                        email: Yup.string()
                            .required('Required'),
                         

                        password: Yup.string()
                            .max(50, 'Must be between 8 to 50 characters')
                            .min(8, 'Must be between 8 to 50 characters')
                            .required('Required'),

                    })
                }
                onSubmit={
                    async (values) => {
                        try {
                            // call api
                            getLoginAdminRequest(values.email,values.password)
                            console.log("1111111111",propsAdmin);
                            successNotify("Đăng nhập thành công!")
                            localStorage.setItem("emailAdmin",values.email);
                            localStorage.setItem("token",values.password); 
                            //redirect to page Admin
                            history.push({ pathname: "/main/admin" })

                        } catch (error) {
                            if (error.status === 401) {
                                warningNotify("Sai tên đăng nhập hoặc mật khẩu!")
                            } else {
                            }
                        }
                    }
                }
                validateOnChange={true}
                validateOnBlur={false}
            >
                {({ isSubmitting }) => (

                    <div className="m-sm-4">
                        <Form>
                            <FormGroup>
                                <div className="text-center">
                                        <img src={logo} width="73" alt="Logo" />
                                </div>
                            </FormGroup>

                            {/* email */}
                            <FormGroup>
                                <FastField
                                    label="Email"
                                    bsSize="lg"
                                    type="text"
                                    name="email"
                                    placeholder="Enter your email"
                                    component={ReactstrapInput}
                                />
                            </FormGroup>

                            {/* password */}
                            <FormGroup>
                                <FastField
                                    label="Password"
                                    bsSize="lg"
                                    type="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    component={ReactstrapInput}
                                />
                            </FormGroup>

                            <ErrorMessage name="errorForm" component={"div"} className="invalid-feedback" style={{ display: "block" }} />

                            {/* submit */}
                            <div className="text-center mt-3">
                                <Button type="submit" color="primary" size="lg" disabled={isSubmitting}>
                                    Sign up
             </Button>
                            </div>
                        </Form>
                    </div>


                )}
            </Formik>
        </>
    );
};
const mapStateToProps = (state) => {
    return {
        propsAdmin: state.loginAdminReducer ,
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getLoginAdminRequest,
},
    dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(LoginAdmin);
