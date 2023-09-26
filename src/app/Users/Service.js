import HTTPCodes from '../../config/HTTPCodes';
import { EmitToSocketPost } from '../Socket';

class UserServices {

    async userSocketService(data, res) {
        try {
            console.log("TEST")
            let agentSocketResponse = {
                url: "/socket/user/",
                response: "Success"
            }
            await EmitToSocketPost(agentSocketResponse)
            return res.status(HTTPCodes.SUCCESS).send({ response_code: 0, response_message: "Success" });
        } catch (error) {
            console.error("User Socket Service error ", error);
            return res.status(HTTPCodes.INTERNAL_SERVER_ERROR).send({ response_code: 2, response_message: "Sorry something went wrong" });
        }
    }
}

export default new UserServices()