import { ButtonHTMLAttributes } from "react";


interface ButtonProps
  extends React.DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,HTMLButtonElement
  > {
  label: string;
  Icon?:()=> React.ReactNode
  color?: string;
  backgroundColor?: string;
  paddingHorizontal?: string | number;
  paddingVertical?: string | number;
  borderRadius?: string | number;
  border?: string;
  fontSize?: string | number;
  cursor?: string;
  
}

const Button = ({
  label,
  color,
  backgroundColor,
  Icon,
  paddingHorizontal,
  paddingVertical,
  borderRadius,
  fontSize,
  cursor,
  style,
  border,
  ...rest
}: ButtonProps) => {
  return (
    <button
      style={{
        backgroundColor,
        paddingLeft: paddingHorizontal,
        paddingRight: paddingHorizontal,
        paddingTop: paddingVertical,
        paddingBottom: paddingVertical,
        color,
        fontSize,
        cursor,
        borderRadius,
        border,
        ...style,
      }}
      {...rest}
    >
      {Icon ? <Icon/> : null}
      {label}
    </button>
  );
};
export default Button;


{/* <Button Icon={()=><FaRegHeart/>} label={"welcome"} onClick={function (): void {
                throw new Error("Function not implemented.");
              } } color={"red"} paddingHorizontal={"50px"} style={{fontSize:"20px",borderBottomRightRadius:"10px"}} 
              type="submit" backgroundColor={"green"}/> */}