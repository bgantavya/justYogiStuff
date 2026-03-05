import { withFormik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { FaEnvelope} from "react-icons/fa";
import Input from "./input";


const schema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
});


const initialValues = {
    email: "",
}
const onSubmit = (values: any) => {
    alert(`Password reset link sent to: ${values.email} if there's an account with that email.`);
}
export function ForgotPassword({
    handleSubmit,
    values,
    errors,
    touched,
    handleChange,
    handleBlur
}: any) {


    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h1 className="text-2xl font-bold mb-4 text-center bg-orange-600 text-white py-3 rounded-t-lg">
                    Reset Password
                </h1>
                <p className="mb-6 text-gray-600 text-center">
                    Enter your email to receive a password reset link.
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
                    <div className="flex justify-between items-center mt-6">
                        <button
                            type="submit"
                            // disabled={!isValid && !dirty}
                            className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Send Reset Link
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
                        <Link to="/login" className="text-orange-600 hover:underline">
                            Back to Login
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}




const resetPassSHOC = withFormik({
    validationSchema:schema,
    handleSubmit:onSubmit
})

export default resetPassSHOC(ForgotPassword)

