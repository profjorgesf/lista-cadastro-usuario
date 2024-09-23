var listaRegistros = {
    ultimoIdGerado:0,
    usuarios:[
        {id:1 , nome:'Cassio', fone:'41 98480-0001'},
        {id:2 , nome:'Pedro', fone:'41 98480-0002'},
        {id:3 , nome:'Maria', fone:'41 98480-0003'},
        {id:4 , nome:'Amanda', fone:'41 98480-0004'},
    ]
}

function desenhar(){
    const tbody = document.getElementById('listaRegistrosBody');
    if(tbody){
        tbody.innerHTML = listaRegistros.usuarios
        .sort((a, b) => {
            return a.nome < b.nome ? -1: 1
        })
        
        
        .map(usuario => {
            return `<tr>
                <td>${usuario.id}</td>
                <td>${usuario.nome}</td>
                <td>${usuario.fone}</td>            
            </tr>`
        }).join('')
    }
}

function insertUsuario(nome, fone){
    const id = listaRegistros.ultimoIdGerado + 1;
    listaRegistros.ultimoIdGerado = id;
    listaRegistros.usuarios.push({
        id, nome, fone
    })
    desenhar()
    visualizar('lista')
}

function editUsuario(id, nome, fone){

}

function deleteUsuario(id){

}


function visualizar(pagina){
    document.body.setAttribute('page',pagina)
    if(pagina === 'cadastro'){
        document.getElementById('nome').focus();
    }
}

function submeter(e){
    e.preventDefault()
    const data = {
        id: document.getElementById('id').value,
        nome: document.getElementById('nome').value,
        fone: document.getElementById('fone').value,
    }
    if(data.id ){
        editUsuario(...data)
    }else{
        insertUsuario(data.nome, data.fone)
    }
    console.log(data)
}

window.addEventListener('load',() => {
    desenhar()
    document.getElementById('cadastroRegistro').addEventListener
    ('submit',submeter)



});