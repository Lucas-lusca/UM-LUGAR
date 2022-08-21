class Product{

    constructor(){
        this.id = 1;
        this.arrayProduct = [];
        this.editId = null;
    }

    // Chama a função addProduct
    toSave(){
        // Passando os valores retornados da função readData() na variavel product.
        let product = this.readData();

        // Verifica se o retorno da função validadeField é true.
        // Se for ele chama a função addProduct e passa o objeto product (que contem os valores) para ela.
        if(this.validateField(product)){ 
            if(this.editId == null){
                this.addProduct(product);
            }else{
                this.update(this.editId, product);
            }
        }

        this.listTable(); // Chamando a função listTable
        this.cancel(); // Chamando a função de cancelar

    }

    // Le os valores passado pelo usuario.
    readData(){
        let product = {}

        product.id = this.id;
        
        // Pegando o ID do HTML, ve o seu valor e salvando na variavel
        product.productName = document.getElementById('productName').value;
        product.price       = document.getElementById('price').value;

        return product;
    }

    // Valida os valores passados pelo usuario.
    validateField(product){
        let msg = "";

        if(product.productName == ''){
            msg += 'Digite o nome do produto \n';
        }

        if(product.price == ''){
            msg += 'Digite o preço do produto \n';
        }
        
        var filter_nome = /^([a-zA-Zà-úÀ-Ú]|\s+)+$/;
        if (!filter_nome.test(document.getElementById("SaveOrEdit").value)) {
            document.getElementById("SaveOrEdit").value = '';
            return false;
        }

        // Se esta varaivel msg for direrente de nula, ela é printada, caso contrario não.
        // E esta função ira retornar false.
        if(msg != ''){
            alert(msg)
            return false;
        }

        return true;
    }

    // Cria a tabela e joga para o HTML.
    listTable(){
        let tbody = document.getElementById('tbody');

        tbody.innerText = '';
        
        // Aqui eu percorro cada item do meu array e para cada um adiociono uma linha e coluna.
        for (let i = 0; i < this.arrayProduct.length; i++) {
            let tr = tbody.insertRow(); // insertRow Criando uma linha

            let td_id      = tr.insertCell(); // insertCell Criando uma coluna
            let td_product = tr.insertCell();
            let td_price   = tr.insertCell();
            let td_actions = tr.insertCell();

            // Passando os valores em cada coluna. i representa o atual produto e sua posição.
            td_id.innerText      = this.arrayProduct[i].id; // innerText é usado para adicionar o valor na coluna.
            td_product.innerText = this.arrayProduct[i].productName;
            td_price.innerText   = this.arrayProduct[i].price;
            // parar adicionar uma classe css use: td_id.classList.add('Alguma classe CSS');

            let imgEdit = document.createElement('img'); // createElemente cria um documento, nesse caso uma imagem.
            imgEdit.src = 'img/add.png'; // src Adiciona o caminho da imagem no documento criado.
            imgEdit.setAttribute("onclick", "product.edit("+ JSON.stringify(this.arrayProduct[i]) +")"); // i passa o ID para açõa.
        
            let imgDelete = document.createElement('img');
            imgDelete.src = 'img/delete.png';
            // setAttribute passa um evento para algo no HTML e passa a ação que vai executar
            imgDelete.setAttribute("onclick", "product.delete("+ this.arrayProduct[i].id +")"); // i passa o ID para açõa deletar.

            td_actions.appendChild(imgEdit); // appendChild coloca uma tag dentro de outra, nesse caso a imagem filha da td_actions.
            td_actions.appendChild(imgDelete);

        }
    }

    // Executa a função listTable.
    addProduct(product){
        product.price = parseFloat(product.price);
        this.arrayProduct.push(product); // push é usado para adicionar valor a um campo array
        this.id++;
    }

    cancel(){
        // Passa os valores digitados pelo usuario como '' (vasio).
        document.getElementById("productName").value = '';
        document.getElementById("price").value = '';

        document.getElementById("SaveOrEdit").innerText = 'Salvar';
        this.editId = null;
    }


    edit(data){
        this.editId = data.id;

        document.getElementById("productName").value = data.productName;
        document.getElementById("price").value = data.price;

        document.getElementById("SaveOrEdit").innerText = 'Atualizar';
    }

    update(id, product){
        for(let i = 0; i < this.arrayProduct.length; i++){
            if(this.arrayProduct[i].id == id){
                this.arrayProduct[i].productName = product.productName;
                this.arrayProduct[i].price = product.price;
            }
        }
    }

    // Percorre a lista e deleta o produto que o ID foi recebido da função listTable
    delete(id){
        if (confirm('Deseja mesmo deletar o produto do ID: ' + id)){ // Verifica se o alerta retornou true
            let tbody = document.getElementById('tbody');
    
            for (let i = 0; i < this.arrayProduct.length; i++) { // Percorre os produtos da lista
                if(this.arrayProduct[i].id == id){ // Verifica se o ID da lista é igual ao recebido
                    this.arrayProduct.splice(i, 1); // splice remove o objeto do array. (obs: slice não funciona)
                    tbody.deleteRow(i); // deleteRow Deleta a parte da lista desejada
                }
                
            }
            
        }

    }
    
}

var product = new Product();