import { API, Organization } from "./API.js";

/***
 *
 * A simplified ***Virtual*** Proxy Object
 *
 * @external Snippet
 *
 *  - [ES2015 Definition](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
 *  - [Considerations Around Polyfills](https://babeljs.io/docs/en/learn#proxies)
 *      - Note: the following application shouldn't be implemented within a browser context; therefore,
 *          the lack of polyfill(s) shouldn't be heeded.
 *
 * @see {@link https://gist.github.com/Segmentational/b00f525426538835b67c300dd58efbeb|Snippet}
 *
 * @constructor
 * @typedef {[] | {total: Number, valid: Boolean}}
 * @return {[] | {
 *     total: Number,
 *     valid: Boolean
 * }}
 *
 */

const Members = () => {
    const $ = [];
    $.prototype = Object.create({
        total: -1,
        valid: null
    });

    return $;
};

const Request = async () => {
    const Structure = Members();

    const Data = await API.request("/orgs/{org}/members", {
        method: "GET",
        org: Organization
    }).then(($) => $["data"]);

    Data?.forEach((User, _) => { Structure.push(User); });

    Structure.total = Structure.length;
    (Structure.total !== -1) ? Structure.valid = true
        : Structure.valid = false;

    return {
        Accounts: Structure,
        Total: Structure.total,
        Valid: Structure.valid
    };
};

export const Data = await Request();

export const Serial = JSON.stringify(Data, null, 4);

export default Data;