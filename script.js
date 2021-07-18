function save_email() {
  var input = document.getElementById("email");
  if (validaEmail(input.value)) {
    localStorage.setItem("email", input.value);
    Swal.fire({
      title: 'Sucesso',
      text: 'Acesse sua caixa de mensagens e confira as ofertas mágicas que enviamos para você!',
      type: 'success',
      confirmButtonText: 'ok'
    })
  } else {
    Swal.fire({
      title: 'Atenção',
      text: 'Por favor digite um e-mail válido!',
      type: 'warning',
      confirmButtonText: 'ok'
    })
  }
}
function validaEmail(email) {
  const emailRegex = /^([a-zA-Z][^<>\"!@[\]#$%¨&*()~^:;ç,\´`=+{}º\|/\\?]{1,})@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return emailRegex.test(String(email).toLowerCase())
}

