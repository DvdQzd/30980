// ejemplo agregado para mostrar documentos dentro de documentos

db.productos.insertMany([
    {
        "Nombre": "computadora", 
        "precio" : 220000, 
        "stock": 10, 
        "caracteristicas": {
            "microprocesador": "Intel",
            "version": "i9",
            "modelo": "asidaoiwqe"
        }
    },
    {
        "Nombre": "notebook", 
        "precio" : 123456, 
        "stock": 1,
        "caracteristicas": {
            "microprocesador": "AMD",
            "version": "atr",
            "modelo": "asidaoiwqe"
        }
    },
]);