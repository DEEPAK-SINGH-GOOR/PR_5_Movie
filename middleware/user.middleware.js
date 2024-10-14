const UserRouter = Router();
const checkFields = require('../middlewares/checkFields');

UserRouter.post("/signup", checkFields, createUser);
UserRouter.post("/login", checkFields, loginUser);
