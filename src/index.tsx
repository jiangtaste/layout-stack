// layout.tsx
import clsx from "clsx";
import React from "react";

// HStack
export interface HStackProps extends React.HTMLAttributes<HTMLDivElement> {
  spacing?: string; // e.g. "4" for space-x-4
  children: React.ReactNode;
  className?: string;
}

export const HStack: React.FC<HStackProps> = ({
  spacing = "2",
  className = "",
  children,
  ...props
}) => {
  return (
    <div
      className={clsx(
        `flex flex-row items-center`,
        spacing && `space-x-${spacing}`,
        className
      )}
      {...props}>
      {children}
    </div>
  );
};

// VStack
export interface VStackProps extends React.HTMLAttributes<HTMLDivElement> {
  spacing?: string;
  children: React.ReactNode;
  className?: string;
}

export const VStack: React.FC<VStackProps> = ({
  spacing = "2",
  className = "",
  children,
  ...props
}) => {
  return (
    <div
      className={clsx(
        `flex flex-col items-center`,
        spacing && `space-y-${spacing}`,
        className
      )}
      {...props}>
      {children}
    </div>
  );
};

// Stack
export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  spacing?: string;
  children: React.ReactNode;
  className?: string;
}

export const Stack: React.FC<StackProps> = ({
  spacing = "2",
  className = "",
  children,
  ...props
}) => {
  return (
    <div
      className={clsx(
        `flex flex-col items-start`,
        spacing && `space-y-${spacing}`,
        className
      )}
      {...props}>
      {children}
    </div>
  );
};

// ZStack
export interface ZStackProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const ZStack: React.FC<ZStackProps> = ({
  className = "",
  children,
  ...props
}) => {
  return (
    <div
      className={clsx("grid place-items-stretch", className)}
      {...props}>
      {React.Children.map(children, (child, index) => (
        <div style={{ gridArea: "1 / 1", zIndex: index }}>{child}</div>
      ))}
    </div>
  );
};

// Spacer
export const Spacer: React.FC = () => <div className="flex-1" />;

const LayoutStack = {
  HStack,
  VStack,
  Stack,
  ZStack,
  Spacer,
};

export default LayoutStack;
