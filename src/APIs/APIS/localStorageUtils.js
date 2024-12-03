const keys = {
    FV_TENANT_INFO: "FV_TENANT_INFO",
}

export const getLoginUserData = () => {
    const data = localStorage.getItem("authToken");
    return data;
}

export const getAuthenticationToken = () => {
    return getLoginUserData();
}

export const getServerURL = () => {
    return process.env.REACT_APP_SERVER_URL;
}