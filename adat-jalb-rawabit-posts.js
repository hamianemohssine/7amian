async  function extractor(){
  document.getElementById("btndo").innerHTML="انتظر ...."
  document.getElementById("btndo").removeAttribute("onclick");
  document.getElementById("links").value=""
  document.getElementById('loader').style.display="block";
    var burl = document.getElementById("urlink").value + "/sitemap.xml?page=";
    var looping = true;
    var o = 0;
    do { 
      o++;       
        var burlt = burl + o;
        await fetch('https://api.codetabs.com/v1/proxy?quest=' + burlt)
  .then(
    function(response) {
      if (response.status !== 200) {
    
        return;
      }

      // Examine the text in the response
      response.text().then(function(data) {
        // data contains all the plain html of the url you previously set, 
        // you can use it as you want, it is typeof string
        var goku = data;
        if (goku.length<130){
          looping=false;
          }
        goku = goku.replaceAll("<loc>","\n").replaceAll("</loc>","\n")
        var lines = goku.split("\n");
        var vegeta="";
        for (var i = 0; i < lines.length; i++) {
            if (lines[i].indexOf(">") == -1){
                vegeta=vegeta+lines[i]+"\n";
            }
        }
        if (vegeta.length>1){
        document.getElementById("links").value=document.getElementById("links").value + vegeta;
    }
      });
    }
  )
  
    }while(looping);
    document.getElementById('loader').style.display="none";
    document.getElementById("btndo").innerHTML="قم بجلب الروابط"
    document.getElementById("btndo").setAttribute("onclick", "extractor()");
}

function saveTextAsFile() {
    var textToWrite = document.getElementById('links').value;
    var textFileAsBlob = new Blob([ textToWrite ], { type: 'text/plain' });
    var fileNameToSaveAs = "file.txt"; //filename.extension
  
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL != null) {
      // Chrome allows the link to be clicked without actually adding it to the DOM.
      downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    } else {
      // Firefox requires the link to be added to the DOM before it can be clicked.
      downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
      downloadLink.onclick = destroyClickedElement;
      downloadLink.style.display = "none";
      document.body.appendChild(downloadLink);
    }
  
    downloadLink.click();
  }
  function hadff(){
    document.getElementById('links').value=""
  }
  function copy() {
    let textarea = document.getElementById("links");
    textarea.select();
    document.execCommand("copy");
  }
