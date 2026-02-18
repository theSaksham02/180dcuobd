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
            primary: "bg-white text-[#0B0F19] hover:bg-gray-100",
            secondary: "bg-[#0B0F19] text-white border border-white/15 hover:border-white/30",
            outline: "bg-transparent border border-white/10 text-gray-300 hover:bg-white/5 hover:border-white/20",
            ghost: "bg-transparent text-gray-400 hover:text-white hover:bg-white/5",
        };

        return (
            <button
                className={cn(
                    "inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold transition-all disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] tracking-wide",
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
