import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div className="px-8">
            <div className="divider"></div>
            <button className="btn btn-block mb-4">
                Google
                <FaGoogle></FaGoogle>
            </button>
        </div>
    );
};

export default SocialLogin;