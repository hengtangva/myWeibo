
// 根据需要获取适合大小的图片
export function getSizeImg(url, size) {
    return `${url}?param=${size}x${size}`
}

// 对于很大的数进行格式化
export function getCount(count) {
    if(count < 0) {
        return;
    }
    else if(count < 10000) {
        return count;
    } else if(count < 100000000) {
        return Math.floor(count/1000)/10+'万';
    } else {
        return Math.floor(count/10000000)/10+'亿';
    }
}

// 格式化时间
export function formatDate(time, fmt) {
    let date = new Date(time);
  
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds()
    };
    for (let k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        let str = o[k] + '';
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
      }
    }
    return fmt;
  };
  
  function padLeftZero(str) {
    return ('00' + str).substr(str.length);
  };
  
  export function formatMonthDay(time) {
    return formatDate(time, "MM月dd日");
  }
  
  export function formatMinuteSecond(time) {
    return formatDate(time, "mm:ss");
  }
  