let botaoTwitter = document.getElementById("botaoTwitter");
let texto = document.getElementById("texto");
let bPostagem = document.getElementById("postagem");
let newPost = document.getElementById("novaPostagem");

botaoTwitter.addEventListener("click", (event) => {
  texto.focus();
})
    bPostagem.addEventListener("click", (event) => {
    event.preventDefault();
    let Twittar = document.createElement("div");

  if(texto.value != ""){
      Twittar.innerHTML = 
    `<div class="post">
      <div class="post__avatar">
        <img 
          src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png" 
          alt="" 
        />
      </div>
      <div class="post__body">
          <div class="post__header">
            <div class="post__headerText">
              <h3>
                Somanath Goudar
                <span class="post__headerSpecial"
                  ><span class="material-icons post__badge"> verified </span>@somanathg</span
                >
              </h3>
            </div>
            <div class="post__headerDescription">
            <p>${texto.value}</p>
            </div>
          </div>
          <div class="post__footer">
          <span class="material-icons"> repeat </span>
          <span class="material-icons"> favorite_border </span>
          <span class="material-icons"> publish </span>
          <button class="material-icons" onclick=deleteClick(this.closest(".post").parentElement)> delete </button>
          <button class="material-icons" onclick=editClick()> edit </button>
        </div>
      </div>`
     
      newPost.insertAdjacentElement("afterbegin", Twittar);
      texto.value = "";

  } else{
  alert("Insira um texto para postar");
    }
});

function deleteClick(eventoApagar){
  newPost.removeChild(eventoApagar);
}