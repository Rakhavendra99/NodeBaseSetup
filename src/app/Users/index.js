import { requestValidator } from "../../middlewares/requestValidator";
import { loginValidation, newUserRegisterValidation } from "../../validation/userValidation";
import Handler from "./Handler";

export default [
    {
        path: '/socket',
        type: "GET",
        method: Handler.userSocket,
        options: {},
    },
]