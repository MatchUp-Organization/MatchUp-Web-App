import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonStyles = cva(["hover:bg-secondary-hover", "transition-colors"], {
    variants: {
        variant: {
            default: ["bg-secondary", "hover:bg-highlight"],
            ghost: ["hover:bg-gray-100"]
        },
        size: {
            default: ["rounded", "p-2"],
            icon: ["rounded-full", "w-10", "h-10", "flex", "items-center", "justify-center", "p-2"]
        }
    },
    defaultVariant: {
        variant: "default",
        size: "default"
    }
});


export function Button({ variant, size, className, ...props }) {
    return (
        <button
            {...props}
            className={twMerge(buttonStyles({ variant, size }), className)}
        />
    );
}