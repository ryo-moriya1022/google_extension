import {Test} from "./test1.js"
import {api} from "./api.js"

function start() {
    // 2. Initialize the JavaScript client library.
    api.gapi.client.init({
      'apiKey': 'AIzaSyBsDcrY9uvAC0_0tCW_TxxY8XtL9PYWyEY',
      // clientId and scope are optional if auth is not required.
      //'clientId': 'YOUR_WEB_CLIENT_ID.apps.googleusercontent.com',
      //'scope': 'profile',
    }).then(function() {
      // 3. Initialize and make the API request.
      return api.gapi.client.request({
        'path': 'https://people.googleapis.com/v1/people/me?requestMask.includeField=person.names',
      })
    }).then(function(response) {
      console.log(response.result);
    }, function(reason) {
      console.log('Error: ' + reason.result.error.message);
    });
  };
  
const e=new Test();
e.test0();
start();
console.log("test-1");

