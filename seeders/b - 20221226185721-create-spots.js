'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {


    await queryInterface.bulkInsert('Spots',
      [

        {
          id_spot: 1,
          spotname: "Playa de Famara",
          city: "Lanzarote, Canarias",
          adress: "Caleta de Famara. Norte de Lanzarote.",
          type: "arena",
          conditions:
          "La playa de Famara es una playa salvaje y deportiva para practicar deportes acuáticos a todos los niveles como surf, bodyboard, windsurf y kitesurf, gracias a su oleaje y vientos constantes. En Famara se puede surfear con todo tipo de tablas.Se aconseja a los principiantes que surfeen con la marea baja y que utilicen tablas más grandes. Las mejores semanas de surf son durante el mes de Septiembre y la primera quincena de Octubre.La ventana de oleaje es W y NE. El tamaño del oleaje suele ser de 0, 3m - 2m.       El acceso es mediante parking de tierra. La playa de Famara es probablemente uno de los mejores lugares del mundo para aprender a surfear.Las escuelas de surf locales funcionan a un nivel muy alto, contratando sólo a instructores de surf profesionales.",

          lifeguard: true,
          length: "6 km",
          rating: 4,
          imagepath: "",

     }
    
    
    ], { });
  
  },

  async down(queryInterface, Sequelize) {
  /**
   * Add commands to revert seed here.
   *
   * Example:
   * await queryInterface.bulkDelete('People', null, {});
   */
}
};
