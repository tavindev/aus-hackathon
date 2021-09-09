interface GridItemProps {
  className?: string;
}

export const GridItem: React.FC<GridItemProps> = ({
  height = 2,
  width = 1,
  className,
  children,
}) => {
  return (
    <div
      className={`grid-item ${className}  shadow-md rounded-2xl overflow-hidden`}
    >
      <div className="bg-white w-full h-full">{children}</div>
    </div>
  );
};
