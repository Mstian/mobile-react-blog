export const formatDate = (now: any) => {
    let dateTime = new Date(now);
  var year = dateTime.getFullYear();
  var month = dateTime.getMonth() + 1 > 10 ? dateTime.getMonth() + 1 : '0' + (dateTime.getMonth() + 1);
  var date = dateTime.getDate() > 10 ? dateTime.getDate() : '0' + dateTime.getDate();
  var hour = dateTime.getHours() > 10 ? dateTime.getHours() : '0' + dateTime.getHours();
  var minute = dateTime.getMinutes() > 10 ? dateTime.getMinutes() : '0' + dateTime.getMinutes();
  var second = dateTime.getSeconds() > 10 ? dateTime.getSeconds() : '0'+dateTime.getSeconds();
  return (
    year + '-' + month + '-' + date + ' ' + hour + ':' + minute + ':' + second
  );
};

export const setLocalStorage = (data:any) => {
  localStorage.setItem(data.key, data.value);
}

export const clearLocalStorae = (key:string) => {
  localStorage.removeItem(key)
}

export const getLocalStorage = (key:string) => {
  return localStorage.getItem(key);
}