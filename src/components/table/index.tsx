import { FunctionComponent } from "react";
import './styles.css';
import { useCollapse } from "react-collapsed";

export const Table: FunctionComponent = () => {

    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()

    return (
        <div className="table-container">
            <div className="table-content">
                <h1>Tabela de Preços</h1>
                <h2 {...getToggleProps()}>{isExpanded ? 'Clique para recolher ▴' : 'Clique para exibir ▾'}</h2>

                <section {...getCollapseProps()} className="tables">
                    <div className="table-one">
                        <h3>APTO TIPO 01 (1 SUÍTE E 2 DEMI-SUÍTES)</h3>
                        <h4>99,28 m² de área privativa + 2 vagas de garagem</h4>
                        <table>
                            <thead>
                                <tr>
                                    <th>APTO</th>
                                    <th>GARAGEM</th>
                                    <th>ENTRADA 20%</th>
                                    <th>MENSAIS (X60)</th>
                                    <th>BALÕES (5 ANUAIS)</th>
                                    <th>CHAVES 15%</th>
                                    <th>TOTAL</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="reservado">101</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                </tr>
                                <tr>
                                    <td className="reservado">201</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                </tr>
                                <tr>
                                    <td>301</td>
                                    <td>G2 / 32 AB</td>
                                    <td>R$ 328.320,00</td>
                                    <td>R$ 9.450,87</td>
                                    <td>R$ 100.000,00</td>
                                    <td>R$ 246.240,00</td>
                                    <td>R$ 1.641.600,00</td>
                                </tr>
                                <tr>
                                    <td>401</td>
                                    <td>G2 / 31 AB</td>
                                    <td>R$ 340.656,00</td>
                                    <td>R$ 10.118,87</td>
                                    <td>R$ 100.000,00</td>
                                    <td>R$ 255.492,00</td>
                                    <td>R$ 1.703.280,00</td>
                                </tr>
                                <tr>
                                    <td className="reservado">501</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                </tr>
                                <tr>
                                    <td className="reservado">601</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                </tr>
                                <tr>
                                    <td className="reservado">701</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                </tr>
                                <tr>
                                    <td>801</td>
                                    <td>G3 / 37 E 38</td>
                                    <td>R$ 352.570,00</td>
                                    <td>R$ 10.764,21</td>
                                    <td>R$ 100.000,00</td>
                                    <td>R$ 264.427,50</td>
                                    <td>R$ 1.762.850,00</td>
                                </tr>
                                <tr>
                                    <td>901</td>
                                    <td>G3 / 43 AB</td>
                                    <td>R$ 361.200,00</td>
                                    <td>R$ 11.231,67</td>
                                    <td>R$ 100.000,00</td>
                                    <td>R$ 270.900,00</td>
                                    <td>R$ 1.806.000,00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="table-two">
                        <h3>APTO TIPO 02 (2 SUITES)</h3>
                        <h4>89,80m² de área privativa + até 2 vagas de garagem privativa, a consultar a unidade</h4>
                        <table>
                            <thead>
                                <tr>
                                    <th>APTO</th>
                                    <th>GARAGEM</th>
                                    <th>ENTRADA 20%</th>
                                    <th>MENSAIS (60 parcelas)</th>
                                    <th>BALÕES (5 ANUAIS)</th>
                                    <th>CHAVES 15%</th>
                                    <th>TOTAL</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="reservado">102</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                </tr>
                                <tr>
                                    <td className="reservado">202</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                </tr>
                                <tr>
                                    <td className="reservado">302</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                </tr>
                                <tr>
                                    <td className="reservado">402</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                </tr>
                                <tr>
                                    <td className="reservado">502</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                </tr>
                                <tr>
                                    <td className="reservado">602</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                </tr>
                                <tr>
                                    <td>702</td>
                                    <td>G4 / 61 AB</td>
                                    <td>R$ 258.624,00</td>
                                    <td>R$ 5.675,47</td>
                                    <td>R$ 100.000,00</td>
                                    <td>R$ 193.968,00</td>
                                    <td>R$ 1.293.120,00</td>
                                </tr>
                                <tr>
                                    <td>802</td>
                                    <td>G4 / 62 AB</td>
                                    <td>R$ 266.077,00</td>
                                    <td>R$ 6.079,17</td>
                                    <td>R$ 100.000,00</td>
                                    <td>R$ 199.557,75</td>
                                    <td>R$ 1.330.385,00</td>
                                </tr>
                                <tr>
                                    <td>902</td>
                                    <td>G4 / 53 E 56</td>
                                    <td>R$ 277.256,00</td>
                                    <td>R$ 6.684,74</td>
                                    <td>R$ 100.000,00</td>
                                    <td>R$ 207.942,60</td>
                                    <td>R$ 1.386.284,00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="table-three">
                        <h3>APTO TIPO 03 (2 SUÍTES)</h3>
                        <h4>86,75m² de área privativa + 2 vagas de garagem</h4>
                        <table>
                            <thead>
                                <tr>
                                    <th>APTO</th>
                                    <th>GARAGEM</th>
                                    <th>ENTRADA 20%</th>
                                    <th>MENSAIS (60 PARCELAS)</th>
                                    <th>BALÕES (5 ANUAIS)</th>
                                    <th>CHAVES 15%</th>
                                    <th>TOTAL</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="reservado">103</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                </tr>
                                <tr>
                                    <td className="reservado">203</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                </tr>
                                <tr>
                                    <td className="reservado">303</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                </tr>
                                <tr>
                                    <td className="reservado">403</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                </tr>
                                <tr>
                                    <td className="reservado">503</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                </tr>
                                <tr>
                                    <td className="reservado">603</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                </tr>
                                <tr>
                                    <td className="reservado">703</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                </tr>
                                <tr>
                                    <td>803</td>
                                    <td>G3 / 48 AB</td>
                                    <td>R$ 257.040,00</td>
                                    <td>R$ 5.589,67</td>
                                    <td>R$ 100.000,00</td>
                                    <td>R$ 192.780,00</td>
                                    <td>R$ 1.285.200,00</td>
                                </tr>
                                <tr>
                                    <td>903</td>
                                    <td>G4 / 60 AB</td>
                                    <td>R$ 267.840,00</td>
                                    <td>R$ 6.174,67</td>
                                    <td>R$ 100.000,00</td>
                                    <td>R$ 200.880,00</td>
                                    <td>R$ 1.339.200,00</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>

                    <div className="table-four">
                        <h3>APTO TIPO 04 (3 SUÍTES)</h3>
                        <h4>107,95m² de área privativa + 2 vagas de garagem</h4>
                        <table>
                            <thead>
                                <tr>
                                    <th>APTO</th>
                                    <th>GARAGEM</th>
                                    <th>ENTRADA 20%</th>
                                    <th>MENSAIS (60 PARCELAS)</th>
                                    <th>BALÕES (5 ANUAIS)</th>
                                    <th>CHAVES 15%</th>
                                    <th>TOTAL</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>104</td>
                                    <td>G2 / 21 E 22</td>
                                    <td>R$ 350.167,00</td>
                                    <td>R$ 10.634,05</td>
                                    <td>R$ 100.000,00</td>
                                    <td>R$ 262.625,25</td>
                                    <td>R$ 1.750.835,00</td>
                                </tr>
                                <tr>
                                    <td>204</td>
                                    <td>G2 / 23 E 24</td>
                                    <td>R$ 352.758,00</td>
                                    <td>R$ 10.774,39</td>
                                    <td>R$ 100.000,00</td>
                                    <td>R$ 264.568,50</td>
                                    <td>R$ 1.763.790,00</td>
                                </tr>
                                <tr>
                                    <td className="reservado">304</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                </tr>
                                <tr>
                                    <td className="reservado">404</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                </tr>
                                <tr>
                                    <td className="reservado">504</td>
                                    <td>G2 / 25 E 28</td>
                                    <td>R$ 373.800,00</td>
                                    <td>R$ 11.914,17</td>
                                    <td>R$ 100.000,00</td>
                                    <td>R$ 280.350,00</td>
                                    <td>R$ 1.869.000,00</td>
                                </tr>
                                <tr>
                                    <td className="reservado">604</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                </tr>
                                <tr>
                                    <td className="reservado">704</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                    <td className="reservado">RESERVADO</td>
                                </tr>
                                <tr>
                                    <td>804</td>
                                    <td>G3 / 35 E 36</td>
                                    <td>R$ 383.359,40</td>
                                    <td>R$ 12.431,97</td>
                                    <td>R$ 100.000,00</td>
                                    <td>R$ 287.519,55</td>
                                    <td>R$ 1.916.797,00</td>
                                </tr>
                                <tr>
                                    <td>904</td>
                                    <td>G4 / 51 E 52</td>
                                    <td>R$ 392.725,80</td>
                                    <td>R$ 12.939,31</td>
                                    <td>R$ 100.000,00</td>
                                    <td>R$ 294.544,35</td>
                                    <td>R$ 1.963.629,00</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>

                    <div className="table-five">
                        <h3>COBERTURA (1 SUÍTE MASTER + 3 SUÍTES + ESPAÇO GOURMET PRIVADO)</h3>
                        <h4>200m² de área privativa + 2 vagas de garagem</h4>
                        <table>
                            <thead>
                                <tr>
                                    <th>APTO</th>
                                    <th>GARAGEM</th>
                                    <th>ENTRADA 20%</th>
                                    <th>MENSAIS (60 PARCELAS)</th>
                                    <th>BALÕES (5 ANUAIS)</th>
                                    <th>CHAVES 15%</th>
                                    <th>TOTAL</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>COB 1001</td>
                                    <td>G4 / 57 AB</td>
                                    <td>R$ 780.000,00</td>
                                    <td>R$ 25.583,33</td>
                                    <td>R$ 200.000,00</td>
                                    <td>R$ 585.000,00</td>
                                    <td>R$ 3.900.000,00</td>
                                </tr>
                                <tr>
                                    <td>COB 1002</td>
                                    <td>G4 / 49 E 50</td>
                                    <td>R$ 764.000,00</td>
                                    <td>R$ 24.716,67</td>
                                    <td>R$ 200.000,00</td>
                                    <td>R$ 573.000,00</td>
                                    <td>R$ 3.820.000,00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                </section>
            </div>


        </div>
    )
}