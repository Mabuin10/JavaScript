let listaDeProductos = [
    {id: 01, nombre: "JABÓN DE AVENA", descripcion: "Cremoso y delicado, indicado para piel sensible, propensa a irritaciones y enrojecimiento, sin aroma. Jabón saponificado en frío.Elaborado con aceites y mantecas vegetales, enriquecido con avena. Sin químicos, ni crueldad animal.", size: "Corte artesanal 110gr. aproximadamente",cantidad:1, stock:20, precio: 490, img: "../assets/img/jabon-avena.jpeg", alt:"jabon de avena" },
    {id: 02, nombre: "JABÓN DE CAFÉ DETOX", descripcion: "Exfoliante detox, desintoxica, elimina células muertas e impurezas, reactiva la circulación, previene la aparición de las arañitas y previene celulitis. Enriquecido con café y con avena, Sin químicos, ni crueldad animal.", size: "Corte artesanal 110gr. aproximadamente", cantidad:1, stock:20, precio: 490, img: "../assets/img/jabon-cafe.jpeg", alt:"jabon de cafe" },
    {id: 03, nombre: "SHAMPOO SÓLIDO NORMAL", descripcion: "Ésta variedad es ideal para todo tipo de pelo, es nutritivo, evita la anticaspa y la caída. Realizado con materia prima 100% natural⁣, con tensioactivo SCI, arcillas hierbas y aceites vegetales. Sin químicos, ni crueldad animal.", size: "80gr rinde 60/70 lavados aproximadamente", cantidad:1, stock:20, precio: 490, img: "../assets/img/galeria5.jpeg", alt:"shampoo normal" },
    {id: 04, nombre: "SHAMPOO SÓLIDO SECO", descripcion: "Ésta variedad es indicada para los cabellos dañados, maltratados y resecos, nutre, hidrata y devuelve el brillo natural. Realizado con materia prima 100% natural⁣, con tensioactivo SCI, arcillas hierbas y aceites vegetales. Sin químicos, ni crueldad animal.", size: "80gr rinde 60/70 lavados aproximadamente", cantidad:1, stock:20, precio: 490, img:"../assets/img/galeria6.jpeg", alt:"Shampoo Seco"},
    {id: 05, nombre: "SHAMPOO SÓLIDO GRASO", descripcion: "Ésta variedad es perfecta para quienes tienen exceso de oleosidad en el cuero cabelludo, ya que la equilibra. Realizado con materia prima 100% natural⁣, con tensioactivo SCI, arcillas hierbas y aceites vegetales. Sin químicos, ni crueldad animal.", size: "80gr rinde 60/70 lavados aproximadamente", cantidad:1, stock:20, precio: 490, img:"../assets/img/shampoo-graso.jpeg", alt:"shampoo-graso"},
    {id: 06, nombre: "SHAMPOO SÓLIDO ANTÍCAIDA", descripcion: "Está variedad es indicada para quienes quieran evitar y reducir la caída del cabello, es fortalecedor, nutritrivo e hidratante. Realizado con materia prima 100% natural⁣, con tensioactivo SCI, arcillas hierbas y aceites vegetales. Sin químicos, ni crueldad animal.", size: "80gr rinde 60/70 lavados aproximadamente", cantidad:1, stock:20, precio: 490, img:"../assets/img/shampoo-anticaida.jpeg", alt:"shampoo-aticaida"},
    {id: 07, nombre: "ACONDICIONADOR SÓLIDO", descripcion: "Ligero, suave y delicado, para todo tipo de pelo. Hidratante y nutritivo. Realizado con materia prima 100% natural, cera vegetal, esencias, aceites y mantecas vegetales. Sin químicos, ni crueldad animal.", size: "70gr rinde 60/70 lavados", cantidad:1, stock:20, precio: 490, img:"../assets/img/acondicionador.jpg", alt:"Acondicionador Solido"},
    {id: 08, nombre: "ÓLEO REPARADOR", descripcion: "Hidrata, nutre, repara las fibras capilares. Ayuda a sellar puntas resecas y abiertas. Controla el frizz, aporta brillo y define cabellos ondulados. Sin químicos, ni crueldad animal.", size: "Envase 30 ml.", cantidad:1, stock:20, precio: 490, img:"../assets/img/oleo-capilar.jpeg", alt:"Oleo Reparador"},
    {id: 09, nombre: "BÁLSAMO", descripcion: "Nutre, humecta e hidrata.⁣ Combate los radicales libres, con gran poder antioxidante y vitamina E.⁣ Previene los signos de envejecimiento, reactiva el colágeno natural y brinda luminosidad a tu piel.", size: "Envase 45gr.", cantidad:1, stock:20, precio: 490, img:"../assets/img/balsamo.jpeg", alt:"balsamo"}
]

const listadejson = JSON.stringify (listaDeProductos)

localStorage.setItem("listaDeProductos",listadejson)
