import moment from "moment";
import React from "react";

interface BloodDonationCard {
    place: string;
    date: Date;
    i: number;
}

export const BloodDonationCard: React.FC<BloodDonationCard> = ({
    place,
    date,
    i,
}) => {
    return (
        <div
            className={`flex justify-between items-center mb-4 p-2 ${
                i % 2 === 0 && "bg-gray-50"
            }`}
        >
            <div>
                <div>
                    <h3 className="text-md font-bold">{place}</h3>
                </div>
            </div>
            <div className="flex items-center rounded h-8 px-2">
                <p className="text-xs">{moment(date).format("DD MMM, YYYY")}</p>
            </div>
        </div>
    );
};
