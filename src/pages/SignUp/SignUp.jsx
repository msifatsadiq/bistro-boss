import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";
import loginImg from '../../assets/others/authentication2.png';
import bgImg from '../../assets/others/authentication.png';
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const SignUp = () => {
    const axiosPublic = useAxiosPublic();

    const { register, handleSubmit, reset, formState: { errors }, } = useForm();

    const { createUser, updateUserProfile } = useContext(AuthContext);

    const navigate = useNavigate()


    const onSubmit = handleSubmit((data) => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        console.log('User profile updated');
                        const userInfo = {
                            name: data.name,
                            email: data.email,

                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user added to DB');
                                    reset();
                                    Swal.fire({
                                        title: 'success!',
                                        text: 'User Created Successfully',
                                        icon: 'success',
                                    })
                                    navigate('/')
                                }
                            })

                    })
                    .catch(error => console.log(error))
            })

    })

    return (
        < >
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200 " style={{ backgroundImage: `url(${bgImg})` }}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                        <img src={loginImg} alt="Login Illustration" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" {...register("name", { required: true })} name="name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="photoURL" {...register("photoURL", { required: true })} name="photoURL" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">photoURL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" {...register("email",
                                    { required: true })} name="email" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password"
                                    {...register("password",
                                        {
                                            required: true,
                                            minLength: 6,
                                            maxLength: 20,
                                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                        })} name="password" className="input input-bordered" />
                                {errors.password?.type === "required" && (
                                    <p className="text-red-600">Password is required</p>
                                )}
                                {errors.password?.type === "minlength" && (
                                    <p className="text-red-600">Password must be 6 character</p>
                                )}
                                {errors.password?.type === "maxlength" && (
                                    <p className="text-red-600">Password must be upto 20 character</p>
                                )}
                                {errors.password?.type === "pattern" && (
                                    <p className="text-red-600">Password must have one upper case, one lower case and one special character</p>
                                )}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6 ">
                                <button className="btn btn-primary">Sign Up Now </button>
                            </div>
                            <p className="px-6"><small>New Here? <Link to="/login">Create an account</Link> </small></p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;