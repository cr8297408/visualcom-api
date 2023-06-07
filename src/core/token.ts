import { envConfig } from "../../config.env";
import jwt from 'jsonwebtoken'

const createToken = async (user: any) => {
  try {
    const token = jwt.sign(user, envConfig.JWT_SECRET ?? '');
    return token;
  } catch (e) {
    throw e;
  }
};
export { createToken };
