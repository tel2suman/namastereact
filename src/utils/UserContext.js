import { createContext } from "react";

const UserContext = createContext  ({

    user : {
        name: "Suman Bhattacharjee",
        email: "suman@gmail.com",
        company: "NmasteDev-ReactJs"
    },

})

export default UserContext;