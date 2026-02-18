import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, label, ...props }, ref) => {
        return (
            <div className="space-y-2 w-full">
                {label && <label className="text-[11px] font-semibold uppercase tracking-[0.15em] text-gray-500">{label}</label>}
                <input
                    type={type}
                    className={cn(
                        "flex h-12 w-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white placeholder:text-gray-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/30 focus-visible:border-white/20 disabled:cursor-not-allowed disabled:opacity-50 transition-all hover:bg-white/[0.05] hover:border-white/15",
                        className
                    )}
                    ref={ref}
                    {...props}
                />
            </div>
        );
    }
);
Input.displayName = "Input";

export { Input };
