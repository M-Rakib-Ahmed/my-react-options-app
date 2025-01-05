

const Priceoption = ({option}) => {
    const {name, id, price, features}=option
    
    return (
        <div className="bg-blue-500 rounded-lg p-5 text-white">
        <h2 >
            <span className="text-7xl">{price}</span>
            <span className="text-2xl">/mon</span>
        </h2>
        <h4 className="text-3xl">{name}</h4>
        </div>
    );
};

export default Priceoption;