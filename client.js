const axios = require('axios');
const  parse  = require ('node-html-parser');
const axiosCookieJarSupport = require ('axios-cookiejar-support').default;
const tough= require ('tough-cookie');
const  qs =  require ('querystring');

function getCookieAxios() {
	const cookieJar = new tough.CookieJar()
	// axios.defaults.jar = cookieJar
	// axios.defaults.withCredentials = true
	const _axios = axios.create({
		withCredentials: true,
		jar: cookieJar
	})
  axiosCookieJarSupport(_axios)
	return _axios
}

const login=  async () => {
  try {
    const _axios2 = getCookieAxios();
    const response = await _axios2.get('http://localhost:3000/keycloack/login');
    //console.log("response = " + response.data);
    const root = parse.parse(response.data);
    //console.log(root.toString());
    const EL= root.querySelector('form');
    const action = EL.getAttribute('action').toString();
    console.log("action = "+ EL.getAttribute('action'))
    try{
      
      //const reponse2 = await axios.post(action,formd);
      const reponse2 = await _axios2.post(
        action,
        qs.stringify({
          ['username']: 'shlomo',
          ['password']: 'Aq123456',
          //view: 'login'
          credentialId: null
        }),
        {
          headers: {
           'Content-type': 'application/x-www-form-urlencoded'
          }
       }
        //data: 'username=shlomo&password=Aq123456&credentialId= '
        //data: 'username=shlomo&password=Aq123456'
        
      );
      console.log("response2 = " + reponse2.data.toString());

    }catch (error) {
      console.error(error)
     }
    
  } catch (error) {
    console.error(error)
  }
}

login();