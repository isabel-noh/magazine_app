import React from "react";

const getCookie = (name) => {
    //선생님코드
    //let value = "; " + document.cookie; 
    //let parts = value.split(`; ${name}=`); 

    let value = document.cookie; 
    let parts = value.split(`${name}=`); // 수많은 key=value형식의 cookie들 가운데에서 "; name="을 기준으로 앞 뒤를 잘라서 length=2인 배열만듦
                                        //aaa=bbb; name=ddd; eee=fff; ... > [aaa=bbb; / ddd; eee=fff; ... ]
    if ( parts.length === 2 ){
        return parts.pop().split(";").shift(); // parts배열에서 맨뒤의 값만 뽑아서 ';'를 기준으로 나누고, 나눈 배열에서 맨앞의 값을 return
        //ddd; eee=fff; ... > [ddd, eee=fff; ... ] > return ddd;
    }
    
}
const setCookie = (name, value, expire = 5) => { //expire=5 >>expire을 인자로 받아오지 않아도 기본값5로 setCookie에서 파라미터로 쓸 수 있게 해줌
    let date = new Date(); // Date객체로 날짜 받아옴 
    date.setTime(date.getTime() + expire * 1000 * 60 * 60 * 24); //3일뒤로 계산
    document.cookie = `${name} = ${value}; expires=${date.toUTCString}`; // 설정한 값 string으로 바꿔서 expires로 설정
}
const deleteCookie = (name) => {
    let date = new Date('1999-01-01').toUTCString();
    document.cookie = name+"=; expires="+date;  // value값을 비워버린거임 (삭제)
}


export {getCookie, setCookie, deleteCookie};