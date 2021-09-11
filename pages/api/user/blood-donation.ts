import { NextApiRequest, NextApiResponse } from "next";

export type BloodDonation = {
    place: string;
    date: Date;
};

export interface BloodDonationResponse {
    donations: BloodDonation[];
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const donations: BloodDonationResponse = {
        donations: [
            {
                place: "Clínica Technópolis",
                date: new Date("2043-12-28"),
            },
            {
                place: "Clínica Technópolis",
                date: new Date("2043-10-14"),
            },
            {
                place: "Clínica Technópolis",
                date: new Date("2043-08-24"),
            },
        ],
    };

    res.status(200).json({ ...donations });
}
