import { API_BASE_URL } from '../app-config'; 
const ACCESS_TOKEN = "ACCESS_TOKEN";

export function call(api, method, request) {
  
  let headers = new Headers({
    "Content-Type": "application/json",
  });

  // 로컬 스토리지에서 ACESS_TOKEN 가져오기
  const accessToken = localStorage.getItem("ACCESS_TOKEN");
  if (accessToken && accessToken != null) {
    headers.append("Authorization", "Bearer " + accessToken);
  }

  let options = {
    // headers: new Headers({
    //   "Content-Type": "application/json",
    // }),
    headers: headers,
    url: API_BASE_URL + api,
    method: method,
  };
  if (request) {
    // GET methos
    options.body = JSON.stringify(request);
  }
  return fetch(options.url, options)
    // .then((response) => 
    //   response.json().then((json) => {
    //   if (!response.ok) {
    //     // response.ok가 true이면 정상적인 응답을 받은 것이고 아니면 에러 응답을 받은 것임
    //     // return Promise.reject(json);
    //     return Promise.reject(response);
    //   }
    //   return response.json();
    // })
    // )

    // 부트 버전 상승으로 코드 변경
    .then((response) => {
        if (!response.ok) {
          return Promise.reject(response);
        }
        return response.json();
    })
  
  .catch((error) => {
    // 추가된 부분
    console.log(error.message);
    console.log("에러: " + error.status);
    if (error.status === 403) {
      window.location.href = "/login"; // redirect
    }
    return Promise.reject(error);
  });
}

export function signin(userDTO) {
  return call("/auth/signin", "POST", userDTO)
    .then((response) => {
      if (response.token) {
        console.log("response : " , response);
         alert("로그인 토큰: " + response.token);
        // token이 존재하는 경우 Todo 화면으로 리디렉트
        // 로컬 스토리지에 토큰 저장
        localStorage.setItem("ACCESS_TOKEN", response.token);
        // token이 존재하는 경우 Todo 화면으로 리디렉트
        window.location.href="/";
      }
    });
}