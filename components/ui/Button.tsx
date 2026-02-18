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
            primary: "bg-[#73B744] text-white hover:bg-[#63a03a] shadow-md shadow-green-500/20 active:shadow-sm",
            secondary: "bg-[#B50D11] text-white hover:bg-[#940b0e] shadow-md shadow-red-500/20",
            outline: "bg-transparent border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300",
            ghost: "bg-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-100/50",
        };

        return (
            <button
                className={cn(
                    "inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-bold transition-all disabled:opacity-50 disabled:pointer-events-none active:scale-95 tracking-wide",
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
