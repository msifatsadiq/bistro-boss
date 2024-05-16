

const SectionTitle = ({ heading, subHeading }) => {
    return (

        <div className="md:w-4/12 mx-auto my-8">
            <p className="text-yellow-600 text-center">---{subHeading}---</p>
            <h3 className="text-3xl uppercase text-center border-y-4 py-4">{heading}</h3>

        </div>
    );
};

export default SectionTitle;