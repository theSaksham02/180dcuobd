import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "outline" | "ghost" | "secondary";
    isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", isLoading, children, ...props }, ref) => {
        const variants = {
            primary: "bg-[#73B744] text-white hover:bg-[#5a9636] shadow-sm",
            secondary: "bg-[#1a1a1a] text-white hover:bg-[#333]",
            outline: "bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400",
            ghost: "bg-transparent text-gray-600 hover:text-[#1a1a1a] hover:bg-gray-100",
        };

        return (
            <button
                className={cn(
                    "inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold transition-all disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] tracking-wide rounded-md",
                    variants[variant],
                    className
                )}
                ref={ref}
                disabled={isLoading || props.disabled}
                {...props}
            >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {children}
            </button>
        );
    }
);
Button.displayName = "Button";

export { Button };
