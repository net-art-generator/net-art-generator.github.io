//// BROWSERABFRAGE
var ie4 = ((document.all) && (navigator.appVersion.indexOf('MSIE 4')!=-1)) ? true:false;
var ie5 = ((document.getElementById) && (navigator.appVersion.indexOf('MSIE 5')!=-1)) ? true:false;
var ie6 = ((document.getElementById) && (navigator.appVersion.indexOf('MSIE 6')!=-1)) ? true:false;
var ie7 = ((document.getElementById) && (navigator.appVersion.indexOf('MSIE 7')!=-1)) ? true:false;
var ie8 = ((document.getElementById) && (navigator.appVersion.indexOf('MSIE 8')!=-1)) ? true:false;
var ie9 = ((document.getElementById) && (navigator.appVersion.indexOf('MSIE 9')!=-1)) ? true:false;
var ie10 = ((document.getElementById) && (navigator.appVersion.indexOf('MSIE 10')!=-1)) ? true:false;
var ns4 = ((document.layers) && (navigator.appVersion.indexOf('4')!=-1))? true:false;
var ns6 = ((document.getElementById) && (navigator.appName == 'Netscape')) ? true:false;
var opera = (navigator.appName == 'Opera') ? true:false;
var LayerAktiv = false;

//browsererkennung
var isMinNS4 = (navigator.appName.indexOf("Netscape") >= 0 && parseFloat(navigator.appVersion) >= 4&&parseFloat(navigator.appVersion) < 5) ? 1 : 0;
var isMinNS6 = (isMinNS4 && navigator.userAgent.indexOf("Gecko")>=0) ? 1 : 0;
var isMinIE4 = (document.all) ? 1 : 0;
var isMinIE5 = (isMinIE4 && navigator.appVersion.indexOf("5.")) >= 0 ? 1 : 0;
var isDOM = (document.getElementById) ? 1 : 0;
var isMac = (navigator.appVersion.indexOf("Mac",0) >= 0) ? 1 : 0;
var isOpera = (navigator.userAgent.toLowerCase().indexOf('opera') >= 0) ? 1 : 0;



//   ******* BILDER AKTIVIEREN
function imgOn(imgName) {
	if (isDOM) {
		//alert('dom');
		document.getElementById(imgName).src = eval(imgName+"on.src");
		} else {
		//alert('nodom');
		document[imgName].src=eval(imgName+"on.src");
		}
	}
	
//   ******* BILDER DEAKTIVIEREN
function imgOff(imgName) {
	if (isDOM) {
		document.getElementById(imgName).src = eval(imgName+"off.src");
		} else {
		document[imgName].src=eval(imgName+"off.src");
		}
	}

//   ******* BILDERWECHSEL
function changer(imgid, imgurl)
{
	eval('document.images.' + imgid + '.src = "' + imgurl + '"');
}
	



//   ******* BILDER ANZEIGEN
function ShowLayer(LayerName)
 {  if ((ns6)||(ie5)||(ie6)||(ie7)||(ie8)||(ie9)||(ie10)||(opera))
       { document.getElementById(LayerName).style.visibility="visible"; 
       }
    if (ns4)
       { document.layers[ LayerName ].visibility="visible";
       }
    if (ie4)
       { document.all[ LayerName ].style.visibility="visible";
       }
 }

//   ******* BILDER AUSBLENDEN
function HideLayer(LayerName)
 {  if ((ns6)||(ie5)||(ie6)||(ie7)||(ie8)||(ie9)||(ie10)||(opera))
       { document.getElementById(LayerName).style.visibility="hidden";
       }
    if (ns4)
       { document.layers[ LayerName ].visibility="hidden";
       }
    if (ie4)
       { document.all[ LayerName ].style.visibility="hidden";
       }
 }

