export const categories = [
    {
        "id": 1,
        "nombre": "Carnes",
        "descripcion": "Deliciosas opciones de carnes asadas y grill."
    },
    {
        "id": 2,
        "nombre": "Bebidas",
        "descripcion": "Refrescantes bebidas frías y calientes."
    },
    {
        "id": 3,
        "nombre": "Hamburguesas",
        "descripcion": "Sabrosas hamburguesas con una variedad de toppings."
    },
    {
        "id": 4,
        "nombre": "Pizza",
        "descripcion": "Pizzas frescas y deliciosas para todos los gustos."
    },
    {
        "id": 5,
        "nombre": "Ensaladas",
        "descripcion": "Ensaladas frescas y saludables con aderezos únicos."
    },
    {
        "id": 6,
        "nombre": "Postres",
        "descripcion": "Dulces deliciosos para satisfacer tu paladar."
    },
    {
        "id": 7,
        "nombre": "Mariscos",
        "descripcion": "Platillos con deliciosos mariscos frescos del día."
    },
    {
        "id": 8,
        "nombre": "Vegetariano",
        "descripcion": "Opciones vegetarianas llenas de sabor y frescura."
    },
    {
        "id": 9,
        "nombre": "Pastas",
        "descripcion": "Pastas calientes y reconfortantes para cualquier ocasión."
    },
    {
        "id": 10,
        "nombre": "Desayuno",
        "descripcion": "Platillos deliciosos para comenzar el día con energía."
    },
    {
        "id": 11,
        "nombre": "Asian Fusion",
        "descripcion": "Combinaciones únicas de sabores asiáticos."
    },
    {
        "id": 12,
        "nombre": "Comida Rápida",
        "descripcion": "Opciones rápidas y deliciosas para satisfacer antojos."
    },
    {
        "id": 13,
        "nombre": "Cervezas Artesanales",
        "descripcion": "Una selección de cervezas artesanales para acompañar tu comida."
    },
    {
        "id": 14,
        "nombre": "Vinos",
        "descripcion": "Variedad de vinos para maridar con tus platillos favoritos."
    },
    {
        "id": 15,
        "nombre": "Comida Picante",
        "descripcion": "Platillos con un toque picante para los amantes del sabor intenso."
    },
    {
        "id": 16,
        "nombre": "Tacos",
        "descripcion": "Tacos con una variedad de guisos y salsas para todos los gustos."
    }
]

export const food = [
    {
        "id": 1,
        "nombre": "Huevos Rancheros",
        "descripcion": "Huevos estrellados sobre tortillas de maíz bañados en salsa ranchera.",
        "precio": 8.99,
        "preparable": true,
        "categorias": "Desayuno"
    },
    {
        "id": 2,
        "nombre": "Coca Cola",
        "descripcion": "Refresco carbonatado y refrescante.",
        "precio": 1.99,
        "preparable": false,
        "categorias": "Bebidas"
    },
    {
        "id": 3,
        "nombre": "Hamburguesa Doble Carne",
        "descripcion": "Doble porción de carne jugosa con queso, lechuga y tomate.",
        "precio": 12.99,
        "preparable": true,
        "categorias": "Hamburguesas, Comida Rápida"
    },
    {
        "id": 4,
        "nombre": "Hotdog 20 cm",
        "descripcion": "Salchicha de calidad en un pan suave de 20 cm con tus toppings favoritos.",
        "precio": 6.99,
        "preparable": true,
        "categorias": "Comida Rápida"
    },
    {
        "id": 5,
        "nombre": "Ensalada César",
        "descripcion": "Mezcla fresca de lechuga romana, crutones, queso parmesano y aderezo César.",
        "precio": 9.99,
        "preparable": true,
        "categorias": "Ensaladas"
    },
    {
        "id": 6,
        "nombre": "Pizza Margarita",
        "descripcion": "Pizza clásica con salsa de tomate, mozzarella fresca y albahaca.",
        "precio": 14.99,
        "preparable": true,
        "categorias": "Pizza"
    },
    {
        "id": 7,
        "nombre": "Sushi Variado",
        "descripcion": "Selección de sushi fresco con nigiri, sashimi y rollos variados.",
        "precio": 18.99,
        "preparable": true,
        "categorias": "Asian Fusion"
    },
    {
        "id": 8,
        "nombre": "Tacos al Pastor",
        "descripcion": "Tacos con carne de cerdo marinada, piña, cilantro y cebolla.",
        "precio": 10.99,
        "preparable": true,
        "categorias": "Tacos, Comida Rápida"
    },
    {
        "id": 9,
        "nombre": "Pasta Alfredo",
        "descripcion": "Pasta fettuccine con salsa Alfredo cremosa y pollo a la parrilla.",
        "precio": 12.99,
        "preparable": true,
        "categorias": "Pastas"
    },
    {
        "id": 10,
        "nombre": "Brownie de Chocolate",
        "descripcion": "Brownie decadente de chocolate con nueces y helado de vainilla.",
        "precio": 7.99,
        "preparable": false,
        "categorias": "Postres"
    },
    {
        "id": 11,
        "nombre": "Agua de Horchata",
        "descripcion": "Agua fresca de arroz con leche, canela y vainilla",
        "precio": 8.99,
        "preparable": false,
        "categorias": "Bebidas"
    },
    {
        "id": 12,
        "nombre": "Agua de Jamaica",
        "descripcion": "Agua fresca de flor de jamaica con un toque de limón.",
        "precio": 4.99,
        "preparable": false,
        "categorias": "Bebidas"
    }
]


export const discountFood = [
    {
        "id": 1,
        "nombre": "Pollo a la Parrilla",
        "descripcion": "Pechuga de pollo jugosa a la parrilla con hierbas y limón.",
        "precio": 12.99,
        "preparable": true,
        "categorias": "Carnes, Platos Principales"
    },
    {
        "id": 2,
        "nombre": "Ensalada de Salmón",
        "descripcion": "Ensalada fresca con filete de salmón a la parrilla, aguacate y aderezo de limón.",
        "precio": 14.99,
        "preparable": true,
        "categorias": "Pescados, Ensaladas"
    },
    {
        "id": 3,
        "nombre": "Pasta Primavera",
        "descripcion": "Pasta con verduras frescas, tomate cherry y salsa de albahaca.",
        "precio": 10.99,
        "preparable": true,
        "categorias": "Pastas, Vegetariano"
    },
    {
        "id": 4,
        "nombre": "Tacos de Camarones",
        "descripcion": "Tacos con camarones a la plancha, repollo rallado y salsa picante.",
        "precio": 16.99,
        "preparable": true,
        "categorias": "Mariscos, Comida Picante"
    },
    {
        "id": 5,
        "nombre": "Risotto de Champiñones",
        "descripcion": "Risotto cremoso con champiñones frescos y queso parmesano.",
        "precio": 11.99,
        "preparable": true,
        "categorias": "Arroces, Vegetariano"
    }
]
