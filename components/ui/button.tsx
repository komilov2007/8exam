import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center bg-transparent border-none text-sm font-medium whitespace-nowrap transition-all outline-none select-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: 'text-black hover:opacity-70',
        outline: 'text-black hover:opacity-70',
        secondary: 'text-black hover:opacity-70',
        ghost: 'text-black hover:opacity-70',
        destructive: 'text-red-500 hover:opacity-70',
        link: 'text-black underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-21 w-21 px-2.5',
        xs: 'h-6 px-2 text-xs',
        sm: 'h-7 px-2.5 text-[0.8rem]',
        lg: 'h-20 w-20 px-3',
        icon: 'size-8',
        'icon-sm': 'size-7',
        'icon-lg': 'size-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

function Button({
  className,
  variant = 'default',
  size = 'default',
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
