import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, label, ...props }, ref) => {
        return (
            <div className="space-y-2 w-full">
                {label && <label className="text-xs font-semibold uppercase tracking-[0.1em] text-gray-500">{label}</label>}
                <input
                    type={type}
                    className={cn(
                        "flex h-12 w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-[#1a1a1a] placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#73B744]/40 focus-visible:border-[#73B744] disabled:cursor-not-allowed disabled:opacity-50 transition-all hover:border-gray-400",
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
