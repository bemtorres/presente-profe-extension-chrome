

let actionInasitencia = 'let asistencias = document.getElementsByClassName("radio-asistencia"); for (let index = 0; index < asistencias.length; index++) { if (index % 3 == 0) { asistencias[index].click();}}';

chrome.runtime.onInstalled.addListener(function(details){
	if(details.reason == "install" || details.reason == "update" ){
		chrome.tabs.create( {url: "install.html"} );
	}
});

document.addEventListener('DOMContentLoaded', function() {
  var cambiarBodyButton = document.getElementById('cambiarBody');


  cambiarBodyButton.addEventListener('click', function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.executeScript(
              tabs[0].id,
              {code: actionInasitencia}
          );
      });
  });
});



