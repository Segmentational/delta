import { Library } from "@cloud-technology/api-library";

import { Generator } from "@cloud-technology/api/src/utilities/configuration.js";

export const Controller = Library.Router();

Controller.get("/", async (request, response) => {
    const $ = Generator(request);
    const Body = $.toJSON();

    /// HTTP(s) Response
    response.type($.Configuration.Type);
    response.status($.Configuration.Status);
    response.contentType($.Configuration.Type);
    response.statusMessage = $.Configuration.Message;

    response.shouldKeepAlive = $.Configuration["Keep-Alive"];

    response.send(Body);
});

export default Controller;