import React from "react";

const sizes = {
  "3xl": "text-[40px] font-bold md:text-[38px] sm:text-4xl",
  "2xl": "text-[32px] font-semibold md:text-3xl sm:text-[28px]",
  xl: "text-2xl font-bold md:text-[22px]",
  "5xl": "text-[45px] font-bold md:text-[41px] sm:text-[35px]",
  "4xl": "text-[44px] font-bold md:text-[40px] sm:text-[34px]",
  s: "text-sm font-bold",
  md: "text-base font-semibold",
  "6xl": "text-[80px] font-bold md:text-5xl",
  xs: "text-xs font-bold",
  lg: "text-xl font-semibold",
};

export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "md",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component
      className={`text-gray-900 font-montserrat ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Heading };
