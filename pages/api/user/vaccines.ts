import { NextApiRequest, NextApiResponse } from "next";

export type Vaccine = { name: string };

export interface VaccinesResponse {
    vaccines: Vaccine[];
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const vaccines: VaccinesResponse = {
        vaccines: [
            { name: "1ª Dose - Covid 52" },
            { name: "Influenza" },
            { name: "Tétano" },
        ],
    };

    res.status(200).json({ ...vaccines });
}
