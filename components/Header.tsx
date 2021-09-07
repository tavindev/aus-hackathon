export const Header: React.FC = () => {
  return (
    <div className="flex justify-between items-center h-16 pt-8">
      <div>logo</div>
      <div>
        <ul className="toolbar flex">
          <li className="toolbar-link text-sm">INÍCIO</li>
          <li className="toolbar-link text-sm">O QUE É O AUS</li>
          <li className="toolbar-link text-sm">ÁREA DO USUÁRIO</li>
        </ul>
      </div>
    </div>
  );
};
