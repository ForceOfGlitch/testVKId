


const scriptsInEvents = {

	async EventSheet1_Event2_Act1(runtime, localVars)
	{
		var path = document.createElement('script');
		path.src = '//vk.com/js/api/openapi.js';
		document.head.appendChild(path);
		
		path.onload = function() {
			
			VK.init({
				apiId: 51693034
			});
			
			function authInfo(response) {
			  if (response.session) {
				  console.log(response.session.mid);
				  console.log("log response ended");
			  }
			}
			
			VK.Auth.getLoginStatus(authInfo);
			VK.Auth.login(authInfo);
			
			VK.api("account.getProfileInfo", function (data) {
		    	alert("Info: " + data.first_name + " " + data.last_name + " " + data.id);
		    	console.log("Info: " + 
					data.first_name + " " + 
					data.last_name + " " + 
					data.id);
		    	returnStr = data.id;
				console.log("api word is end here");
			});
		}
		
		var http = new XMLHttpRequest();
		var url = 'https://api.vk.com/method/users.get?user_ids=743784474&fields=bdate&access_token=533bacf01e11f55b536a565b57531ac114461ae8736d6506a3&v=5.131 HTTP/1.1';
		console.log(http.open('POST', url, true));
		
		var script = document.createElement('SCRIPT');
		script.src = "https://api.vk.com/method/users.get?user_ids=210700286&fields=bdate&v=5.131&callback=callbackFunc";
		document.getElementsByTagName("head")[0].appendChild(script);
		function callbackFunc(result) {
			console.log(result.response[0].first_name);
		}
		//Send the proper header information along with the request
		// http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		// http.onreadystatechange = function() {//Call a function when the state changes.
		//     if(http.readyState == 4 && http.status == 200) {
		//         alert(http.responseText);
		//     }
		// }
		http.send(params);
		//https://oauth.vk.com/blank.html#access_token=vk1.a.0az2p1GIqld1OD9oM7pvXFpWCFNVFLsiG8BBHuXft9Cs1fw0c28JLpOOH7AXMeksSoHH0G55tI7CAgtk7oRO1xv42jG-ocMexDv_t6DdMdHwodNOOIEoqVUG412TgF1JvhaK6wjJ7Fhy-B4sQM8rHwOTOQd1xsj6aggxcTh_2MKi7KaJHVUXkll9M3Revzxy&expires_in=86400&user_id=493261263
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

