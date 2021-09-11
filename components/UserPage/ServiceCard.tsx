import React from "react";
import { IconType } from "react-icons";

interface ServiceCardProps {
    name: string;
    Icon: IconType;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ name, Icon }) => {
    return (
        <div className="flex flex-col items-center justify-center cursor-pointer w-40 h-40 rounded shadow bg-blue-50 ml-8">
            <div className="flex justify-center items-center w-full h-2/3">
                <Icon className="h-full w-1/4" />
            </div>
            <div className="text-sm font-bold">{name}</div>
        </div>
    );
};
