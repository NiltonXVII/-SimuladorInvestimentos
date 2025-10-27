$(document).ready(function () {
    $('[data-bs-toggle="tooltip"]').tooltip();

    const taxas_mensais = {cdb: 0.010, tesouro: 0.008, poupanca: 0.005};

    const formatar_moeda = (valor) => valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});

    function calcular_juros_compostos(valor_inicial, aporte_mensal, prazo, taxa) {
        let total = valor_inicial;
        for (let i = 0; i < prazo; i++) {
            total = (total + aporte_mensal) * (1 + taxa);
        }
        return total;
    }

    function atualizar_interface_simulacao(tipo) {
        const valor_inicial = parseFloat($(`#${tipo}_valor_inicial`).val()) || 0;
        const aporte_mensal = parseFloat($(`#${tipo}_aporte_mensal`).val()) || 0;
        const prazo = parseInt($(`#${tipo}_prazo`).val()) || 0;

        const total_investido = valor_inicial + (aporte_mensal * prazo);
        const valor_final = calcular_juros_compostos(valor_inicial, aporte_mensal, prazo, taxas_mensais[tipo]);
        const total_juros = valor_final - total_investido;

        $(`#${tipo}_resultado_total`).text(formatar_moeda(valor_final));
        $(`#${tipo}_valor_investido`).text(formatar_moeda(total_investido));
        $(`#${tipo}_total_juros`).text(formatar_moeda(total_juros));

        const percentual_investido = (total_investido / valor_final) * 100;
        const percentual_juros = (total_juros / valor_final) * 100;

        $(`#${tipo}_progresso_investido`).css('width', `${percentual_investido}%`);
        $(`#${tipo}_progresso_juros`).css('width', `${percentual_juros}%`);
    }

    ['cdb', 'tesouro', 'poupanca'].forEach(tipo => {
        $(`#formulario_${tipo}`).on('input', () => atualizar_interface_simulacao(tipo));
        atualizar_interface_simulacao(tipo);
    });
});
