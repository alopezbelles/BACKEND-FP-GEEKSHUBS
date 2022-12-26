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
          imagepath: "",
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
          imagepath: "",
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
