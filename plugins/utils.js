// export function changeImg(url){
//     if(url !== undefined){
//         // return ''
//         // return url.replace(/http\w{0,1}:\/\/gk/g,'https://images.weserv.nl/?url=gk');
//     }
// }


// export function formatDate(timestamp) {
//     let date = new Date(timestamp);
//     return date.getYear() + "-" + date.getMonth() + 1 + "-" + date.getDate() + "   " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
//   }
  
//   export function postToSQLUpdate(object) {
//     let updated = [], params = [];
//     for (var key in object) {
//       if (object.hasOwnProperty(key)) {
//         if (key === 'id') {
//           continue;
//         }
//         updated.push(key + ' = ?')
//         params.push(object[key])
//       }
//     }
//     updated.push('updated_at = ?')
//     params.push(Date.now())
//     return {
//       updated: updated.join(','),
//       params: params
//     }
//   }
  
//   export function deepCopy(object) {
//     return JSON.parse(JSON.stringify(object))
//   }
  
  export function timeAgo(time) {
    const between = Date.now() / 1000 - Number(time)
  
    if (between < 3600) {
      return pluralize(~~(between / 60), ' 分钟前')
    } else if (between < 86400) {
      return pluralize(~~(between / 3600), ' 小时前')
    } else {
      return pluralize(~~(between / 86400), ' 天前')
    }
  }
  
//   export function getCookiesInServer(req) {
//     let Cookies = {};
//     req && req.headers.cookie && req.headers.cookie.split(';').forEach(function (Cookie) {
//       let parts = Cookie.split('=');
//       Cookies[parts[0].trim()] = (parts[1] || '').trim();
//     });
//     return Cookies;
//   }
  
  export function setCookie(name, value, minutes) {
    let exp = new Date();
    exp.setTime(exp.getTime() + minutes * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
  }
  
  export function getCookie(name) {
    let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
      return unescape(arr[2]);
    else
      return null;
  }
  
  export function setToken(tokenValue) {
    setCookie('userinfo', tokenValue, 60*24*7)//7天
  }
