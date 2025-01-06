import { TiTick } from "react-icons/ti";

const Feature = ({feature}) => {
    
    return (
        <div>
         <p className="flex items-center gap-2"> <TiTick></TiTick> {feature}</p>   
        </div>
    );
};

export default Feature;