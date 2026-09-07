import { string, number, object, boolean, array } from "yup";

export const ValidarUUIDSchema = string().uuid("Id inválido").required();