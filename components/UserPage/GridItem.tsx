interface GridItemProps {
  height?: keyof typeof classes.row;
  width?: keyof typeof classes.col;
}

const classes = {
  row: { 1: 'row-span-1', 2: 'row-span-2', 4: 'row-span-4' },
  col: { 1: 'col-span-1', 2: 'col-span-2', 4: 'col-span-4' },
};

export const GridItem: React.FC<GridItemProps> = ({
  height = 2,
  width = 1,
  children,
}) => {
  return (
    <div
      className={`grid-item ${classes.row[height]} ${classes.col[width]} shadow-md rounded-2xl overflow-hidden`}
    >
      <div className="bg-white w-full h-full">{children}</div>
    </div>
  );
};
