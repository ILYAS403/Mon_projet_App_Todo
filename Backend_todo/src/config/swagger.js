import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API ToDo List",
      version: "1.0.0",
      description: "API pour gérer les tâches d’un utilisateur",
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
  },
  apis: [" ./src/routes/*.js"], // Où Swagger va lire les annotations
};

const specs = swaggerJsdoc(options);

export { swaggerUi, specs };
