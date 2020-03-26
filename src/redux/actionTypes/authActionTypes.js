
export const login = (res) => ({
    type : "LOGIN",
    payload : res
})

export const logout = () => ({
            type: "LOGOUT",
            payload : false
})

