export const formatDate = (now: any) => {
    let dateTime = new Date(now);
  var year = dateTime.getFullYear();
  var month = dateTime.getMonth() + 1;
  var date = dateTime.getDate();
  var hour = dateTime.getHours();
  var minute = dateTime.getMinutes();
  var second = dateTime.getSeconds();
  return (
    year + '-' + month + '-' + date + ' ' + hour + ':' + minute + ':' + second
  );
};
