import HTTPCodes from "../config/HTTPCodes";


export const requestValidator = (method, schema) => {
    return (req, res, next) => {
        const { error } = schema.unknown(true).validate(req.body)
        const valid = error == undefined;
        if (valid) {
            next();
        } else {
            const { details } = error;
            const message = details.map(i => i.message).join(',');
            return res.status(HTTPCodes.MISSING).send({ response_code: 1, response_message: method, response: message });
        }
    }
}