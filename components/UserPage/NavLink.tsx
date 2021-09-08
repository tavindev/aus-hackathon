import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IconType } from 'react-icons';

interface NavLinkProps {
  Icon: IconType;
  label: string;
  to: string;
}

const NavLink: React.FC<NavLinkProps> = ({ Icon, label, to }) => {
  const router = useRouter();

  return (
    <Link href={to}>
      <div className="nav-link flex items-center justify-start w-full h-16 px-3 font-bold cursor-pointer transition-colors hover:bg-gray-50">
        <div className="icon w-11 h-11 p-2">
          <Icon style={{ width: '100%', height: '100%' }} />
        </div>
        <p className="ml-3 text-sm text-center">{label}</p>
      </div>
    </Link>
  );
};

export default NavLink;
