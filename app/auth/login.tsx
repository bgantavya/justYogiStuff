import { Formik, Form, withFormik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { FaEnvelope, FaKey } from "react-icons/fa";
import Input from "./input";


const schema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
        .string()
        .min(8, "Password must be at least 8 characters")
        .max(12, "Password must be at most 12 characters")
        .required("Password is required"),
});

const initialValues = {
    email: "",
    password: "",
};

const onSubmit = (values: any) => {
    alert(JSON.stringify(values, null, 2));
};

export function Login({
    handleSubmit, 
    values, 
    errors, 
    touched, 
    handleChange, 
    handleBlur
}:any) {
    console.log(values, errors)

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h1 className="text-2xl font-bold mb-4 text-center bg-orange-600 text-white py-3 rounded-t-lg">
                    Login
                </h1>
                <p className="mb-6 text-gray-600 text-center">
                    Please enter your credentials to log in.
                </p>


                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <Input
                            value={values.email}
                            error={errors.email}
                            touched={touched.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            icon={<FaEnvelope className="text-gray-400 mx-2" />}
                            />
                        <Input
                            value={values.password}
                            error={errors.password}
                            touched={touched.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                            icon={<FaKey className="text-gray-400 mx-2" />}
                        />

                        <Link to="/forgot-password" className="text-sm text-orange-600 hover:underline">
                            Forgot password?
                        </Link>

                        <div className="flex justify-between items-center mt-6">
                            <button
                                type="submit"
                                // disabled={!isValid && !dirty}
                                className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Login
                            </button>
                            <button
                                type="button"
                                // onClick={resetForm}
                                className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition"
                            >
                                Reset
                            </button>
                        </div>
                        <div className="mt-4 text-center">
                            <span className="text-gray-600">Don't have an account? </span>
                            <Link to="/signup" className="text-orange-600 hover:underline">
                                Sign Up
                            </Link>
                        </div>
                    </form>
            </div>
        </div>
    );
}

const LoginSHOC = withFormik({
    validationSchema:schema,
    handleSubmit: onSubmit
})
export default LoginSHOC(Login)
