const products = [
    {
        id: 1,
        title: "Reel Arena 4000",
        category: "pesca",
        subcat: "Frontales",
        price: null,
        oldPrice: null,
        rating: 5,
        image: "imagenes/616311530_122145454358966156_2647301794915024779_n.jpg",
        specs:4000
    },
    {
        id: 2,
        title: "Combo Black 4000",
        category: "ofertas",
        subcat: "combos",
        price: 35000,
        oldPrice: 40000,
        rating: 5,
        image: "imagenes/combo 1.jpg",
        stock: 10,
        specs: "reel 4000 metalico + caña 1,80mtrs 10/20 lbrs"
    },
    {
        id: 3,
        title: "Combo Kawana Hera 5000",
        category: "ofertas",
        subcat: "combos",
        price: 35000,
        oldPrice: 40000,
        rating: 4,
        image: "imagenes/combo2.jpg",
        stock: 8,
        specs: "reel Hera 5000 + caña 1,80mtrs 25/50 lbrs"
    },
    {
        id: 4,
        title: "Combo Kawana Hanna 5000",
        category: "ofertas",
        subcat: "combos",
        price: 35000,
        oldPrice: 40000,
        rating: 5,
        image: "imagenes/combo3.jpg",
        stock: 5,
        specs: "reel Hanna 5000 + caña 1,83mtrs 20/40 lbrs"
    },
    {
        id: 5,
        title: "Reel Rotativo Arkadium BG",
        category: "pesca",
        subcat: "reels rotativos",
        price: null,
        oldPrice: null,
        rating: 5,
        image: "imagenes/arkadium.jpg",
        stock: 6,
        specs: "Drag 15 kls | 7 rulemanes | 7:2.1 | 0.30mm/200mtrs"
    },
    {
        id: 6,
        title: "Ranas Sumax",
        category: "pesca",
        subcat: "Artificiales",
        price: null,
        oldPrice: null,
        rating: 4,
        image: "imagenes/ranas.jpg",
        stock: 15,
        specs: "Ranas artificiales sumax de 5cm y 7cm, ideales para pesca de dorado y tararira. Colores surtidos."
    },
    {
        id: 7,
        title: "Copo Engomados",
        category: "pesca",
        subcat: "Accesorios",
        price: null,
        oldPrice: null,
        rating: 4,
        image: "imagenes/copo.jpg",
        stock: 8,
        specs: "Copo engomado de 1,5kg, ideal para pesca de truchas bogas y bagres. Resistente y duradero."
    },
    {
        id: 8,
        title: "Copo Engomados",
        category: "pesca",
        subcat: "Accesorios",
        price: null,
        oldPrice: null,
        rating: 4,
        image: "imagenes/copo2.jpg",
        stock: 8,
        specs: "Copo engomado de 1,5kg, ideal para pesca de truchas bogas y bagres. Resistente y duradero."
    },
    {
        id: 9,
        title: "Anafe",
        category: "indumentaria",
        subcat: "camping",
        price: null,
        oldPrice: null,
        rating: 4,
        image: "imagenes/anafe.jpg",
        stock: 8,
        specs: "Anafe de alta calidad, gas butano ideal para acampar y salidas al aire libre."
    },
    // Precios y stock provisorios, pendientes de confirmar.
    {
        id: 14,
        title: "Alicate de Contención Maruri HSP-683",
        category: "pesca",
        subcat: "Accesorios",
        price: null,
        oldPrice: null,
        rating: 5,
        image: "imagenes/accesorios/006dc29e-e6d6-44d2-8037-45bdd6fed926.webp",
        stock: 8,
        specs: "Alicate de contención con empuñadura antideslizante y correa de seguridad."
    },
    {
        id: 15,
        title: "Aireador Marine Sport",
        category: "pesca",
        subcat: "Accesorios",
        price: null,
        oldPrice: null,
        rating: 4,
        image: "imagenes/accesorios/46e2da0579ac183d181ac2e1b024e9c5.jpg",
        stock: 8,
        specs: "Bomba de aire portátil con manguera y piedra difusora."
    },
    {
        id: 16,
        title: "Banquito Plegable de Camping",
        category: "indumentaria",
        subcat: "camping",
        price: null,
        oldPrice: null,
        rating: 4,
        image: "imagenes/accesorios/67bbac58053de326110eb2415c362dbd.jpeg",
        stock: 6,
        specs: "Asiento plegable compacto con estructura de tres patas, práctico para pesca y camping."
    },
    {
        id: 17,
        title: "Pinza de Punta Marine Sport",
        category: "pesca",
        subcat: "Accesorios",
        price: null,
        oldPrice: null,
        rating: 4,
        image: "imagenes/accesorios/7f5a36f3e637ad5aa51476df2a069257.jpg",
        stock: 10,
        specs: "Pinza de punta larga con mangos de agarre antideslizante."
    },
    {
        id: 18,
        title: "Caja Organizadora Azul",
        category: "pesca",
        subcat: "Accesorios",
        price: null,
        oldPrice: null,
        rating: 4,
        image: "imagenes/accesorios/8fa96a2ac04098d001884e1daf91fa27.jpg",
        stock: 10,
        specs: "Organizador compacto con compartimentos para guardar accesorios de pesca."
    },
    {
        id: 19,
        title: "Correa Ajustable de Transporte",
        category: "pesca",
        subcat: "Accesorios",
        price: null,
        oldPrice: null,
        rating: 4,
        image: "imagenes/accesorios/9183f335a8685b2eed7fb873c314f00f.jpg",
        stock: 8,
        specs: "Correa de hombro ajustable con enganches para facilitar el transporte del equipo."
    },
    {
        id: 20,
        title: "Cuchillo de Pesca Marine Sport",
        category: "cuchillos",
        subcat: "Accesorios",
        price: null,
        oldPrice: null,
        rating: 4,
        image: "imagenes/accesorios/b7d63fa0d07df87ff86e6976fae1f4f4.jpg",
        stock: 6,
        specs: "Cuchillo de pesca con hoja dentada y mango de agarre cómodo."
    },
    {
        id: 21,
        title: "Caja Organizadora con Divisiones",
        category: "pesca",
        subcat: "Accesorios",
        price: null,
        oldPrice: null,
        rating: 4,
        image: "imagenes/accesorios/c121d28cac66ce132f53ea502572e992.jpg",
        stock: 8,
        specs: "Caja organizadora con divisiones internas para ordenar señuelos y accesorios."
    },
    {
        id: 22,
        title: "Organizador Marine Sport de Tres Paneles",
        category: "pesca",
        subcat: "Accesorios",
        price: null,
        oldPrice: null,
        rating: 4,
        image: "imagenes/accesorios/ea7e4178c9acbb82b7325eb594994906.jpg",
        stock: 8,
        specs: "Estuche plegable de tres paneles con espacios para accesorios de pesca."
    },
    {
        id: 23,
        title: "Caja Organizadora de Gran Capacidad",
        category: "pesca",
        subcat: "Accesorios",
        price: null,
        oldPrice: null,
        rating: 4,
        image: "imagenes/accesorios/f3ef0b87ef34842f6f08508033f41ce4.jpg",
        stock: 5,
        specs: "Caja organizadora amplia con bandejas y compartimentos para equipo de pesca."
    },
    // Precios y stock provisorios, pendientes de confirmar.
    {
        id: 24,
        title: "Reel Rotativo Azul",
        category: "pesca",
        subcat: "reels rotativos",
        price: null,
        oldPrice: null,
        rating: 4,
        image: "imagenes/reeles/d4264dd8eaaa7c8532c5dedb788d0850.jpg",
        stock: 5,
        specs: "Reel rotativo con drag máximo de 8 kg y relación de giro 3.8:1."
    },
    {
        id: 25,
        title: "Marine Sport Forza BG",
        category: "pesca",
        subcat: "reels rotativos",
        price: null,
        oldPrice: null,
        rating: 5,
        image: "imagenes/reeles/CARRETILHA-MS-FORZA-BG-GTS-SHI-CARRETILHA-FORZA-BG-MARINE-1.jpg",
        stock: 4,
        specs: "Reel rotativo Forza BG de Marine Sport."
    },
    {
        id: 26,
        title: "Marine Sport Contender Ocean BG",
        category: "pesca",
        subcat: "reels rotativos",
        price: null,
        oldPrice: null,
        rating: 5,
        image: "imagenes/reeles/CARRETILHA-CONTENDER-BG-SHI-6ROL-711-CARRETILHA-CONTENDER-BG-MARINE-1.jpg",
        stock: 4,
        specs: "Reel rotativo Contender Ocean BG, con relación 7.1:1 y 6 rulemanes."
    },
    {
        id: 27,
        title: "Marine Sport Titan BG",
        category: "pesca",
        subcat: "reels rotativos",
        price: null,
        oldPrice: null,
        rating: 4,
        image: "imagenes/reeles/Captura de pantalla_12-11-2026_20251_www.instagram.com.jpeg",
        stock: 4,
        specs: "Reel rotativo Titan BG de Marine Sport."
    },
    {
        id: 28,
        title: "Maruri Thiranus",
        category: "pesca",
        subcat: "Frontales",
        price: null,
        oldPrice: null,
        rating: 5,
        image: "imagenes/reeles/Captura de pantalla_12-11-2026_20225_www.instagram.com.jpeg",
        stock: 4,
        specs: "Reel frontal Maruri Thiranus."
    },
    {
        id: 29,
        title: "Gold Surf S",
        category: "pesca",
        subcat: "Frontales",
        price: null,
        oldPrice: null,
        rating: 4,
        image: "imagenes/reeles/Captura de pantalla_12-11-2026_195935_www.instagram.com.jpeg",
        stock: 4,
        specs: "Reel frontal Gold Surf S de PNC."
    },
    {
        id: 30,
        title: "Marine Horizon Surf 6000 / 8000",
        category: "pesca",
        subcat: "Frontales",
        price: null,
        oldPrice: null,
        rating: 4,
        image: "imagenes/reeles/Captura de pantalla_12-11-2026_19591_www.instagram.com.jpeg",
        stock: 4,
        specs: "Reel frontal Horizon Surf de Marine Sport, presentado en tamaños 6000 y 8000."
    },
    {
        id: 31,
        title: "Power Cast 6000",
        category: "pesca",
        subcat: "Frontales",
        price: null,
        oldPrice: null,
        rating: 4,
        image: "imagenes/reeles/Captura de pantalla_12-11-2026_195918_www.instagram.com.jpeg",
        stock: 4,
        specs: "Reel frontal Power Cast tamaño 6000."
    },
    {
        id: 32,
        title: "Marine Skyline Surf 6000 / 8000",
        category: "pesca",
        subcat: "Frontales",
        price: null,
        oldPrice: null,
        rating: 4,
        image: "imagenes/reeles/Captura de pantalla_12-11-2026_195847_www.instagram.com.jpeg",
        stock: 4,
        specs: "Reel frontal Skyline Surf de Marine Sport, presentado en tamaños 6000 y 8000."
    },
    {
        id: 33,
        title: "Marine Titan Pro 2 BG 8000",
        category: "pesca",
        subcat: "reels rotativos",
        price: null,
        oldPrice: null,
        rating: 5,
        image: "imagenes/reeles/Captura de pantalla_12-11-2026_195727_www.instagram.com.jpeg",
        stock: 4,
        specs: "Carretilla rotativa Titan Pro 2 BG tamaño 8000."
    },
    {
        id: 34,
        title: "Costanera Surf 8000 / 10000",
        category: "pesca",
        subcat: "Frontales",
        price: null,
        oldPrice: null,
        rating: 4,
        image: "imagenes/reeles/Captura de pantalla_12-11-2026_195525_www.instagram.com.jpeg",
        stock: 4,
        specs: "Reel frontal Long Cast disponible en tamaños 8000 y 10000, con 6+1 rulemanes y relación 4.8:1."
    },
    {
        id: 35,
        title: "Reel Rotativo Arkadium BG",
        category: "pesca",
        subcat: "reels rotativos",
        price: null,
        oldPrice: null,
        rating: 5,
        image: "imagenes/reeles/Captura de pantalla_12-11-2026_195336_www.instagram.com.jpeg",
        stock: 5,
        specs: "Reel rotativo Arkadium BG."
    },
    {
        id: 36,
        title: "Marine Titan Pro 2 BG 12000",
        category: "pesca",
        subcat: "reels rotativos",
        price: null,
        oldPrice: null,
        rating: 5,
        image: "imagenes/reeles/Captura de pantalla_12-11-2026_19513_www.instagram.com.jpeg",
        stock: 4,
        specs: "Carretilla rotativa Titan Pro 2 BG tamaño 12000."
    },
    {
        id: 37,
        title: "Tigon TI-BG 300D",
        category: "pesca",
        subcat: "reels rotativos",
        price: null,
        oldPrice: null,
        rating: 4,
        image: "imagenes/reeles/Captura de pantalla_12-11-2026_195138_www.instagram.com.jpeg",
        stock: 4,
        specs: "Reel rotativo Tigon modelo TI-BG 300D."
    },
    {
        id: 38,
        title: "Caster Evo Plus 400 SHI",
        category: "pesca",
        subcat: "reels rotativos",
        price: null,
        oldPrice: null,
        rating: 5,
        image: "imagenes/reeles/Captura de pantalla_12-11-2026_194627_www.instagram.com.jpeg",
        stock: 4,
        specs: "Reel rotativo con 5+1 rulemanes, drag de 8 kg, relación 5.3:1 y freno centrífugo."
    },
    {
        id: 39,
        title: "Marine Sport Forza 400",
        category: "pesca",
        subcat: "reels rotativos",
        price: null,
        oldPrice: null,
        rating: 5,
        image: "imagenes/reeles/77c11013a7829f4e4dcba21e337e944d.jpg",
        stock: 4,
        specs: "Reel rotativo Forza 400 de Marine Sport."
    },
    {
        id: 40,
        title: "Fierro 400",
        category: "pesca",
        subcat: "reels rotativos",
        price: null,
        oldPrice: null,
        rating: 4,
        image: "imagenes/reeles/52c4fa1d4f3675fb679106e31e5968cb.jpg",
        stock: 4,
        specs: "Reel rotativo Fierro 400."
    },
    {
        id: 41,
        title: "Marine Titan Pro 2 BG Negro y Rojo",
        category: "pesca",
        subcat: "reels rotativos",
        price: null,
        oldPrice: null,
        rating: 5,
        image: "imagenes/reeles/399e53c4fada63e9fa3d0cc8d9bf554d.jpg",
        stock: 4,
        specs: "Reel rotativo Titan Pro 2 BG."
    },
    {
        id: 42,
        title: "Reel Rotativo Negro y Rojo",
        category: "pesca",
        subcat: "reels rotativos",
        price: null,
        oldPrice: null,
        rating: 4,
        image: "imagenes/reeles/294ec70e3998dca5b01a4faf9f7e6cda.jpg",
        stock: 4,
        specs: "Reel rotativo con drag máximo de 8 kg y relación de giro 3.8:1."
    },
    {
        id: 43,
        title: "Marine Titan Pro 2 BG Manija Naranja",
        category: "pesca",
        subcat: "reels rotativos",
        price: null,
        oldPrice: null,
        rating: 5,
        image: "imagenes/reeles/151a2588fb4b685e76a71aed5cc911f8.jpg",
        stock: 4,
        specs: "Reel rotativo Titan Pro 2 BG con manijas color naranja."
    },
    // Precios y stock provisorios, pendientes de confirmar.
    {
        id: 44,
        title: "Cordón Ajustable para Anteojos Marine SSB",
        category: "pesca",
        subcat: "Accesorios",
        price: null,
        oldPrice: null,
        rating: 4,
        image: "imagenes/accesorios/3726f407e8aec1cdce690474f437c1c4.jpg",
        stock: 10,
        specs: "Correa ajustable para anteojos de pesca, modelo SSB."
    },
    {
        id: 45,
        title: "Linterna Recargable Lidimi LD-L1512A",
        category: "indumentaria",
        subcat: "camping",
        price: null,
        oldPrice: null,
        rating: 4,
        image: "imagenes/accesorios/Captura de pantalla_12-11-2026_19433_www.instagram.com.jpeg",
        stock: 5,
        specs: "Linterna recargable de 30 W con zoom ajustable, carga USB-C y función power bank."
    },
    {
        id: 46,
        title: "Cordón Ajustable para Anteojos Marine",
        category: "pesca",
        subcat: "Accesorios",
        price: null,
        oldPrice: null,
        rating: 4,
        image: "imagenes/accesorios/Captura de pantalla_12-11-2026_19501_www.instagram.com.jpeg",
        stock: 10,
        specs: "Correa ajustable Marine para anteojos, mostrada en variantes de color."
    },
    {
        id: 47,
        title: "Caja Pocket Box Marine",
        category: "pesca",
        subcat: "Accesorios",
        price: null,
        oldPrice: null,
        rating: 4,
        image: "imagenes/accesorios/Captura de pantalla_12-11-2026_19556_www.instagram.com.jpeg",
        stock: 8,
        specs: "Caja multiuso con divisiones. La imagen muestra los modelos MPB133, MPB134 y MPB103."
    },
    {
        id: 48,
        title: "Caja de Pesca Marine MDL355",
        category: "pesca",
        subcat: "Accesorios",
        price: null,
        oldPrice: null,
        rating: 4,
        image: "imagenes/accesorios/Captura de pantalla_12-11-2026_193916_www.instagram.com.jpeg",
        stock: 5,
        specs: "Caja multiuso de dos niveles con divisores removibles y doble cierre. Medidas: 35,5 x 23 x 7 cm."
    },
    {
        id: 49,
        title: "Caja de Pesca Marine Double Box MDB200",
        category: "pesca",
        subcat: "Accesorios",
        price: null,
        oldPrice: null,
        rating: 4,
        image: "imagenes/accesorios/Captura de pantalla_12-11-2026_194135_www.instagram.com.jpeg",
        stock: 6,
        specs: "Caja de doble cara con divisores extraíbles y tapas color humo. Medidas: 20 x 13 x 6 cm."
    },
    {
        id: 50,
        title: "Línea Monofilamento Ottoni Camu XT",
        category: "pesca",
        subcat: "Accesorios",
        price: null,
        oldPrice: null,
        rating: 4,
        image: "imagenes/accesorios/Captura de pantalla_12-11-2026_194215_www.instagram.com.jpeg",
        stock: 8,
        specs: "Línea monofilamento camuflada. La imagen muestra 10 rollos de 100 m y varios diámetros."
    },
    {
        id: 51,
        title: "Linterna Recargable Lidimi LD-L670A",
        category: "indumentaria",
        subcat: "camping",
        price: null,
        oldPrice: null,
        rating: 4,
        image: "imagenes/accesorios/Captura de pantalla_12-11-2026_194318_www.instagram.com.jpeg",
        stock: 5,
        specs: "Linterna recargable de 30 W con batería de 10.000 mAh e indicador digital."
    },
    {
        id: 52,
        title: "Linterna Recargable Lidimi LD-L496A",
        category: "indumentaria",
        subcat: "camping",
        price: null,
        oldPrice: null,
        rating: 4,
        image: "imagenes/accesorios/Captura de pantalla_12-11-2026_194336_www.instagram.com.jpeg",
        stock: 5,
        specs: "Linterna recargable de 30 W con carga USB-C e indicador de batería."
    },
    {
        id: 53,
        title: "Sombrero con Doble Ventilador",
        category: "indumentaria",
        subcat: "camping",
        price: null,
        oldPrice: null,
        rating: 4,
        image: "imagenes/accesorios/Captura de pantalla_12-11-2026_194436_www.instagram.com.jpeg",
        stock: 5,
        specs: "Sombrero con dos ventiladores recargables y recarga solar, disponible en dos colores."
    },
    {
        id: 54,
        title: "Caja de Pesca Marine MWR",
        category: "pesca",
        subcat: "Accesorios",
        price: null,
        oldPrice: null,
        rating: 4,
        image: "imagenes/accesorios/Captura de pantalla_12-11-2026_194459_www.instagram.com.jpeg",
        stock: 6,
        specs: "Caja resistente al agua con divisores removibles y trabas de seguridad. Modelos MWR270, MWR355 y MWR358."
    },
    {
        id: 55,
        title: "Oxigenador Recargable Sumax SU-2404",
        category: "pesca",
        subcat: "Accesorios",
        price: null,
        oldPrice: null,
        rating: 4,
        image: "imagenes/accesorios/Captura de pantalla_12-11-2026_194539_www.instagram.com.jpeg",
        stock: 5,
        specs: "Oxigenador para carnadas vivas con batería de 2.000 mAh, hasta 20 h en modo intermitente."
    },
    {
        id: 56,
        title: "Cuchillo Filetero Marine",
        category: "cuchillos",
        subcat: "Accesorios",
        price: null,
        oldPrice: null,
        rating: 4,
        image: "imagenes/accesorios/Captura de pantalla_12-11-2026_195015_www.instagram.com.jpeg",
        stock: 8,
        specs: "Cuchillo filetero con revestimiento antiadherente, mostrado en tamaños de 4, 6, 7,5 y 9 pulgadas."
    },
    {
        id: 57,
        title: "Aireador Marine Air Pump",
        category: "pesca",
        subcat: "Accesorios",
        price: null,
        oldPrice: null,
        rating: 4,
        image: "imagenes/accesorios/Captura de pantalla_12-11-2026_195311_www.instagram.com.jpeg",
        stock: 6,
        specs: "Bomba de aire con manguera de silicona y piedra porosa; funciona con 4 pilas AA o batería de 12 V."
    },
    // Precios y stock provisorios, pendientes de confirmar.
    {
        id: 58,
        title: "Carpa Automática para 4 Personas",
        category: "indumentaria",
        subcat: "camping",
        price: null,
        oldPrice: null,
        rating: 4,
        image: "imagenes/camping/Captura de pantalla_12-11-2026_20521_www.instagram.com.jpeg",
        stock: 3,
        specs: "Carpa automática para cuatro personas, presentada en varios colores."
    },
    {
        id: 59,
        title: "Colchón Inflable Intex Dura-Beam Classic Downy",
        category: "indumentaria",
        subcat: "camping",
        price: null,
        oldPrice: null,
        rating: 4,
        image: "imagenes/camping/Captura de pantalla_12-11-2026_194844_www.instagram.com.jpeg",
        stock: 4,
        specs: "Set de colchón inflable Dura-Beam Classic Downy con accesorios incluidos según el empaque."
    },
    {
        id: 60,
        title: "Carpa de Camping Camuflada",
        category: "indumentaria",
        subcat: "camping",
        price: null,
        oldPrice: null,
        rating: 4,
        image: "imagenes/camping/Captura de pantalla_12-11-2026_20623_www.instagram.com.jpeg",
        stock: 4,
        specs: "Carpa de camping camuflada, plegable y transportable en su funda."
    },
    {
        id: 61,
        title: "Hamaca de Descanso MaxGo con Mosquitero",
        category: "indumentaria",
        subcat: "camping",
        price: null,
        oldPrice: null,
        rating: 4,
        image: "imagenes/camping/Captura de pantalla_12-11-2026_20558_www.instagram.com.jpeg",
        stock: 5,
        specs: "Hamaca con mosquitero, costuras reforzadas y kit de instalación; compacta para transportar."
    },
    {
        id: 62,
        title: "Cuchillo de Supervivencia Rambo IV 43 cm",
        category: "cuchillos",
        subcat: "camping",
        price: null,
        oldPrice: null,
        rating: null,
        image: "imagenes/camping/Captura de pantalla 2026-11-13 152012.png",
        stock: null,
        specs: "Cuchillo de supervivencia Rambo IV. La imagen indica una longitud de 43 cm."
    },
    {
        id: 63,
        title: "Cuchillo de Supervivencia 35 cm",
        category: "cuchillos",
        subcat: "camping",
        price: null,
        oldPrice: null,
        rating: null,
        image: "imagenes/camping/Captura de pantalla 2026-11-13 152546.png",
        stock: null,
        specs: "Cuchillo de supervivencia con hoja serrada y funda. La imagen indica 35 cm."
    },
    {
        id: 64,
        title: "Cuchillo Oso Negro 32 cm",
        category: "cuchillos",
        subcat: "camping",
        price: null,
        oldPrice: null,
        rating: null,
        image: "imagenes/camping/Captura de pantalla 2026-11-13 152612.png",
        stock: null,
        specs: "Cuchillo Oso Negro con funda. La imagen indica una longitud de 32 cm."
    },
    {
        id: 65,
        title: "Cuchillo de Supervivencia con Funda 27 cm",
        category: "cuchillos",
        subcat: "camping",
        price: null,
        oldPrice: null,
        rating: null,
        image: "imagenes/camping/Captura de pantalla 2026-11-13 152702.png",
        stock: null,
        specs: "Cuchillo de 27 cm presentado con funda y afilador."
    },
    {
        id: 66,
        title: "Cuchillo de Supervivencia con Funda Camuflada 26 cm",
        category: "cuchillos",
        subcat: "camping",
        price: null,
        oldPrice: null,
        rating: null,
        image: "imagenes/camping/Captura de pantalla 2026-11-13 152725.png",
        stock: null,
        specs: "Cuchillo de 26 cm presentado con funda camuflada y afilador."
    },
    {
        id: 67,
        title: "Cuchillo de Supervivencia con Funda Negra 26 cm",
        category: "cuchillos",
        subcat: "camping",
        price: null,
        oldPrice: null,
        rating: null,
        image: "imagenes/camping/Captura de pantalla 2026-11-13 152743.png",
        stock: null,
        specs: "Cuchillo de 26 cm presentado con funda negra y afilador."
    },
    {
        id: 68,
        title: "Cuchillo Táctico con Funda Negra 27 cm",
        category: "cuchillos",
        subcat: "camping",
        price: null,
        oldPrice: null,
        rating: null,
        image: "imagenes/camping/Captura de pantalla 2026-11-13 152757.png",
        stock: null,
        specs: "Cuchillo táctico de 27 cm presentado con funda negra y afilador."
    },
    {
        id: 69,
        title: "Cuchillo de Supervivencia con Funda Verde 26 cm",
        category: "cuchillos",
        subcat: "camping",
        price: null,
        oldPrice: null,
        rating: null,
        image: "imagenes/camping/Captura de pantalla 2026-11-13 152807.png",
        stock: null,
        specs: "Cuchillo de 26 cm presentado con funda verde y afilador."
    },
    {
        id: 70,
        title: "Cuchillo de Supervivencia Jungle King I 35 cm",
        category: "cuchillos",
        subcat: "camping",
        price: null,
        oldPrice: null,
        rating: null,
        image: "imagenes/camping/Captura de pantalla 2026-11-13 152826.png",
        stock: null,
        specs: "Cuchillo de supervivencia Jungle King I. La imagen indica 35 cm."
    },
    {
        id: 71,
        title: "Cuchillo Plegable Browning 20,7 cm",
        category: "cuchillos",
        subcat: "camping",
        price: null,
        oldPrice: null,
        rating: null,
        image: "imagenes/camping/Captura de pantalla 2026-11-13 152858.png",
        stock: null,
        specs: "Cuchillo plegable Browning. La imagen indica una longitud de 20,7 cm."
    },
    {
        id: 72,
        title: "Cuchillo Plegable Browning 21 cm",
        category: "cuchillos",
        subcat: "camping",
        price: null,
        oldPrice: null,
        rating: null,
        image: "imagenes/camping/Captura de pantalla 2026-11-13 152916.png",
        stock: null,
        specs: "Cuchillo plegable Browning. La imagen indica una longitud de 21 cm."
    },
    {
        id: 73,
        title: "Cuchillo Plegable Browning 22,5 cm",
        category: "cuchillos",
        subcat: "camping",
        price: null,
        oldPrice: null,
        rating: null,
        image: "imagenes/camping/Captura de pantalla 2026-11-13 152936.png",
        stock: null,
        specs: "Cuchillo plegable Browning. La imagen indica una longitud de 22,5 cm."
    },
    {
        id: 74,
        title: "Cuchillo Plegable Browning 21,5 cm",
        category: "cuchillos",
        subcat: "camping",
        price: null,
        oldPrice: null,
        rating: null,
        image: "imagenes/camping/Captura de pantalla 2026-11-13 153003.png",
        stock: null,
        specs: "Cuchillo plegable Browning presentado en varios colores. La imagen indica 21,5 cm."
    },
    {
        id: 75,
        title: "Cuchillo Plegable Browning 23 cm",
        category: "cuchillos",
        subcat: "camping",
        price: null,
        oldPrice: null,
        rating: null,
        image: "imagenes/camping/Captura de pantalla 2026-11-13 153021.png",
        stock: null,
        specs: "Cuchillo plegable Browning. La imagen indica una longitud de 23 cm."
    },
    {
        id: 76,
        title: "Cuchillo Plegable Browning 21,5 cm con Mango Gris",
        category: "cuchillos",
        subcat: "camping",
        price: null,
        oldPrice: null,
        rating: null,
        image: "imagenes/camping/Captura de pantalla 2026-11-13 153033.png",
        stock: null,
        specs: "Cuchillo plegable Browning con mango gris. La imagen indica 21,5 cm."
    },
    {
        id: 77,
        title: "Cuchillo Plegable Browning 22 cm",
        category: "cuchillos",
        subcat: "camping",
        price: null,
        oldPrice: null,
        rating: null,
        image: "imagenes/camping/Captura de pantalla 2026-11-13 153041.png",
        stock: null,
        specs: "Cuchillo plegable Browning. La imagen indica una longitud de 22 cm."
    },
    {
        id: 78,
        title: "Cuchillo Plegable Browning 23,6 cm",
        category: "cuchillos",
        subcat: "camping",
        price: null,
        oldPrice: null,
        rating: null,
        image: "imagenes/camping/Captura de pantalla 2026-11-13 153055.png",
        stock: null,
        specs: "Cuchillo plegable Browning. La imagen indica una longitud de 23,6 cm."
    },
    {
        id: 79,
        title: "Cuchillo Plegable Browning Camuflado 23 cm",
        category: "cuchillos",
        subcat: "camping",
        price: null,
        oldPrice: null,
        rating: null,
        image: "imagenes/camping/Captura de pantalla 2026-11-13 153112.png",
        stock: null,
        specs: "Cuchillo plegable Browning con diseño camuflado. La imagen indica 23 cm."
    },
    {
        id: 80,
        title: "Cuchillo Plegable Browning Camuflado 22 cm",
        category: "cuchillos",
        subcat: "camping",
        price: null,
        oldPrice: null,
        rating: null,
        image: "imagenes/camping/Captura de pantalla 2026-11-13 153129.png",
        stock: null,
        specs: "Cuchillo plegable Browning con diseño camuflado. La imagen indica 22 cm."
    },
    {
        id: 81,
        title: "Cuchillo Plegable Browning 23 cm",
        category: "cuchillos",
        subcat: "camping",
        price: null,
        oldPrice: null,
        rating: null,
        image: "imagenes/camping/Captura de pantalla 2026-11-13 153206.png",
        stock: null,
        specs: "Cuchillo plegable Browning. La imagen indica una longitud de 23 cm."
    },
    {
        id: 82,
        title: "Cuchillo Plegable Browning 22 cm",
        category: "cuchillos",
        subcat: "camping",
        price: null,
        oldPrice: null,
        rating: null,
        image: "imagenes/camping/Captura de pantalla 2026-11-13 153225.png",
        stock: null,
        specs: "Cuchillo plegable Browning. La imagen indica una longitud de 22 cm."
    }
]






let cart = [];
let currentFilter = 'all';

window.onload = function() {
    renderProducts(products);
};

function renderProducts(items) {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = '';

    if (items.length === 0) {
        grid.innerHTML = `<p class="col-span-full text-center text-gray-500 py-10">No se encontraron productos con el filtro seleccionado.</p>`;
        return;
    }

    items.forEach(prod => {
        const stockLabel = prod.stock == null ? "Consultar disponibilidad" : `Stock: ${prod.stock} u.`;
        const rating = Number.isInteger(prod.rating) ? `<div class="text-amber-500 text-xs mb-1">${'<i class="fa-solid fa-star"></i>'.repeat(prod.rating)}</div>` : '';
        const price = prod.price == null
            ? `<span class="text-sm font-bold text-brand-orange">Consultar precio</span>`
            : `<div class="flex justify-between items-baseline mb-3">
                ${prod.oldPrice > prod.price ? `<span class="text-xs text-gray-400 line-through">$${prod.oldPrice.toLocaleString()}</span>` : ''}
                <span class="text-xl font-bold font-heading text-brand-slate">$${prod.price.toLocaleString()}</span>
            </div>`;
        const action = prod.price == null
            ? `<button onclick="openProductModal(${prod.id})" class="bg-brand-orange hover:bg-brand-orangeHover text-white text-xs font-semibold py-2 rounded-lg transition-colors">Consultar</button>`
            : `<button onclick="addToCart(${prod.id})" class="bg-brand-orange hover:bg-brand-orangeHover text-white text-xs font-semibold py-2 rounded-lg transition-colors">Añadir</button>`;
        const card = `
            <div class="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                <div class="relative overflow-hidden cursor-pointer bg-gray-100" onclick="openProductModal(${prod.id})">
                    <img src="${prod.image}" alt="${prod.title}" class="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300">
                    <span class="absolute top-3 left-3 bg-brand-orange text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded">${stockLabel}</span>
                </div>
                <div class="p-5 flex-grow flex flex-col justify-between">
                    <div>
                        ${rating}
                        <h3 class="font-heading font-bold text-lg text-brand-slate uppercase leading-snug cursor-pointer hover:text-brand-orange transition-colors" onclick="openProductModal(${prod.id})">${prod.title}</h3>
                        <p class="text-xs text-gray-500 mt-2 line-clamp-2">${prod.specs}</p>
                    </div>
                    <div class="mt-4 pt-3 border-t border-gray-100">
                        <div class="mb-3">${price}</div>
                        <div class="grid grid-cols-2 gap-2">
                            <button onclick="openProductModal(${prod.id})" class="bg-brand-sand hover:bg-brand-sandDark text-brand-slate text-xs font-semibold py-2 rounded-lg transition-colors">Detalles</button>
                            ${action}
                        </div>
                    </div>
                </div>
            </div>
        `;
        grid.innerHTML += card;
    });
}

function filterCategory(cat) {
    currentFilter = cat;
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('bg-brand-olive', 'text-white');
        btn.classList.add('bg-white', 'text-brand-slate');
    });
    const activeBtn = document.getElementById(`btn-${cat}`);
    if (activeBtn) {
        activeBtn.classList.remove('bg-white', 'text-brand-slate');
        activeBtn.classList.add('bg-brand-olive', 'text-white');
    }
    applySubfilter();
}

function filterPopularCategory(cat) {
    filterCategory(cat);
    document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' });
}

function applySubfilter() {
    const sub = document.getElementById('modalidad-select').value;
    let filtered = products;

    if (currentFilter !== 'all') {
        filtered = filtered.filter(p => p.category === currentFilter);
    }
    if (sub !== 'all') {
        filtered = filtered.filter(p => p.subcat === sub);
    }

    renderProducts(filtered);
}

function openProductModal(id) {
    const prod = products.find(p => p.id === id);
    if (!prod) return;

    const price = prod.price == null
        ? `<span class="text-xl font-bold text-brand-orange font-heading">Consultar precio</span>`
        : `<div class="flex items-center gap-3 mt-2">
            <span class="text-2xl font-bold text-brand-orange font-heading">$${prod.price.toLocaleString()}</span>
            ${prod.oldPrice > prod.price ? `<span class="text-sm text-gray-400 line-through">$${prod.oldPrice.toLocaleString()}</span>` : ''}
        </div>`;
    const cartButton = prod.price == null
        ? ''
        : `<button onclick="addToCart(${prod.id}); closeProductModal();" class="w-full bg-brand-orange hover:bg-brand-orangeHover text-white font-bold py-3 rounded-lg uppercase tracking-wider text-sm transition-colors flex items-center justify-center gap-2">
            <i class="fa-solid fa-cart-shopping"></i> Añadir al Carrito
        </button>`;
    const modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = `
        <div class="bg-gray-100 p-6 flex items-center justify-center">
            <img src="${prod.image}" alt="${prod.title}" class="max-h-80 w-auto object-contain rounded-lg">
        </div>
        <div class="p-8 flex flex-col justify-between">
            <div>
                <span class="bg-green-100 text-green-800 text-xs font-bold px-2.5 py-0.5 rounded uppercase">${prod.stock == null ? 'Consultar disponibilidad' : 'Disponible en Stock'}</span>
                <h2 class="text-2xl font-bold font-heading uppercase text-brand-slate mt-3 leading-tight">${prod.title}</h2>
                ${price}
                ${prod.price == null ? '' : '<p class="text-xs text-gray-500 mt-1">En hasta 12 cuotas fijas con Visa / Mastercard</p>'}
                <div class="mt-6 space-y-3">
                    <h4 class="font-bold text-xs uppercase text-brand-slate">Especificaciones Técnicas:</h4>
                    <p class="text-sm text-gray-600 bg-brand-sand p-3 rounded-lg border border-gray-200">${prod.specs}</p>
                </div>
            </div>
            <div class="mt-8 space-y-3">
                ${cartButton}
                <a href="https://wa.me/5491100000000?text=Hola,%20tengo%20consultas%20sobre%20el%20producto:%20${encodeURIComponent(prod.title)}" target="_blank" class="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 font-bold py-2.5 rounded-lg text-xs flex items-center justify-center gap-2">
                    <i class="fa-brands fa-whatsapp text-green-500 text-base"></i> Consultar a un especialista
                </a>
            </div>
        </div>
    `;
    document.getElementById('product-modal').classList.remove('hidden');
}

function closeProductModal() {
    document.getElementById('product-modal').classList.add('hidden');
}

function toggleCartModal() {
    const modal = document.getElementById('cart-modal');
    modal.classList.toggle('hidden');
}

function addToCart(id) {
    const prod = products.find(p => p.id === id);
    cart.push(prod);
    updateCartUI();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function updateCartUI() {
    document.getElementById('cart-badge').innerText = cart.length;
    const cartItems = document.getElementById('cart-items');

    if (cart.length === 0) {
        cartItems.innerHTML = `<p class="text-gray-500 text-center py-8">Tu carrito está vacío actualmente.</p>`;
        document.getElementById('cart-total').innerText = '$0';
        return;
    }

    let total = 0;
    cartItems.innerHTML = '';
    cart.forEach((item, idx) => {
        total += item.price;
        cartItems.innerHTML += `
            <div class="flex items-center justify-between border-b border-gray-100 pb-3">
                <div class="flex items-center gap-3">
                    <img src="${item.image}" class="w-12 h-12 object-cover rounded">
                    <div>
                        <h4 class="font-bold text-xs text-brand-slate uppercase">${item.title}</h4>
                        <span class="text-xs text-brand-orange font-bold">$${item.price.toLocaleString()}</span>
                    </div>
                </div>
                <button onclick="removeFromCart(${idx})" class="text-gray-400 hover:text-red-500 text-sm"><i class="fa-solid fa-trash"></i></button>
            </div>
        `;
    });
    document.getElementById('cart-total').innerText = '$' + total.toLocaleString();
}

function checkoutCart() {
    if (cart.length === 0) return;
    alert('¡Gracias por tu pedido! Redirigiendo a la pasarela de pago segura...');
    cart = [];
    updateCartUI();
    toggleCartModal();
}

function toggleMobileMenu() {
    document.getElementById('mobile-menu').classList.toggle('hidden');
}

function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
}
