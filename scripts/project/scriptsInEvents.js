


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
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

