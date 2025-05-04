import "./ButtonStyles.css";

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button = (props: ButtonProps) => {
  const { ...restProps } = props;
  return <button className={"button-root"} {...restProps} />;
};

export default Button;
