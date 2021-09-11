import React from "react";

export const PreventiveMedicine: React.FC = () => {
    return (
        <div className="flex flex-col h-full w-full">
            <div className="pl-4 pt-4 h-12 overflow-hidden">
                <h2 className="text-xl font-bold">Medicina Preventiva</h2>
            </div>
            <div className="mt-4 w-full p-4">
                <div className="max-w-2xl">
                    A medicina preventiva é especialidade médica focada em
                    evitar o desenvolvimento de doenças, reduzir o impacto das
                    enfermidades na saúde dos indivíduos e melhorar a qualidade
                    de vida de pacientes em tratamento.
                </div>
                <div className="mt-4 max-w-4xl">
                    Nossas recomendações, baseadas na sua ficha médica:
                </div>
                <div className="mt-4 max-w-4xl">
                    <ul className="list-disc px-8">
                        <li>
                            Ingestão de alimentos com baixo índice glicêmico
                        </li>
                        <li>
                            Ingestão de alimentos com baixo índice glicêmico
                        </li>
                        <li>
                            Ingestão de alimentos com baixo índice glicêmico
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
