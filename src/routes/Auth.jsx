export const isAuthenticated = () => {
  const userInfoString = localStorage.getItem("2gedaUserInfo");
  const userToken = localStorage.getItem("authToken");
  const registrationData = localStorage.getItem("registrationData");

  const userInfo = JSON.parse(userInfoString);

  if (!userInfo && !userToken && !registrationData) {
    return false;
  }

  return userInfo;
};
