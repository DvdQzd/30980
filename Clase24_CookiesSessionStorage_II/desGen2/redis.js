// // Poner en marcha el servidor de base de datos Redis y conectar su cliente CLI.

// // Realizar las siguientes tareas:
// // Listar la información total en la base.
// // Crear 5 claves sin tiempo de expiración que contengan nombres de productos.
// // Listar nuevamente toda la información.
// // Mostrar el contenido de cada una de las claves de productos.
// // Agregar un producto más, fijando un tiempo de vida de 30 segundos.
// // Listar el nuevo producto y su tiempo de expiración.
// // Verificar que al transcurrir ese tiempo, el producto desaparezca del listado general.

// localhost:6379> set producto1 mesa
// OK
// localhost:6379> set producto2 monitor
// OK
// localhost:6379> set producto3 teclado
// OK
// localhost:6379> set producto4 mouse
// OK
// localhost:6379> set producto5 notebook
// OK
// localhost:6379> keys *
// 1) "producto5"
// 2) "producto2"
// 3) "producto3"
// 4) "producto1"
// 5) "producto4"
// localhost:6379> get producto1
// "mesa"
// localhost:6379> get producto2
// "monitor"
// localhost:6379> get producto3
// "teclado"
// localhost:6379> get producto4
// "mouse"
// localhost:6379> get producto5
// "notebook"
// localhost:6379> get producto6 {nombre: hernan}
// (error) ERR wrong number of arguments for 'get' command
// localhost:6379> set producto6 "{nombre: cosmes}" EX 5
// OK
// localhost:6379> get producto6
// "{nombre: cosmes}"
// localhost:6379> get producto6
// (nil)
// localhost:6379> get producto6
// (nil)
// localhost:6379> get producto6ç
// (nil)
// localhost:6379> set producto6 "{nombre: cosmes}" EX 10
// OK
// localhost:6379> get producto6
// "{nombre: cosmes}"
// localhost:6379> get producto6
// "{nombre: cosmes}"
// localhost:6379> keys *
// 1) "producto6"
// 2) "producto5"
// 3) "producto2"
// 4) "producto3"
// 5) "producto1"
// 6) "producto4"
// localhost:6379> keys *
// 1) "producto5"
// 2) "producto2"
// 3) "producto3"
// 4) "producto1"
// 5) "producto4"
//  FLUSHALL --> borra todas las key
//  DEL key --> borra una key