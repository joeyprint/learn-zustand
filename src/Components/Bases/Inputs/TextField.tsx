import "./InputStyles.css";

type TextFieldProps = {} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const TextField = (props: TextFieldProps) => {
  const { ...restProps } = props;
  return <input className={"textField-root"} {...restProps} />;
};

export default TextField;
