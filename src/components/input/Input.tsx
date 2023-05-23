import React, { InputHTMLAttributes, forwardRef, ReactElement } from "react";
import { makeStyles } from "@mui/styles";
import { InputStyled, HelperText, Label } from "./styles";

interface MakeStylesProps {
  icon: boolean;
  iconPosition: "start" | "end";
  margin: boolean;
  hasLabel: boolean;
}

const useStyles = makeStyles({
  container: (props: MakeStylesProps) => ({
    display: "flex",
    flexDirection: "column",
    position: "relative",
    marginBottom: props.margin ? 15 : 0,
    flex: 1,
  }),
  input: (props: MakeStylesProps) => ({
    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: props.icon && props.iconPosition === "end" ? 35 : 12,
    paddingLeft: props.icon && props.iconPosition === "start" ? 35 : 12,
    flex: 1,
  }),
  icon: (props: MakeStylesProps) => ({
    position: "absolute",
    top: props.hasLabel ? 23 : 4,
    right: props.iconPosition === "end" ? 5 : "unset",
    left: props.iconPosition === "start" ? 5 : "unset",
  }),
});

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  helperText?: string;
  label?: string;
  containerClassName?: string;
  icon?: ReactElement;
  iconPosition?: "start" | "end";
  margin?: boolean;
}

const InputText: React.ForwardRefRenderFunction<
  HTMLInputElement,
  InputTextProps
> = (
  {
    placeholder,
    helperText,
    error = false,
    label,
    iconPosition = "end",
    icon,
    containerClassName,
    margin = true,
    className,
    ...rest
  },
  ref
) => {
  const classes = useStyles({
    icon: !!icon,
    iconPosition,
    hasLabel: !!label,
    margin,
  });

  return (
    <>
      <div
        className={
          containerClassName
            ? `${classes.container} ${containerClassName}`
            : classes.container
        }
      >
        {!!label && <Label>{label}</Label>}
        {icon && <div className={classes.icon}>{icon}</div>}
        <InputStyled
          {...rest}
          ref={ref}
          $error={error}
          className={`${classes.input} ${className}`}
          placeholder={placeholder}
        />
        {helperText && <HelperText $error={error}>{helperText}</HelperText>}
      </div>
    </>
  );
};

export default forwardRef(InputText);
