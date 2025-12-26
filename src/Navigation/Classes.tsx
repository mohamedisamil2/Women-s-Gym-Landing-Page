
type Props = {
    name: string;
    description?: string;
    image: string;
}



function Classes({name, description, image}:Props) {
    
    const overlayStyle = `absolute z-30 p-5 flex h-95 w-112.5
    flex-col items-center justify-center whitespace-normal
    bg-red-400 text-center text-white opacity-0 transition 
    duration-500 hover:opacity-90`


    return (
        <li className="relative mx-5 inline-block h-95 w-112.5">
            <div className={overlayStyle}>
                <p className="text-2xl ">{name}</p>
                <p className="mt-5">{description}</p>
            </div>
            <img src={image} alt={`${image}`} />
        </li>
    );
}

export default Classes
