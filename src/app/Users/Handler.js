import HTTPCodes from "../../config/HTTPCodes";
import { parseDataUsingGet } from "../../util";
import Service from "./Service"

class UserHandler {

    async userSocket(req, res) {
        try {
            const data = parseDataUsingGet(req)
            await Service.userSocketService(data, res)
        } catch (error) {
            console.error("User Socket Handler error ", error);
            return res.status(HTTPCodes.INTERNAL_SERVER_ERROR).send({ response_code: 2, response_message: "Sorry something went wrong" });
        }
    }
}

export default new UserHandler()