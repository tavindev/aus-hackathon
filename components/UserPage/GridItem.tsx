interface GridItemProps {
  span?: string;
  height?: number;
  width?: number;
}

export const GridItem: React.FC<GridItemProps> = ({
  span,
  height,
  width,
  children,
}) => {
  return (
    <div
      className={`grid-item row-span-${height} col-span-${width} ${span} shadow-md rounded-2xl overflow-hidden`}
    >
      <div className="bg-white w-full h-full">{children}</div>
    </div>
  );
};
