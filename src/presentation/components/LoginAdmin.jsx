import { Formik, FastField, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ReactstrapInput } from "reactstrap-formik";
import { Button, FormGroup } from 'reactstrap';
import { useHistory } from 'react-router';
import logo from "../../data/weatherImgs/logo.png";
import "react-toastify/dist/ReactToastify.css";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getLoginAdminRequest } from '../redux/effects/loginAdminEffect';
import { errorNotify, successNotify } from '../../data/configNotify';
import { useEffect, useState } from 'react';

const LoginAdmin = ({ propsLoginAdmin, getLoginAdminRequest }) => {

    const [email, setEmail] = useState("");

    const [pass, setPass] = useState("");

    const history = useHistory();

    useEffect(() => {
        if (propsLoginAdmin.success == 0) {
            console.log(propsLoginAdmin.error);
            if (!!propsLoginAdmin.error) {
                if (propsLoginAdmin.error.status == 401) {
                    errorNotify("Sai email hoặc mật khẩu!")
                }
            }
        } else if (propsLoginAdmin.success == 1) {
            successNotify("Đăng nhập thành công!")
            if (!!email && !!pass) {
                localStorage.setItem("emailAdmin", email);
                localStorage.setItem("token", pass);
                //redirect to page Admin
                history.push({ pathname: "/main/admin" })
            }
        }
    }, [propsLoginAdmin]);

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
                onSubmit={async (values) => {
                    setEmail(values.email);
                    setPass(values.password);
                    await getLoginAdminRequest(values.email, values.password)
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
                                    type="email"
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
                                    Log in
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
        propsLoginAdmin: state.loginAdminReducer,
    }
}


const mapDispatchToProps = (dispatch) => bindActionCreators({
    getLoginAdminRequest,
},
    dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(LoginAdmin);
