
import React from 'react';
import { cn } from '@/lib/utils';

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const CustomButton = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  ...props
}: CustomButtonProps) => {
  const baseStyles = "rounded-md font-medium transition-all duration-200 inline-flex items-center justify-center";
  
  const variantStyles = {
    primary: "bg-primary text-white hover:bg-primary/90",
    secondary: "bg-secondary text-white hover:bg-secondary/90",
    accent: "bg-accent text-white hover:bg-accent/90",
    outline: "border-2 border-primary text-primary hover:bg-primary/10"
  };
  
  const sizeStyles = {
    sm: "py-1 px-3 text-sm",
    md: "py-2 px-4 text-base",
    lg: "py-3 px-6 text-lg"
  };
  
  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

// Add a named export alongside the default export
export { CustomButton };
export default CustomButton;
