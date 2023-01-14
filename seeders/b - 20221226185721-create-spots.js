"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Spots",
      [
        {
          id_spot: 1,
          spotname: "Playa de Famara",
          city: "Lanzarote, Canarias",
          adress: "Caleta de Famara. Norte de Lanzarote.",
          type: "arena",
          conditions:
            "La playa de Famara es una playa salvaje y deportiva para practicar deportes acuáticos a todos los niveles como surf, bodyboard, windsurf y kitesurf, gracias a su oleaje y vientos constantes. En Famara se puede surfear con todo tipo de tablas.Se aconseja a los principiantes que surfeen con la marea baja y que utilicen tablas más grandes. Las mejores semanas de surf son durante el mes de Septiembre y la primera quincena de Octubre.La ventana de oleaje es W y NE. El tamaño del oleaje suele ser de 0, 3m - 2m. El acceso es mediante parking de tierra. La playa de Famara es probablemente uno de los mejores lugares del mundo para aprender a surfear.Las escuelas de surf locales funcionan a un nivel muy alto, contratando sólo a instructores de surf profesionales.",

          lifeguard: true,
          length: "6 km",
          rating: 4,
          imagepath: "https://ociolanzarote.com/wp-content/imagenes/Playa-de-Famara-Lanzarote.jpg",
        },

        {
          id_spot: 2,
          spotname: "Playa de Somo",
          city: "Cantabria",
          adress: "Ribamontán al Mar. Pueblo de Somo. Bahía de santander",
          type: "arena",
          conditions:
            " La Playa de Somo, en Ribamontán al Mar, es una de las playas más famosas de la comunidad de Cantabria. Cuenta con 3 picos principalmente, el barco, con olas de izquierdas principalmente y buenas derechas también en baja, la zona del antiguo camping con picos en ambas direcciones y diversos picos por toda la playa. Un spot idílico para todos los niveles. Somo cuenta con una de las escuelas de surf más reconocidas en Europa, la Escuela Cantabra de Surf, durante todo el año se realizan campeonatos. El viento principal es S-SW. Se accede a través de parking de tierra de fácil aparcamiento.",

          lifeguard: true,
          length: "2 km",
          rating: 5,
          imagepath: "https://photo620x400.mnstatic.com/8ec745c8cc862674c2af270bee7223d3/playa-de-somo.jpg",
        },
        {
          id_spot: 3,
          spotname: "Playa de Rodiles",
          city: "Asturias",
          adress: "Villaviciosa. Costa oriental de Asturias",
          type: "arena",
          conditions:
            "Hay que tener cierta experiencia para acceder a este spot, se recomienda para surfistas avanzados. Además es una playa bastante masificada de surfistas y se requiere cierta precaución. No se recomienda para principiantes ni surferos de nivel bajo. Una de las mejores olas del Cantábrico y conocida en toda Europa por la calidad de sus tubos. Con marea baja es un arenal muy extenso. Este spot se encuentra en un área privilegiada en plena naturaleza. Está acondicionada con zonas de aseo y duchas, aparcamientos para autocaravanas y furgonetas, campings y pequeños bares. Con marea baja sale un pico al Oeste de la playa, cerca de la ría, con una izquierda potente, conocida como la Barra, bastante famosa y para surfistas experimentados. Al este de la playa nos encontramos varios picos más fáciles de coger, que funcionan también con marea baja, y donde podemos encontrar largas derechas. ",

          lifeguard: true,
          length: "1 km",
          rating: 4,
          imagepath: "https://live.staticflickr.com/65535/49945150246_6b1991325f_b.jpg",
        },
        {
          id_spot: 4,
          spotname: "Los Caños de Meca",
          city: "Cadiz",
          adress: "La Janda, Barbate",
          type: "roca",
          conditions:
            "Los Caños se considera un spot para surfistas experimentados. Es muy importante conocer bien el terreno y la presencia de arrecifes y rocas. Es una zona donde abundan los erizos. Las olas son cortas, de tipo normal y hueca y más grandes en mareas ascendentes y descendentes.  Los Caños es un destino de invierno. En los meses cálidos es muy raro encontrar buenas olas. Se precisa por tanto un traje de neopreno. Cuando sopla el levante fuerte desaparecen las olas y es el momento de practicar windsurf o kitesurf. Se accede mediante parking. Con la llegada de la primavera y el verano, las olas pierden fuerza, los vientos de levante se intensifican y las condiciones son favorables para la práctica del kite surfing. En esta época también es aconsejable aprovechar para aprender a surfear, en la zona hay escuelas para alquilar tabla y neopreno.",

          lifeguard: false,
          length: "2 km",
          rating: 5,
          imagepath: "https://www.inspain.org/imgs3/playas/9/5/7/odso63beu3gtauyk2vzky2aatu_1000.jpg",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
