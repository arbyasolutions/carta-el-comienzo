// Carta para QR. Los textos y precios proceden literalmente de plan/carta-completa.md.
window.CARTA_QR = {
  telefono: "647 565 299",
  reservas: "https://www.google.com/maps/reserve/v/dine/c/3qDbhKBo5BY",
  horario: "Lunes a sábado 12:30–16:00 y 20:00–23:00 · Domingo cerrado",
  burgers: [
    {
      name: "Black Edition",
      price: "16,90 €",
      ingredients:
        "pan negro, queso ahumado en roble 48 h, confitura de cecina, parmesano, salsa Emmy, jeringuilla de cheddar",
      tag: "Burger del mes",
      photo: "burger-black-edition",
      isNew: true,
    },
    {
      name: "Capo di Burger",
      price: "16,90 €",
      ingredients: "provolone, pesto italiano, burrata, parmesano",
      awards: ["Mejor burger de la península ibérica 2026"],
      medals: ["Mejor burger P. Ibérica 2026"],
      photo: "burger-capo-di-burger",
    },
    {
      name: "Bacon Lovers",
      price: "16,90 €",
      ingredients:
        "dry aged, queso ahumado 48 h, mermelada de bacon USA, cremoso de queso, chips de queso",
      awards: ["Mejor hamburguesa de España 2025"],
      medals: ["Mejor burger España 2025"],
      photo: "burger-bacon-lovers",
    },
    {
      name: "La Comenzada",
      price: "16,90 €",
      ingredients:
        "vaca madurada, cebolla caramelizada, pepinillos, bacon crunchy, mayotrufa, salsa El Comienzo",
      awards: ["Mejor burger de Castilla y León", "Top 15 de España 2023"],
      medals: ["Mejor burger CyL", "Top 15 España 2023"],
      poster: "#FFBA00",
    },
    {
      name: "La Patrona",
      price: "16,90 €",
      ingredients:
        "pan potato, carne dry aged, relish de pepinillo caramelizado, reducción de carne, mayo",
      awards: [
        "Mejor burger de Castilla y León",
        "Finalista mejor hamburguesa del mundo",
      ],
      medals: ["Mejor burger CyL", "Finalista mundial"],
      poster: "#E459C7",
    },
    {
      name: "La Dulzona",
      price: "16,90 €",
      ingredients:
        "pan de donut, rubia gallega 50 días, cheddar, salsa bourbon, bacon, tierra de galleta",
      photo: "burger-la-dulzona",
    },
    {
      name: "Brutalcheese",
      price: "16,90 €",
      ingredients:
        "triple carne, cheddar, bacon, huevos revueltos trufados, cabra, pimientos",
      photo: "burger-brutalcheese",
    },
    {
      name: "Catarata de Cheddar",
      price: "15,90 €",
      ingredients: "doble carne, cheddar, bacon, cremoso de queso",
      photo: "burger-catarata-cheddar",
    },
    {
      name: "Smashburger",
      price: "14,90 €",
      ingredients: "doble carne, cheddar, pepinillos, bacon",
      tag: "Unidades limitadas al día",
      photo: "burger-smashburger",
    },
    {
      name: "Quiero Pollo",
      price: "12,90 €",
      ingredients: "contramuslo marinado, piel crunchy, cheddar ahumado",
      poster: "#22C7C0",
    },
    {
      name: "Doblecheese",
      price: "12,90 €",
      ingredients: "doble carne, cheddar, bacon",
      photo: "burger-doblecheese",
    },
  ],
  sections: [
    {
      id: "entrantes",
      name: "Entrantes",
      color: "#22c7c0",
      items: [
        {
          name: "Alitas de pollo a baja temperatura",
          description: "Con nuestra salsa secreta. 8 unidades",
          price: "13,90 €",
          photo: "alitas",
        },
        {
          name: "Emmy Jam Fríes",
          description:
            "Patatas cargadas hasta el límite con salsa Emmy (receta USA) y mermelada de bacon ahumado. Peligro: crean adicción",
          price: "13,90 €",
          photo: "emmy-jam-fries",
        },
        {
          name: "Tequeños",
          description: "Acompañados de nuestra mermelada de tomate. 6 unidades",
          price: "10,90 €",
          photo: "tequenos",
          gallery: ["tequenos", "tequenos-mermelada"],
        },
        {
          name: "Croquetas premium",
          description: "Consultar sabores. 8 unidades",
          price: "13,90 €",
        },
        {
          name: "Croquetas de magret de pato confitado",
          description:
            "Con seta shiitake y reducción de mandarina, coronada con steak tartar de pato, carpaccio de seta y lingote de mandarina. 8 unidades",
          price: "14,90 €",
          photo: "croquetas-pato",
        },
        {
          name: "Croquetas variadas",
          description: "Ambos sabores. 8 unidades",
          price: "14,50 €",
          photo: "croquetas-variadas",
        },
        {
          name: "Huevos rotos con jamón al aroma de trufa",
          price: "14 €",
        },
        {
          name: "Patatas dos salsas",
          price: "5,90 €",
        },
        {
          name: "Fingers de pollo",
          description: "Solomillitos de pollo empanado",
          price: "11,90 €",
        },
        {
          name: "Nachos",
          description:
            "Guacamole con pico de gallo, queso agrio, crema de queso, chili y totopos",
          price: "13,90 €",
        },
        {
          name: "Nachos pulled",
          description:
            "Pulled pork a baja temperatura, guacamole con pico de gallo, queso agrio, crema de queso",
          price: "15,90 €",
          photo: "nachos-pulled",
        },
        {
          name: "Patatas pulled pork",
          description:
            "Patatas fritas con pulled pork a baja temperatura y nuestra salsa ranchera",
          price: "14,90 €",
          photo: "patatas-pulled-pork",
        },
        {
          name: "Patatas cheddar bacon",
          description: "Patatas con crema de queso y virutas de bacon",
          price: "10,90 €",
        },
        {
          name: "Ensalada de queso de cabra",
          price: "12,90 €",
          photo: "ensalada-cabra",
        },
        {
          name: "Ensalada de burrata",
          price: "13,90 €",
          photo: "ensalada-burrata",
        },
      ],
    },
    {
      id: "carnes",
      name: "Carnes",
      color: "#ff5b14",
      items: [
        {
          name: "Steak tartar de solomillo cortado a cuchillo",
          price: "29,90 €",
          photo: "steak-tartar",
        },
        {
          name: "Cachopo al estilo El Comienzo",
          price: "23,90 €",
        },
        {
          name: "Chuletón de Ávila",
          description: "Según mercado",
          price: "Según mercado",
          photo: "chuleton",
        },
        {
          name: "Entrecot de pata negra avileña",
          description: "Según mercado",
          price: "Según mercado",
        },
        {
          name: "Chuleta de vaca rubia gallega",
          description: "50 días de maduración",
          price: "60 €/kg",
        },
      ],
    },
    {
      id: "menu",
      name: "Menú del día",
      color: "#ff5b14",
      type: "menu",
      price: "16,90 €",
      schedule: "Lunes a viernes, 13:00–15:45",
      includes:
        "Aperitivo de bienvenida (cortesía de la casa) + primero + segundo + postre. Incluye pan, agua, vino, casera, postre o café. Todos los platos elaborados por nosotros y completamente caseros.",
      primeros: [
        "Ensalada César",
        "Pasta a la carbonara (receta fusión italiana-española)",
        "Patatas revolconas preñadas con huevo frito, torreznos de Soria y pimentón de la Vera",
        "Crema fina de calabacín e ibérico crujiente",
        "Pisto manchego con huevo",
      ],
      segundos: [
        "Nuestro churrasco black angus a la parrilla con aceite de ajo",
        "Secreto de cerdo ibérico sobre base de parmentier trufada",
        "Contramuslo de pollo marinado al estilo EC",
        "Chipirones a la plancha con patatas a la panadera y alioli",
        "Merluza confitada con esencia riojana",
      ],
      suplementos: [
        {
          name: "Nuestro cachopo del oriente asturiano de cabra y confitura de pimientos / Entrecot de avileña a la parrilla",
          price: "34,90 €",
        },
        {
          name: "Steak tartar de solomillo cortado a cuchillo con yema de huevo curada",
          price: "35,90 €",
        },
        {
          name: "Chuletón de Ávila a la parrilla con su guarnición",
          price: "39,90 €",
        },
      ],
      postres: [
        "Tarta de queso cremosa",
        "Tarta El Comienzo (finalista mejor tarta de España)",
        "Tarta cremosa Nutella",
        "Tarta cremosa Oreo",
        "Fruta del tiempo",
      ],
    },
    {
      id: "arroces",
      name: "Arroces",
      color: "#a93bff",
      intro:
        "Por encargo. Seco, meloso o caldoso, a gusto del cliente. También para llevar.",
      order: true,
      items: [
        {
          name: "Arroz con chuletón",
          description: "2 personas",
          price: "49 €",
          photo: "arroz-chuleton",
        },
        {
          name: "Arroz con carabineros",
          price: "35,90 €",
        },
        {
          name: "Arroz con bogavante",
          price: "29,90 €",
        },
        {
          name: "Arroz con centollo",
          price: "24,90 €",
        },
        {
          name: "Paella mixta",
          price: "17,90 €",
        },
        {
          name: "Arroz negro con alioli",
          price: "17,90 €",
        },
      ],
    },
    {
      id: "postres",
      name: "Postres",
      color: "#e459c7",
      items: [
        {
          name: "Torrija de brioche caramelizada en mesa con helado artesanal",
          price: "7,50 €",
          photo: "torrija",
        },
        {
          name: "Tarta de queso",
          price: "6,90 €",
          photo: "tarta-queso",
        },
        {
          name: "Tarta El Comienzo",
          price: "7,90 €",
          award: "Finalista mejor tarta de España",
          photo: "tarta-el-comienzo",
        },
        {
          name: "Tarta Happy Hippo",
          price: "7,90 €",
          photo: "tarta-happy-hippo",
        },
        {
          name: "Tarta pistacho ibérico",
          price: "7,90 €",
        },
        {
          name: "Tarta Oreo",
          price: "7,90 €",
          photo: "tarta-oreo",
        },
        {
          name: "Tarta Nutella",
          price: "7,90 €",
        },
        {
          name: "Coulant con helado artesanal",
          description: "Consultar sabores",
          price: "7,90 €",
        },
      ],
    },
    {
      id: "tartas",
      name: "Tartas enteras",
      color: "#e459c7",
      intro: "Por encargo.",
      order: true,
      items: [
        {
          name: "Tarta cremosa El Comienzo",
          price: "49,90 €",
          award: "3.ª mejor tarta de España",
          medals: ["3.ª mejor tarta España"],
          photo: "tarta-el-comienzo",
        },
        {
          name: "Tarta cremosa de pistacho",
          price: "49,90 €",
        },
        {
          name: "Tarta cremosa Happy Hippo",
          price: "49,90 €",
          photo: "tarta-happy-hippo",
        },
        {
          name: "Tarta cremosa Pantera Rosa",
          price: "49,90 €",
          photo: "tarta-rosa",
        },
        {
          name: "Tarta cremosa Ferrero",
          price: "49,90 €",
        },
        {
          name: "Tarta cremosa de queso",
          price: "39,90 €",
          photo: "tarta-queso",
        },
        {
          name: "Tarta cremosa de chocolate blanco",
          price: "39,90 €",
        },
        {
          name: "Tarta cremosa de Nutella",
          price: "39,90 €",
        },
        {
          name: "Tarta cremosa de Oreo",
          price: "39,90 €",
          photo: "tarta-oreo",
        },
      ],
    },
    {
      id: "desayunos",
      name: "Desayunos",
      color: "#ffba00",
      intro:
        "Con café o infusión. Suplemento zumo de naranja natural: +1,50 €.",
      items: [
        {
          name: "Tostada de tomate y AOVE",
          price: "3,00 €",
        },
        {
          name: "Tostada de tomate y jamón",
          price: "3,90 €",
        },
        {
          name: "Tostada de pavo con aguacate",
          price: "4,90 €",
        },
        {
          name: "Tostada de mantequilla y mermelada",
          price: "3,00 €",
        },
        {
          name: "Croissant a la plancha con mermelada y mantequilla",
          price: "3,50 €",
        },
        {
          name: "Croissant a la plancha con jamón y queso",
          price: "5,50 €",
        },
        {
          name: "Sándwich mixto",
          price: "5,50 €",
        },
        {
          name: "Sándwich mixto con huevo",
          price: "6,50 €",
        },
        {
          name: "Bowl de yogur griego con miel, muesli y fruta",
          price: "4,90 €",
        },
        {
          name: "Tarta de queso",
          price: "6,90 €",
        },
        {
          name: "Tarta El Comienzo",
          price: "7,90 €",
        },
      ],
      groups: [
        {
          title: "Aperitivos a la plancha",
          intro: "Al momento.",
          items: [
            "Lomo queso",
            "Bacon queso",
            "Chipirón alioli",
            "Panceta",
            "Magreta queso",
            "Magreta alioli",
            "Sándwich mixto",
          ],
        },
      ],
    },
    {
      id: "bebidas",
      name: "Bebidas",
      color: "#22c7c0",
      items: [
        {
          name: "Agua osmotizada premium",
          price: "2,50 €",
        },
        {
          name: "Aquarius limón 300 ml",
          price: "3,60 €",
        },
        {
          name: "Aquarius naranja 300 ml",
          price: "3,60 €",
        },
        {
          name: "Nestea 300 ml",
          price: "3,60 €",
        },
        {
          name: "Coca-Cola / Zero / Zero Zero",
          price: "3,50 €",
        },
        {
          name: "Botellín Mahou roja",
          price: "2,50 €",
        },
        {
          name: "Tercio Alhambra Reserva",
          price: "3,60 €",
        },
        {
          name: "Tercio 0,0 tostada",
          price: "3,50 €",
        },
        {
          name: "Tercio El Comienzo",
          price: "3,60 €",
        },
        {
          name: "Tercio radler",
          price: "3,50 €",
        },
        {
          name: "Tercio sin gluten",
          price: "3,50 €",
        },
      ],
    },
    {
      id: "vinoteca",
      name: "Vinoteca",
      color: "#a93bff",
      groups: [
        {
          title: "Ribera del Duero",
          items: [
            {
              name: "Traslascuestas",
              price: "18,90 €",
            },
            {
              name: "La Planta 2020",
              description: "100 % tempranillo",
              price: "18,90 €",
            },
            {
              name: "Finca Resalso",
              description: "Emilio Moro",
              price: "21,90 €",
            },
            {
              name: "Traslascuestas Crianza 2019",
              price: "23,90 €",
            },
            {
              name: "Emilio Moro",
              description: "100 % tempranillo",
              price: "34,90 €",
            },
            {
              name: "Matarromera Crianza 2018",
              price: "34,90 €",
            },
            {
              name: "Malleolus Emilio Moro",
              price: "49,90 €",
            },
          ],
        },
        {
          title: "Rioja",
          items: [
            {
              name: "Navajas Joven",
              price: "13,90 €",
            },
            {
              name: "Cune Crianza",
              price: "15,90 €",
            },
            {
              name: "Marqués de Cáceres Crianza 2018",
              price: "19,90 €",
            },
            {
              name: "Fernández de Piérola Crianza 2018",
              price: "22,90 €",
            },
            {
              name: "Marqués de Riscal Reserva 2017",
              price: "29,90 €",
            },
            {
              name: "Marqués de Riscal XR",
              price: "49,90 €",
            },
          ],
        },
        {
          title: "Albariño",
          items: [
            {
              name: "Faustino Rivero Ulecia",
              description: "D.O. Rías Baixas",
              price: "19,90 €",
            },
          ],
        },
        {
          title: "Blancos",
          items: [
            {
              name: "Four Lines Rueda Verdejo 2021",
              price: "12,90 €",
            },
            {
              name: "Yllera 5.5",
              price: "14,90 €",
            },
          ],
        },
      ],
    },
  ],
};
