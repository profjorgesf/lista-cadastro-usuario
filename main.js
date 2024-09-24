const KEY_BD = '@usuariosestudo';


var listaRegistros = {
    ultimoIdGerado:0,
    usuarios:[
        
    ]
}

function gravarBd(){
    localStorage.setItem(KEY_BD, JSON.stringify(listaRegistros))

}

function lerBd(){
    const data = localStorage.getItem(KEY_BD)
    if(data){
        listaRegistros= JSON.parse(data)
    }
    desenhar()
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
    gravarBd()
    desenhar()
    visualizar('lista')
}

function editUsuario(id, nome, fone){

}

function deleteUsuario(id){

}

function limparEdicao(){
    
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
    lerBd()
    document.getElementById('cadastroRegistro').addEventListener
    ('submit',submeter)



});