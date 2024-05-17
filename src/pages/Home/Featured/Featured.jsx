import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed">
            <SectionTitle
                subHeading="Check It Out"
                heading="Featured Item"
            ></SectionTitle>

            <div className="md:flex gap-4 justify-center items-center py-20 px-24  text-white bg-slate-500 bg-opacity-40">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div>
                    <p>Aug 20, 2024</p>
                    <p className="uppercase ">Where can i get some?</p>
                    <p>Live long and prosper. Set course for Risa and engage at warp eight. Shut up, Wesley. Live long and prosper. Red alert, fire torpedoes. Highly illogical, doctor. Captain, there are Humans to port. Live long and prosper. I am not a merry man. Shut up, Wesley.</p>
                    <button className="btn btn-outline mt-4 border-0 border-b-4 "> Order Now</button>
                </div>
            </div>

        </div>
    );
};

export default Featured;