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
                    Com base na sua ficha médica, vimos que você tem
                    predisposição à arritimia cardíaca:
                </div>
                <div className="pl-2">
                    <div className="text-lg mt-4 max-w-4xl">
                        O que são Arritmias Cardíacas?
                    </div>
                    <div className="pl-2">
                        <div className="mt-4 max-w-4xl">
                            São alterações na frequência e/ou ritmo do coração.
                            É importante salientar que a arritmia não é um
                            ataque cardíaco. Arritmia são distúrbios elétricos
                            no coração e o ataque cardíaco é uma obstrução do
                            fluxo de sangue nas artérias do coração.
                        </div>
                        <div className="text-sm mt-2 max-w-4xl">
                            Fonte: saude.gov
                        </div>
                    </div>
                </div>
                <div className="pl-2">
                    <div className="text-lg mt-4 max-w-4xl">Riscos</div>
                    <div className="pl-2">
                        <div className="mt-4 max-w-4xl">
                            Alguns sintomas são palpitações ou “batedeiras”,
                            desmaios, tonteiras, confusão mental, fraqueza,
                            pressão baixa e dor no peito.
                        </div>
                        <div className="mt-4 max-w-4xl">
                            Algumas arritmias cardíacas são assintomáticas, ou
                            seja, não provocam nenhum dos sintomas descritos
                            acima. Nesses casos, podem desencadear uma parada
                            cardíaca e levar à morte súbita, instantânea,
                            inesperada, repentina e não acidental.
                        </div>
                        <div className="text-sm mt-2 max-w-4xl">
                            Fonte: sebrac
                        </div>
                    </div>
                </div>

                <div className="pl-2">
                    <div className="text-lg mt-4 max-w-4xl">Como previnir?</div>
                    <div className="pl-2">
                        <div className="mt-4 max-w-4xl">
                            <div>
                                Para prevenir a arritmia, o importante é evitar
                                o estresse e procurar ter hábitos saudáveis,
                                evitando álcool e drogas Para prevenir a
                                arritmia, o importante é evitar o estresse e
                                procurar ter hábitos saudáveis, evitando álcool
                                e drogas. Algumas dicas são:
                            </div>
                            <ul className="pl-2 mt-4">
                                <li>- Ter hábitos saudáveis </li>
                                <li>- Manter uma alimentação balanceada </li>
                                <li>
                                    - Não ingerir ou não se exceder no consumo
                                    de bebidas alcoólicas
                                </li>
                                <li>- Não fumar</li>
                                <li>
                                    - Praticar atividade física com a orientação
                                    de um especialista
                                </li>
                                <li>
                                    - Dar atenção à saúde emocional (Ex.:
                                    estresse)
                                </li>
                                <li>
                                    - Consultar-se, pelo menos, uma vez por ano,
                                    com um cardiologista para a realização de
                                    exames preventivos
                                </li>
                                <li>
                                    - Prestar atenção aos sinais do coração:
                                    pulsação irregular e batidas intensas
                                </li>
                            </ul>
                        </div>
                        <div className="text-sm mt-2 max-w-4xl">
                            Fontes: saude.gov e sebrac
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
