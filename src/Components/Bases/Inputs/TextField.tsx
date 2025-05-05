import "./InputStyles.css";

type TextFieldProps = {} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const TextField = (props: TextFieldProps) => {
  const { className, ...restProps } = props;
  return <input className={`textField-root ${className}`} {...restProps} />;
};

export default TextField;
