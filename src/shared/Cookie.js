import React from "react";

const getCookie = (name) => {
    let value = "; " + document.cookie;
    console.log(value);
    let parts = value.split("; " + name + "=");
    console.log(parts);
    if(parts.length.length === 2){
        return parts.pop().split(";").shift();
    }
};
const setCookie = (name, value, exp = 5)=> {
    let date = new Date();
    date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
    document.cookie = `${name} = ${value}; expires = ${date.toUTCString()}; path=/`;
} 
//쿠키를 지우는 방법 > 쿠키의 expires 날짜를 엄청 과거로 돌리면 새로고침시 쿠키가 삭제됨
const deleteCookie = (name) => {
    document.cookie = name + '=; expires = Thu, 01 Jan 1999 00:00:10 GMT';
}

export {getCookie, setCookie, deleteCookie};