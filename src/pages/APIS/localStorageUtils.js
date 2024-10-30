const keys = {
    FV_TENANT_INFO: "FV_TENANT_INFO",
}

// export const getLoginUserData = () => {
//     const data = localStorage.getItem(keys.FV_TENANT_INFO);
//     return JSON.parse(data);
// }

// export const getAuthenticationToken = () => {
//     const data = getLoginUserData();
//     return data?.token;
// }

export const getServerURL = () => {
    return process.env.REACT_APP_SERVER_URL;
}