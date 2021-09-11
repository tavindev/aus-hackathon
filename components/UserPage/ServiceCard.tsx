import React from "react";
import { IconType } from "react-icons";

interface ServiceCardProps {
    name: string;
    Icon: IconType;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ name, Icon }) => {
    return (
        <div className="flex flex-col items-center justify-center cursor-pointer w-40 h-40 rounded-lg shadow border-2 text-blue-600 border-blue-600 ml-8">
            <div className="flex justify-center items-center w-full h-2/3">
                <Icon color="rgb(37, 99, 235)" className="h-full w-1/4" />
            </div>
            <div className="text-sm font-bold">{name}</div>
        </div>
    );
};
