

const IMAGES = [
  'https://i0.wp.com/31minutosoficial.cl/wp-content/uploads/2014/01/thumb-tulio2.png?fit=640%2C640&ssl=1',
  'https://i0.wp.com/31minutosoficial.cl/wp-content/uploads/2014/02/thumb-patana.png?w=720&ssl=1',
  'https://i0.wp.com/31minutosoficial.cl/wp-content/uploads/2014/02/thumb-bodoque.jpg?w=720&ssl=1',
  'https://i0.wp.com/31minutosoficial.cl/wp-content/uploads/2014/02/thumb-juanin.png?w=720&ssl=1',
  'https://i0.wp.com/31minutosoficial.cl/wp-content/uploads/2014/02/thumb-mariohugo.jpg?w=640&ssl=1',
  'https://i0.wp.com/31minutosoficial.cl/wp-content/uploads/2014/01/thumb-policarpo2.png?w=640&ssl=1',
  'https://i0.wp.com/31minutosoficial.cl/wp-content/uploads/2014/02/thumb-rombosman.png?w=640&ssl=1',
  'https://i0.wp.com/31minutosoficial.cl/wp-content/uploads/2014/02/thumb-guaripolo.png?w=640&ssl=1',
  'https://i0.wp.com/31minutosoficial.cl/wp-content/uploads/2014/02/thumb-huachimingo.png?w=640&ssl=1',
  'https://i0.wp.com/31minutosoficial.cl/wp-content/uploads/2014/01/thumb-tramoyas.png?w=640&ssl=1',
  'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
  'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
  'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
  'https://cdn.memegenerator.es/imagenes/base/63_thumb.jpg',
  'https://cdn.memegenerator.es/imagenes/base/22_thumb.jpg',
  'https://static.wikia.nocookie.net/los-simpsom/images/4/4a/Homero-simpson-2.jpg/revision/latest?cb=20130413015655&path-prefix=es',
  'https://static.wikia.nocookie.net/lossimpson/images/0/0b/Marge_Simpson.png/revision/latest/smart/width/250/height/250?cb=20090415001251&path-prefix=es',
  'https://static.wikia.nocookie.net/lossimpson/images/9/9d/Maggie_Simpson.png/revision/latest/smart/width/250/height/250?cb=20100529224628&path-prefix=es',
  'https://static.wikia.nocookie.net/lossimpson/images/f/f7/Robert_Terwilliger.png/revision/latest/smart/width/250/height/250?cb=20090807202844&path-prefix=es',
  'https://static.wikia.nocookie.net/lossimpson/images/6/65/Bart_Simpson.png/revision/latest/smart/width/250/height/250?cb=20100530014756&path-prefix=es',
  'https://static.wikia.nocookie.net/doblaje/images/d/d3/PatricioEstrellaBobEsponja02.png/revision/latest/smart/width/250/height/250?cb=20190515235732&path-prefix=es',
  'https://static.wikia.nocookie.net/doblaje/images/c/cb/SpongeBob.png/revision/latest/smart/width/250/height/250?cb=20220925230116&path-prefix=es',
  'https://cdn.memegenerator.es/imagenes/base/56_thumb.jpg',
  'https://cdn.memegenerator.es/imagenes/base/83_thumb.jpg',
  'https://cdn.memegenerator.es/imagenes/base/62_thumb.jpg',
  'https://cdn.memegenerator.es/imagenes/base/35_thumb.jpg',
  'https://cdn.memegenerator.es/imagenes/base/91_thumb.jpg',
  'https://cdn.memegenerator.es/imagenes/base/21_thumb.jpg',
  'https://cdn.memegenerator.es/imagenes/base/3_thumb.jpg',
  'https://cdn.memegenerator.es/imagenes/base/24_thumb.jpg',
  'https://cdn.memegenerator.es/imagenes/base/4_thumb.jpg',
  'https://cdn.memegenerator.es/imagenes/base/32_thumb.jpg',
  'https://cdn.memegenerator.es/imagenes/base/65_thumb.jpg',
  'https://cdn.memegenerator.es/imagenes/base/64_thumb.jpg',
  'https://cdn.memegenerator.es/imagenes/base/68_thumb.jpg',
  'https://cdn.memegenerator.es/imagenes/base/23_thumb.jpg',
  'https://cdn.memegenerator.es/imagenes/base/79_thumb.jpg',
  'https://cdn.memegenerator.es/imagenes/base/11_thumb.jpg',
  'https://i.pinimg.com/originals/59/23/d2/5923d2ec2cbee0cb8f4ebd53929ab80d.jpg',
  'https://i.pinimg.com/originals/c9/72/b8/c972b832c41c3c6ac4f6da38853384fc.jpg',
  'https://w7.pngwing.com/pngs/972/862/png-transparent-patrick-of-sponge-bob-patrick-star-internet-meme-know-your-meme-paddy-cartoon-meme-fictional-character.png',
  'https://w7.pngwing.com/pngs/728/846/png-transparent-youtube-know-your-meme-knuckles-the-echidna-drumroll-please-youtube-cartoon-meme-fictional-character.png',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXJfT2dFse-sTtzL7QEAtmvHxTxT-sPhqWuA&usqp=CAU'

,];

function getRandomArbitrary(min, max) {
  return Math.trunc(Math.random() * (max - min) + min);
}

class Alumno {
  constructor(id, rut, appaterno, apmaterno , nombre, carrera, items = []) {
    this.id = id;
    this.rut = rut;
    this.appaterno = appaterno;
    this.apmaterno = apmaterno;
    this.nombre = nombre;
    this.carrera = carrera;
    this.items = items;
    this.is_presente = false;
    this.img = IMAGES[getRandomArbitrary(0, IMAGES.length-1)];
    this.uid = null;
  }

  obtener() {
    let item = this.items[0];

    console.log(item);
  }

  getNombreCompleto(){
    return this.nombre + " " + this.appaterno + " " + this.apmaterno;
  }
}

// Busca todos los estado de asistencia y los deja en ausentes [0] o presente [1]
function _scriptStatusAsistencia(status = 0) {
  var asistencias = document.getElementsByClassName("radio-asistencia");

  for (let index = 0; index < asistencias.length; index++) {
    asistencias[index].removeAttribute('checked');

    if (status == 1) {
      if (asistencias[index].value == 1) {
        asistencias[index].setAttribute('checked','checked');
        asistencias[index].click();
      }
    } else {
      if (asistencias[index].value == 0) {
        asistencias[index].setAttribute('checked','checked');
        asistencias[index].click();
      }
    }
  }
}

function _scriptHandleUserTab() {
  var form = document.getElementById("form-asistencia-alumnos");
  var tables = form.getElementsByTagName("table");
  var rows;

  var mac = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);

  if (mac) {
    rows = Array.from(tables[0].querySelectorAll('tr')).slice(1);
  }else{
    rows = Array.from(tables[1].querySelectorAll('tr')).slice(1);
  }

  var data = rows.map(row => Array.from(row.querySelectorAll('td')).map(td => td.innerHTML));

  return data;
}

// Busca y cambia el estado de asistencia de un alumno en base de su uid
const _scriptChangeStatusAsistencia = (status, uid) => {
  var radioButtons = document.querySelectorAll('input.radio-asistencia[name="'+uid+'"]');

  for (let index = 0; index < radioButtons.length; index++) {
    radioButtons[index].removeAttribute('checked');
  }

  radioButtons[0].setAttribute('checked','checked');
  radioButtons[0].click();

  if (status == 1) {
    radioButtons[0].removeAttribute('checked');
    radioButtons[1].setAttribute('checked','checked');
    radioButtons[1].click();
  }
};

// Variables logica alumnos
let arraysAlumnos = [];
let itemSeleccionado = 0;
let enabledCard = false;
function addAlumno(a) {
  arraysAlumnos.push(a);
}

// LISTA - Deja a todos inactivos
function handleInasistencia() {
  var btnAusentes = document.getElementById('btn-inasistencia');
  var btnPresentes = document.getElementById('btn-inasistencia-presente');

  btnAusentes.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.scripting.executeScript(
        {
          target: { tabId: tabs[0].id },
          func:  _scriptStatusAsistencia,
        }
      ).then(() => console.log("injected a function"));
    });
  });

  btnPresentes.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.scripting.executeScript(
        {
          target: { tabId: tabs[0].id },
          function:  _scriptStatusAsistencia,
          args : [ 1 ],
        }
      );
    });
  });
}

// MENU - Cambio de panel
function handlePanel() {
  var btnPanel1 = document.getElementById('btn-cambiar-panel1');
  var btnPanel2 = document.getElementById('btn-cambiar-panel2');
  var btnPanel3 = document.getElementById('btn-cambiar-panel3');


  var panel1 = document.getElementById('panel1');
  var panel2 = document.getElementById('panel2');
  var panel3 = document.getElementById('panel3');

  btnPanel1.addEventListener('click', function() {
    panel1.removeAttribute('hidden');
    panel2.setAttribute('hidden',true);
  });

  btnPanel2.addEventListener('click', function() {
    panel2.removeAttribute('hidden');
    panel1.setAttribute('hidden',true);
  });

  btnPanel3.addEventListener('click', function() {
    panel3.removeAttribute('hidden');
    panel2.setAttribute('hidden',true);
    itemSeleccionado = 0;
    enabledCard = true;
    handlePasarLista(itemSeleccionado);
  });
}

// PANEL3 - Mostrar personaje de la lista
function handlePasarLista(item) {
  let alumno = arraysAlumnos[item];

  let id = document.getElementById('alumno-id');
  let img = document.getElementById('alumno-img');
  let nombre = document.getElementById('alumno-nombre');
  let rut = document.getElementById('alumno-rut');
  let itemPresente = document.getElementById('alumno-presente');
  let itemAusente = document.getElementById('alumno-ausente');
  let oculto = document.getElementById('alumno-items-oculto');

  id.innerHTML = alumno.id;
  img.src = alumno.img;
  nombre.innerHTML = alumno.getNombreCompleto();
  rut.innerHTML = alumno.rut;

  if (alumno.uid === null ) {
    oculto.innerHTML = alumno.items[0];

    const radioChecked = oculto.querySelector("input[type=radio]:checked");

    alumno.uid = radioChecked.name;

    if (radioChecked.value == '0') {
      alumno.is_presente = false;
    }
    if (radioChecked.value == '1') {
      alumno.is_presente = true;
    }

    arraysAlumnos[item] = alumno;
  }


  itemPresente.setAttribute('hidden',true);
  itemAusente.setAttribute('hidden',true);
  if (alumno.is_presente) {
    itemPresente.removeAttribute('hidden');
  }else{
    itemAusente.removeAttribute('hidden');
  }
}

// PANEL3 - Cambiar al siguiente o atras del listado
function handlePresenteProfeLista() {
  var btnPreview = document.getElementById('btn-preview-alumno');
  var btnNext = document.getElementById('btn-next-alumno');

  btnPreview.addEventListener('click', function() {
    if (itemSeleccionado > 0) {
      itemSeleccionado--;
    } else{
      itemSeleccionado = arraysAlumnos.length - 1;
    }
    handlePasarLista(itemSeleccionado);
  });

  btnNext.addEventListener('click', function() {
    if (itemSeleccionado < arraysAlumnos.length - 1) {
      itemSeleccionado++;
    } else {
      itemSeleccionado = 0;
    }
    handlePasarLista(itemSeleccionado);
  });

  document.addEventListener("keydown", function(event) {
    if (enabledCard) {
      if (event.key === "ArrowLeft") {
        btnPreview.click();
      }

      if (event.key === "ArrowRight") {
        btnNext.click();
      }
    }
  });
}

// PANEL2 - Recibir informacion
function handlePresenteProfe() {
  var btnBuscar = document.getElementById('btn-buscar');
  var btnPasarLista = document.getElementById('btn-cambiar-panel3');
  var textBtnPasarLista = document.getElementById('text-btn-pasar-lista');

  btnPasarLista.setAttribute('disabled',true);
  textBtnPasarLista.innerHTML = 0;

  btnBuscar.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.scripting.executeScript(
        {
          target: { tabId: tabs[0].id },
          function:  _scriptHandleUserTab
        }
      ).then((resp) => {
        arraysAlumnos = [];

        resp[0].result.forEach(function(rowData) {
          let a = new Alumno(
            rowData[0],
            rowData[1],
            rowData[2],
            rowData[3],
            rowData[4],
            rowData[5],
            [ rowData[6], rowData[7].trim() ]
          );
          addAlumno(a);
        });

        if (arraysAlumnos.length > 0) {
          btnPasarLista.removeAttribute('disabled');
          textBtnPasarLista.innerHTML = arraysAlumnos.length;
        }
      });
    });
  });
}

// PANEL3 - Cambiar estado de presente o ausente extension
function handlePresenteProfeChange() {
  var btnPresente = document.getElementById('btn-presente');
  var btnAusente = document.getElementById('btn-ausente');

  btnPresente.addEventListener('click', function() {
    arraysAlumnos[itemSeleccionado].is_presente = true;
    handlePasarLista(itemSeleccionado);
    handleChangeStatus(arraysAlumnos[itemSeleccionado].uid, 1);
  });

  btnAusente.addEventListener('click', function() {
    arraysAlumnos[itemSeleccionado].is_presente = false;
    handlePasarLista(itemSeleccionado);
    handleChangeStatus(arraysAlumnos[itemSeleccionado].uid, 0);
  });

  document.addEventListener("keydown", function(event) {
    if (enabledCard) {
      if (event.key === "a" || event.key === "ArrowUp" ) {
        btnPresente.click();
      }

      if (event.key === "s" || event.key === "ArrowDown") {
        btnAusente.click();
      }
    }
  });
}

// PANEL3 - Cambiar estado de presente o ausente pagina principal
function handleChangeStatus(uid, status) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.scripting.executeScript(
      {
        target: { tabId: tabs[0].id },
        function:  _scriptChangeStatusAsistencia,
        args: [ status, uid ]
      }
    );
  });
}
// 0 - Cuando se instala mostrara las instrucciones
// chrome.runtime.onInstalled.addListener(function(details){
//   if(details.reason === chrome.runtime.OnInstalledReason.INSTALL || details.reason === chrome.runtime.OnInstalledReason.UPDATE){
//   }
// });


// Inicia todo los script de variables
function init() {
  // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  //   chrome.scripting.executeScript(
  //     {
  //       target: { tabId: tabs[0].id },
  //       func: _scriptInit
  //     }
  //   );
  // });
}

// ACCIONES
document.addEventListener('DOMContentLoaded', function() {
  init();
  handleInasistencia();
  handlePanel();
  handlePresenteProfe();
  handlePresenteProfeLista();
  handlePresenteProfeChange();
});

