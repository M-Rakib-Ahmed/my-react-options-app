

const Link = ({route}) => {
   
    
    return (
        <div>
            <li className="mr-10 hover:bg-yellow-600 p-3 rounded-2xl"><a href={route.path}></a>{route.name}</li>
        </div>
    );
};

export default Link;