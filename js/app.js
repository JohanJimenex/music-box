window.addEventListener("keydown", (e) => {

  const audio = document.querySelector(`audio[data-key="${e.code}"]`);
  const tecla = document.querySelector(`div[data-key="${e.code}"]`);

  if (audio == false) return; //evita que la funcion siga ejecutandoce (como un break en un loop)


  audio.currentTime = 0; // resetea el sonido a 0
  audio.play()

  tecla.classList.add("border-light");

  setTimeout(() => {
    tecla.classList.remove("border-light");
  }, 100);

})