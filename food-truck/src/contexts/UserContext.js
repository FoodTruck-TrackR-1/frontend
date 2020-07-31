import { createContext } from "react";

const UserContext = createContext();
UserContext.displayName = "CurrentUser";

export default UserContext;
