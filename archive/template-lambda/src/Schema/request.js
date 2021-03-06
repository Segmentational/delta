import * as HTTPs from "https";

/***
 *
 * @param host {string}
 * @param port {number}
 * @param path {string}
 * @param method {string}
 *
 * @returns {{rejectUnauthorized: boolean, path, agent: boolean, method, port, requestCert: boolean, host}}
 *
 * @constructor
 *
 */

export const Configuration = (host, path, method = "GET", port = 443) => {
    return {
        host: host,
        port: port,
        path: path,
        method: method,
        rejectUnauthorized: false,
        requestCert: true,
        agent: false
    };
};

/***
 *
 * @param settings {Configuration}
 * @param headers {any}
 * @return {Promise<{Status: any, Message: any, Headers: any, Method: any, URL: any, Response: any}>}
 * @constructor
 */

export const Query = async (settings, headers = {}) => {
    const Data = {
        Headers: null,
        Method: null,
        URL: null,
        Status: null,
        Message: null,
        Response: null
    };

    const Response = new Promise((resolve, reject) => {
        const Request = HTTPs.request({... settings, headers: headers}, (response) => {
            let $;

            if ( response.statusCode < 200 || response.statusCode > 400 ) {
                if ( response.statusCode === 401 ) { /// Unauthorized
                    return resolve(JSON.stringify({Status: response.statusCode, Message: response.statusMessage}, null, 4));
                } else if ( response.statusCode === 405 ) { /// Method Not Allowed
                    return resolve(JSON.stringify({Status: response.statusCode, Message: response.statusMessage}, null, 4));
                } else if ( response.statusCode === 404 ) { /// Endpoint not Found
                    return resolve(JSON.stringify({Status: response.statusCode, Message: response.statusMessage}, null, 4));
                } else {
                    console.warn("[Warning]", response);
                    return reject(new Error("[Error]" + " " + String(response.statusCode)));
                }
            }

            response.on("data", (chunk) => {
                const Allocation = String(Buffer.from(chunk));
                if ( Allocation !== undefined ) {
                    ($ === undefined) ? $ = Allocation
                        : $ += Allocation;
                }
            });

            response.on("end", () => {
                Data.Headers = response.headers;
                Data.Method = response.method;
                Data.URL = response.url;
                Data.Status = response.statusCode;
                Data.Message = response.statusMessage;

                resolve($);
            });
        });

        Request.on("error", (_) => reject(_));

        Request.end();
    });

    Data.Response = await Response;

    return Data;
};

export default Query;
