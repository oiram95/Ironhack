// Hemos estado hablando del bendito DOM todo este tiempo valee? y vamos a tratar de simplificar las cosas a niveles extremos.

// Como estructuraremos esta clase?
// - Definicion del dom con sus conceptos basicos
// - Como seleccionar elementos del dom
// - como moverse alrededor del dom
// - como manipular elementos dentro del dom
// - Manejar Eventos dentro del dom

// Cafecito antes de empezar?

// Que es el DOM?
// El dom significa "document object model".En terminos re - sencillos podemos pensar que el dom es un arbol de nodos creados por el navegador.Cada uno de estos nodos tiene sus propias propiedades y metodos que podemos manipular con javascript.
// Esta razon es una de las porque JS es tan popular, libertad y subjetividad.

// Veamos la Imagen que les compartire (SLACK)

// Aca tenemos una representacion visual del dom

// Primero tenemos el elemento raiz que es el HTML, que se puede entender como un hijo del documento.

// Despues tenemos los elementos HEAD y el BODY que son hermanos e hijos del elemento HTML.

// Abajo del HEAD tenemos un elemento TITULO que podemos deducir que es el hijo de HEAD y es PADRE del elemento que vive dentro que es n TEXT element.

// Abajo del elemento BODY tenemos 2 hijos que vendrian siendo el elemento A y el H1 que vendrian siendo hermanos dentro del nodo BODY.

// Get Element by tagName
const wuTang = document.getElementsByTagName("p");
const wuTangSelected = wuTang[10];
console.log(wuTangSelected);
