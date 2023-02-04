//通过fetchUser拿到的是localStorage中的user，格式和sanity后台中的user格式不一样
export const fetchUser = ()=>{
    const userInfo =
    localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : localStorage.clear();
      return userInfo;
}