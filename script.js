
function addItem() {
    const container = document.getElementById("servicos");
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `<input type="text" placeholder="Descrição" class="descricao">
                     <input type="number" placeholder="Quantidade" class="quantidade" value="1">
                     <input type="number" placeholder="Valor Unitário" class="valor">`;
    container.appendChild(div);
}

function gerarPDF() {
    alert("Função de geração de PDF ainda não implementada. Pode ser feita com jsPDF.");
}

document.querySelectorAll('.valor, .quantidade').forEach(el => {
    el.addEventListener('input', calcularTotal);
});

function calcularTotal() {
    let total = 0;
    document.querySelectorAll('.item').forEach(item => {
        const quantidade = parseFloat(item.querySelector('.quantidade').value) || 0;
        const valor = parseFloat(item.querySelector('.valor').value) || 0;
        total += quantidade * valor;
    });
    document.getElementById("total").textContent = total.toFixed(2);
}
