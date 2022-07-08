interface IVeiculo {
    nome: string;
    placa: string;
    dataEntrada: Date | string;
}

(function () {
    const $ = (query: string): HTMLInputElement | null => 
        document.querySelector(query);

    function calcTempo(miliseg: number) {
        const min = Math.floor(miliseg / 60000);
        const seg = Math.floor((miliseg % 6000) / 1000);

        return `${min}m e ${seg}s`;
    }

    function patio() {
        function ler(): IVeiculo[] {
            return localStorage.patio ? JSON.parse(localStorage.patio) : [];
        }

        function salvar(veiculos: IVeiculo[]) {
            localStorage.setItem("patio", JSON.stringify(veiculos));
        }

        function adicionar(veiculo: IVeiculo, salva?: boolean) {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${veiculo.nome}</td>
                <td>${veiculo.placa}</td>
                <td>${veiculo.dataEntrada}</td>
                <td>
                    <button class = "delete" data-placa="${veiculo.placa}">X</button>
                </td>
            `;

            row.querySelector(".delete")?.addEventListener("click", function(){
                remover(this.dataset.placa)
            });

            $("#patio")?.appendChild(row);

            if (salva) {
                salvar([...ler(), veiculo]);
            }
        }

        function remover(placa: String) {
            const { dataEntrada, nome } = ler().find(veiculo => veiculo.placa === placa);
            const tempo = calcTempo(new Date().getTime() - new Date(dataEntrada).getTime());
            
            if(!confirm(`O veículo ${nome} permaneceu por ${tempo}. Deseja encerrar?`)) return;

            salvar(ler().filter((veiculo) => veiculo.placa !== placa));
            render();
        }

        function render() {
            $("#patio")!.innerHTML = "";
            const patio = ler();

            if(patio.length) {
                patio.forEach((veiculo) => adicionar(veiculo));
            }
        }

        return { ler, adicionar, remover, salvar, render };
    }

    patio().render();
    $("#cadastrar")?.addEventListener("click", () => {
        const nome = $("#nome")?.value;
        const placa = $("#placa")?.value;
        console.log(nome, placa);

        if(!nome || !placa ) {
            alert ("Os campos nome e placa são obrigatórios");
            return;
        }

        patio().adicionar({ nome, placa, dataEntrada: new Date().toISOString() }, true);
    })
})();