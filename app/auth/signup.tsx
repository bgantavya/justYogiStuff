import { withFormik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { FaEnvelope, FaUser, FaUserAlt, FaLock } from "react-icons/fa";
import Input from "./input";


const schema = yup.object().shape({
    FirstName: yup.string().required("First name is required"),
    LastName: yup.string().required("Last name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
        .string()
        .min(8, "Password must be at least 8 characters")
        .max(12, "Password must be at most 12 characters")
        .required("Password is required"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Passwords must match")
        .required("Confirm password is required"),
});


const initialValues = {
    FirstName: "",
    LastName: "",
    email: "",
    password: "",
    confirmPassword: "",
};
const onSubmit = (values: any) => {
    alert(JSON.stringify(values, null, 2));
};

export function SignUp({
    handleSubmit,
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
}: any) {

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h1 className="text-2xl font-bold mb-4 text-center bg-orange-600 text-white py-3 rounded-t-lg">
                    Sign Up
                </h1>
                <p className="mb-6 text-gray-600 text-center">
                    Create your account to get started.
                </p>

                <form className="space-y-5" onSubmit={handleSubmit}
                >
                    <Input
                        value={values.FirstName}
                        error={errors.FirstName}
                        touched={touched.FirstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="FirstName"
                        type="text"
                        placeholder="Enter your first name"
                        icon={<FaUserAlt className="text-gray-400 mx-2" />}
                    />
                    <Input
                        value={values.LastName}
                        error={errors.LastName}
                        touched={touched.LastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="LastName"
                        type="text"
                        placeholder="Enter your last name"
                        icon={<FaUser className="text-gray-400 mx-2" />}
                    />
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
                        icon={<FaLock className="text-gray-400 mx-2" />}
                    />
                    <Input
                        value={values.confirmPassword}
                        error={errors.confirmPassword}
                        touched={touched.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm your password"
                        icon={<FaLock className="text-gray-400 mx-2" />}
                    />
                    <div className="flex justify-between items-center mt-6">
                        <button
                            type="submit"
                            // disabled={!isValid && !dirty}
                            className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Sign Up
                        </button>
                        <button
                            type="button"
                            // onClick={() => resetForm()}
                            className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition"
                        >
                            Reset
                        </button>
                    </div>
                    <div className="mt-4 text-center">
                        <span className="text-gray-600">Already have an account? </span>
                        <Link to="/login" className="text-orange-600 hover:underline">
                            Login
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

const SignUpSHOC = withFormik({
    validationSchema: schema,
    handleSubmit: onSubmit,
})

export default SignUpSHOC(SignUp)