// make the request to the login endpoint
async function getRegister(e) {
  e.preventDefault();

  var loginUrl = "/register";

  var user = document.getElementById("nombre").value;
  var direccion = document.getElementById("direccion").value;
  var password = document.getElementById("password").value;
  var sendObject = JSON.stringify({
    nombre: user,
    direccion: direccion,
    password: password,
  });
  try {
    const response = await fetch(loginUrl, {
      method: 'POST',
      body: sendObject,
      headers:{
        'Content-Type': 'application/json'
      }});
      console.log(response.body);
      const token = response.headers.get("x-auth-token");
      localStorage.setItem("token", token);
      location.href = '/';
  } catch (e) {
    alert("Usuario existente!");
    console.log("Error: ", e);
  }
}

async function getLogin(e) {
  e.preventDefault();

  var loginUrl = "/login";
  var nombreElement = document.getElementById("nombre");
  var passwordElement = document.getElementById("password");
  var user = nombreElement.value;
  var password = passwordElement.value;

  var sendObject = JSON.stringify({ nombre: user, password: password });
  try {
    const response = await fetch(loginUrl, {
      method: 'POST',
      body: sendObject,
      headers:{
        'Content-Type': 'application/json'
      }});
      console.log(response.body);
      const token = response.headers.get("x-auth-token");
      localStorage.setItem("token", token);
      location.href = '/';
  } catch (e) {
    alert("Usuario existente!");
    console.log("Error: ", e);
  }
}

function logOut() {
  localStorage.removeItem("token");
}

function cargarPagina(recurso, token) {

  let xhr = new XMLHttpRequest
  xhr.open('get', recurso)
  if(token) xhr.setRequestHeader("x-access-token", token);
  xhr.addEventListener('load', () => {
    if(xhr.status == 200) {
      let contenido = xhr.response

      try {
        let error = JSON.parse(contenido)
        console.log(error)
        localStorage.removeItem('token')
        location.href = '/token-error'
      }
      catch {
        document.querySelector('main').innerHTML = contenido
      }
    }
  })
  xhr.send()
}

function cargarPlantilla(plantilla) {
  let token = localStorage.getItem('token')
  if(token) {
    console.log('Hay token')
    cargarPagina('/datos',token)
  }
  else {
    console.log('NO Hay token')
    cargarPagina('f'+plantilla+ '.html')
  }
} 

function logout() {
  localStorage.removeItem('token')
  location.href='/logout'
}

