function cartao(){
    let nome = document.getElementById('nome').value
    let sobrenome = document.getElementById('sbnm').value
    let telefone = document.getElementById('fone').value
    let profissao = document.getElementById('profi').value
    let email = document.getElementById('email').value

    document.getElementById("nome2").innerHTML = nome +" "+ sobrenome 
    document.getElementById("cllfone").innerHTML = telefone
    document.getElementById("profissao2").innerHTML = profissao
    document.getElementById("email2").innerHTML = email
}