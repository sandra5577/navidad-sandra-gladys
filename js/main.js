let url = window.location.search;
let buscar = url.toLowerCase();

expresion = /([^?=]+)(=([^&*)]))/g;
hallado = buscar.match(expresion).reduce((a,p) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.slice(v.indexOf('=') + 1)), a), {});

console.log(hallado);

let nombre = document.getElementById("nombreUsuario");
nombre.innerHTML = url;
