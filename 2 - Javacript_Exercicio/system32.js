var price_value_1 = 0, price_value_2 = 0, price_value_3 = 0, total = 0; // Declaracao de Variaveis

function update_salad_1() { // Funcao para atualizar os valores da Primeira Salada
    var selected_value_1 = document.getElementById("salad_1_selection").value; // Pegar o valor selecionado do form "salad_1_selection"
    price_value_1 = selected_value_1 * 30; // A variavel "price_value_1" será o resultado do valor selecionado vezes 30€ 
    document.getElementById("form_salada_primaria").textContent = price_value_1 + "€"; // Substutui o conteudo no HTML pelo o produto da conta anterior
}

function update_salad_2() { // Funcao para atualizar os valores da Segunda Salada
    var selected_value_2 = document.getElementById("salad_2_selection").value;
    price_value_2 = selected_value_2 * 20; // A variavel "price_value_2" será o resultado do valor selecionado vezes 20€ 
    document.getElementById("form_salada_segunda").textContent = price_value_2 + "€"; // Substutui o conteudo no HTML pelo o produto da conta anterior
}

function update_bebida() { // Funçao para atualizar os valores da bebida
    var selected_value_3 = document.getElementById("drink_selection").value;
    price_value_3 = selected_value_3 * 1; // A variavel "price_value_3" será o resultado do valor selecionado vezes 1€ 
    document.getElementById("form_bebida").textContent = price_value_3 + "€"; // Substutui o conteudo no HTML pelo o produto da conta anterior
}

document.getElementById("salad_1_selection").addEventListener("change", update_salad_1); // Ao outro valor ser selecionado chama a funcão para atualizar o resulto e o utilizador saber quanto e que deve pagar o mesmo acontecenas 2 linhas a baixo
document.getElementById("salad_2_selection").addEventListener("change", update_salad_2); 
document.getElementById("drink_selection").addEventListener("change", update_bebida);

function finalizar_compra() { // Esta funcao e chamada ao tocar no botao "SUBMETER"
    nameInputed = document.getElementById("nameInput").value; // Substitui o valor "nameInputed" neste JS atraves do HTML
    addressInputed = document.getElementById("addressInput").value; // Substitui o valor "addressInputed" neste JS atraves do HTML
    total = price_value_1 + price_value_2 + price_value_3; // Calcula o valor total ao somar todos os preços de todos os produtos
    alert("Compra realizada com êxito\n" + "A encomenda de " + nameInputed + " irá chegar a " + addressInputed + " em 2 horas.\n" + "Total: " + total + "€\n"); // Afirma ao Cliente que a compra sucedeu e que a encomenda com valor X irá chegar àsu morada em breve
}