import { FunctionComponent } from 'react'

interface ButtonProps {
  onClick?: (x?) => void
  disabled?: boolean
  className?: string
  primary?: boolean
}

const Button: FunctionComponent<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  className,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`whitespace-nowrap rounded-full bg-th-bkg-button px-6 py-2 font-bold text-th-fgd-1 hover:brightness-[1.1] focus:outline-none disabled:cursor-not-allowed disabled:bg-th-bkg-4 disabled:text-th-fgd-4 disabled:hover:brightness-100 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button

export const LinkButton: FunctionComponent<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  className,
  primary,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`border-0 font-bold ${
        primary ? 'text-th-primary' : 'text-th-fgd-2'
      } underline hover:no-underline hover:opacity-60 focus:outline-none ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export const IconButton: FunctionComponent<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  className,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${className} flex h-7 w-7 items-center justify-center rounded-full bg-th-bkg-4 text-th-fgd-1 hover:text-th-primary focus:outline-none disabled:cursor-not-allowed 
      disabled:bg-th-bkg-4 disabled:text-th-fgd-4 disabled:hover:text-th-fgd-4`}
      {...props}
    >
      {children}
    </button>
  )
}
