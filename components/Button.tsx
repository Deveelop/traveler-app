import Image from "next/image"

type ButtonProbs = {
   type: 'button' | 'submit';
   title: string;
   icon?: string;
   variant: string
   onClick?: () => void

   
}

const Button = ({type, title, icon, variant, onClick}: ButtonProbs) => {
  return (
    <button onClick={onClick} className={`flexCenter gap-3 rounded-full border ${variant}`} type={type}>
      {icon && <Image src={icon} alt={title} width={24} height={24}/>}
     <label>{title}</label> 
    </button>
  )
}

export default Button
