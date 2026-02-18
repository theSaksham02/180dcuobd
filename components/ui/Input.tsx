import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, label, ...props }, ref) => {
        return (
            <div className="space-y-1.5 w-full">
                {label && <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">{label}</label>}
                <input
                    type={type}
                    className={cn(
                        "flex h-12 w-full rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#73B744] focus-visible:border-transparent disabled:cursor-not-allowed disabled:opacity-50 transition-all shadow-sm hover:border-gray-300",
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
