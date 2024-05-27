import { FaGoogle } from "react-icons/fa";
import UseAuth from "../../hooks/UseAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const { googleSignIn } = UseAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const handelGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                    })
                navigate('/')

            })

    }
    return (
        <div className="px-8">
            <div className="divider"></div>
            <button onClick={handelGoogleSignIn} className="btn btn-block mb-4 bg-green-700">
                Google
                <FaGoogle className="text-red-800"></FaGoogle>
            </button>
        </div>
    );
};

export default SocialLogin;