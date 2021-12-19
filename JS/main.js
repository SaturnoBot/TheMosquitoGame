const toggleSwitch = document.querySelector('input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

var i = 0;



if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if(currentTheme === 'red-mode') {
        toggleSwitch.checked = true;
        document.body.classList.toggle('red-mode');
    }
}

function switchTheme(e) {
    if (e.target.checked){
        document.documentElement.setAttribute('data-theme', 'red-mode');
        localStorage.setItem('theme', 'red-mode');
        document.body.classList.toggle('red-mode');
    }
    else {  document.documentElement.setAttribute('data-theme', 'green-mode');
            localStorage.setItem('theme', 'green-mode');
            document.body.classList.toggle('red-mode');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);



$('.nombreAleatorio').click(() => {
    fetch('./Json/nombres.json')
        .then(response => response.json())
        .then(nombres => {
            const random = Math.floor(Math.random() * nombres.length)
            $('#nombre').val(nombres[random].nombre);
        })
})

$("#formUsuario").submit((e) => {
    e.preventDefault()
    let datosFormulario = new FormData(e.target)
    const usuario = new Usuario(datosFormulario.get("nombre"), 0)
    localStorage.setItem('Usuario', JSON.stringify(usuario))
    let usuariosId = document.querySelectorAll('[id = "usuario"]')
    for (var i = 0; i < usuariosId.length; i + 10) {
        usuariosId[i].innerHTML = usuario.nombre
    }
})







$('#restart, #restart2, #restart3, #restart4').click(() => {
     $('#contenido').hide()
     $('#caratula, #menu').show()
})



$('#inicio').click(() => {
    $('#menu').hide()
    $('#crearUsuario').show()
    $('#crearUsuario').attr('style', 'display:flex');
}) 

$('#start').click(() =>{
    $('#formUsuario, #start, #nombreAleatorio, #crearUsuario').hide()
    $('#txt1').show()
})

$('#Btn1').click(() => {
    $('#Btn1, #Btn2').hide()
    $('#caminoValiente').show()
    
})

$('#Btn1a').click(() =>{
    $('#Btn1a, #Btn2a').hide()
    $('#caminoPadre').show()
      if (i < 100 ) {
            i + 10;
        } else if (i = i + 10) {
            i = 0;
        }
        document.getElementsByClassName("display").innerHTML = i;
})

$('#Btn2a').click(() => {
    $('#Btn1a, #Btn2a').hide()
    $('#caminoHacha').show()
      if (i < 100 ) {
            i + 15;
        } else if (i = i + 10) {
            i = 0;
        }
        document.getElementsByClassName("display").innerHTML = i;
})

$('#Btn2').click(() =>  {
    $('#Btn1, #Btn2').hide()
    $('#caminoVeneno').show()
      if (i < 100 ) {
            i + 5;
        } else if (i = i + 10) {
            i = 0;
        }
        document.getElementsByClassName("display").innerHTML = i;
})

$('#Btn3a').click(() => {
    $('#Btn3a, #Btn3b').hide()
    $('#caminoMadre').show()
      if (i < 100 ) {
            i + 20;
        } else if (i = i + 10) {
            i = 0;
        }
        document.getElementsByClassName("display").innerHTML = i;
})

$('#Btn3b').click(() => {
    $('#Btn3a, #Btn3b').hide()
    $('#caminoFuego').show()
      if (i < 100 ) {
            i + 10;
        } else if (i = i + 10) {
            i = 0;
        }
        document.getElementsByClassName("display").innerHTML = i;
})


