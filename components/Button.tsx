type Props = {
    label: string,
    className?: string
    onClick?: () => void;
    type?: string;
    href?: string;
    typeIn?: 'submit';
   
} 
const Button: React.FC<Props> = ({label, onClick, className, typeIn, href}) =>{
    return(
        <button
            className={className+" text-white uppercase py-2 rounded font-normal text-sm "}
            onClick={onClick}
            type={typeIn}
            
        ><a href={href} target="_blank">
            {label}
        </a>
            
        </button>
    )
}
export default Button