import Image from "next/image"

type ButtonProbs = {
   type: 'button' | 'submit';
   title: string;
   icon?: string;
   variant: string;
   onClick?: () => void;
   full?: boolean

   
}

const Button = ({type, title, icon, variant, onClick, full}: ButtonProbs) => {
  return (
    <button onClick={onClick} className={`flexCenter gap-3 rounded-full border ${variant} ${full && 'w-full'}`} type={type}>
      {icon && <Image src={icon} alt={title} width={24} height={24}/>}
     <label className=" bold-16 whitespace-nowrap cursor-pointer">{title}</label> 
    </button>
  )
}

export default Button
