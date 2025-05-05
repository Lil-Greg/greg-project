import React from 'react'
import { cn } from "../libs/utils/tsUtils"

const Dropdown = React.forwardRef<
    SVGSVGElement,
    React.HTMLAttributes<SVGSVGElement>
>(({ className, ...props }, ref) => (
    <svg className={cn("-mr-1 size-5 text-gray-400", className)} ref={ref} {...props} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
        <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
    </svg>
));
Dropdown.displayName = "Dropdown";

export default Dropdown;
