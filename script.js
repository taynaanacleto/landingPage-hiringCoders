function save_email() {
    var input = document.getElementById("email");
    localStorage.setItem("email", input.value);
   
    Swal.fire({
        title: 'Sucesso',
        text: 'Acesse sua caixa de mensagem e confira as ofertas mágicas que enviamos para você!',
        type: 'success',
        confirmButtonText: 'ok'
      })
}

