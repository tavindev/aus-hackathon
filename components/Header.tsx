import React from "react";
import Link from "next/link";

interface HeaderProps {
    executeScroll: () => void;
}

export const Header: React.FC<HeaderProps> = ({ executeScroll }) => {
    return (
        <div className="flex justify-between items-center h-16 pt-8">
            <div>logo</div>
            <div>
                <ul className="toolbar flex">
                    <li
                        className="toolbar-link text-sm"
                        onClick={executeScroll}
                    >
                        O que é o AUS
                    </li>
                    <li className="toolbar-link text-sm">
                        <Link href="/user">Área do usuário</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};
