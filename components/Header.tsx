import React from 'react';
import Link from 'next/link';

export const Header: React.FC = () => {
  return (
    <div className="flex justify-between items-center h-16 pt-8">
      <div>logo</div>
      <div>
        <ul className="toolbar flex">
          <li className="toolbar-link text-sm">O que é o AUS</li>
          <li className="toolbar-link text-sm">
            <Link href="/user">Área do usuário</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
