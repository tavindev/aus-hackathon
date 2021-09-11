import useSWR from "swr";
import { UserProfile } from "pages/api/user";
import { ExamsResponse } from "pages/api/user/exams";
import { fetchExams } from "utils/fetchExams";
import { fetchProfile } from "utils/fetchProfile";

export const MedicalRecord: React.FC = () => {
    const { data: profile } = useSWR<UserProfile>("/api/user", fetchProfile);

    const { data: exams } = useSWR<ExamsResponse>(
        "/api/user/exams",
        fetchExams
    );

    if (!profile || !exams) return null;

    return (
        <div className="flex flex-col p-6 h-full overflow-hidden w-full">
            <div className="h-auto text-lg font-bold">
                <h2>Ficha Médica</h2>
            </div>
            <div className="mt-8">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-2">
                        <div>
                            <span className="font-bold">Peso: </span>{" "}
                            {profile.currentWeight} kg
                        </div>
                        <div>
                            <span className="font-bold">Altura:</span>{" "}
                            {profile.currentHeight}m
                        </div>
                        <div>
                            <span className="font-bold">
                                Gordura corporal atual:
                            </span>{" "}
                            {(profile.currentBodyFat * 100).toFixed(2)}%
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div>
                            <span className="font-bold">Tipo sanguíneo:</span>{" "}
                            {profile.bloodType}
                        </div>
                        <div>
                            <span className="font-bold">
                                Tipo de pele Fitzpatrick:
                            </span>{" "}
                            {profile.skinType}
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div>
                            <span className="font-bold">
                                Doenças diagnosticadas:
                            </span>{" "}
                            {profile.medical.diagnosedDeseases.join(", ")}
                        </div>
                        <div>
                            <span className="font-bold">
                                Predisposições genéticas:
                            </span>{" "}
                            {profile.medical.geneticBias.join(", ")}
                        </div>
                        <div>
                            <span className="font-bold">
                                Condições psiquiátricas:
                            </span>{" "}
                            {profile.medical.psychiatricConditions.join(", ")}
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 w-2/3">
                        <div>
                            <span className="font-bold">Exames antigos: </span>{" "}
                            {exams.exams.map((t) => t.label).join(", ")}
                        </div>
                        <div>
                            <span className="font-bold">Cirurgias:</span>{" "}
                            {profile.medical.cirurgies}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
