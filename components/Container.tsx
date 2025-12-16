import React from "react";

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  /** When true, disables the max-width constraint (full-width layout). */
  fluid?: boolean;
  /** Override the default max width class (e.g., `max-w-7xl`). */
  maxWidthClass?: string;
};

/**
 * A responsive page container that centers content and constrains width on desktop.
 * - Default max width: 1464px (matches current design)
 * - Horizontal padding: responsive (`px-4 md:px-6 lg:px-8`)
 * - Use `fluid` to disable max width for full-bleed sections
 */
export default function Container({
  children,
  className,
  fluid,
  maxWidthClass,
  ...rest
}: ContainerProps) {
  const classes = [
    "mx-auto",
    "w-full",
    "px-4",
    "md:px-6",
    "lg:px-8",
    fluid ? undefined : maxWidthClass ?? "max-w-[91.5em]",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}

