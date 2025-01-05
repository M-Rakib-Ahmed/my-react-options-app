import Feature from "../Feature/Feature";


const Priceoption = ({option}) => {
    const {name, id, price, features}=option
    
    return (
        <div className="bg-blue-500 rounded-lg p-5 text-white flex flex-col ">
        <h2 className="text-center" >
            <span className="text-7xl">${price}</span>
            <span className="text-2xl">/mon</span>
        </h2>
        <h4 className="text-3xl text-center my-8">{name}</h4>
        <div className="pl-6 flex-grow">
            {
            features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
        }
        </div>
        <button className="mt-11 bg-green-600 w-full py-3 rounded-xl font-bold text-lg hover:bg-green-900">Buy Now</button>
        </div>
    );
};

export default Priceoption;