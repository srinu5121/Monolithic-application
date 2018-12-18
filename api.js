function AllPeople(){
  return fetch("/api/people").then(res=>res.json()).then(resJson=>return resJson)
}

const API = {AllPeople}
export default API;
