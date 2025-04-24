function toggleMode(){
    const html = document.documentElement
// alterna a classe
  if(html.classList.contains('light')){
     html.classList.remove('light')
 } else {
     html.classList.add('light')
   }
    //html.classsList.toggle('light') - este código não funcionou.

    // pegar a tag img
      const img = document.querySelector('#profile img')

      // substituir a imagem e descrição
      if(html.classList.contains('light')){
       // se tiver ligth mode, adcionar a imagem light
       img.setAttribute('src', '/assets/avatarlight.png')
       img.setAttribute('alt', 'Foto de Mayk Brito sorrindo, usando óculos escuros e blusa de couro preto e fundo roxo')
      } else {

   // se tiver sem ligth mode, manter a imagem normal
   img.setAttribute('src', '/assets/avatar.png')
   img.setAttribute('alt', 'Foto de Mayk Brito sorrindo, usando óculos e blusa de couro preto e fundo roxo')
}


}