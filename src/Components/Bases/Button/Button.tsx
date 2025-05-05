import "./ButtonStyles.css";

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button = (props: ButtonProps) => {
  const { className, ...restProps } = props;
  return <button className={`button-root ${className}`} {...restProps} />;
};

export default Button;
