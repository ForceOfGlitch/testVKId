


const scriptsInEvents = {

	async EventSheet1_Event2_Act1(runtime, localVars)
	{
		var path = document.createElement('script');
		path.src = '//vk.com/js/api/openapi.js';
		document.head.appendChild(path);
		
		path.onload = function() {
			console.log(123);
			VK.init({
				apiId: 51693034
			});
			
			VK.Api.call('users.get', { user_ids: 210700286, fields: 'bdate' }, function(r)	{
		   	VK.Auth.login(
		      // callback-функция, которая будет вызвана после авторизации
		      function (response) {
			  	console.log("Гыгыгы");
		        console.log(response)
		 
		        if (response.status === 'connected') { // авторизация прошла успешно
		 
		          var user = response.session.user; //  информация о пользователе
		            /*
		             user.first_name - имя;
		             user.last_name - фамилия;
		             user.href - ссылка на страницу в формате https://vk.com/domain;
		             user.id  - идентификатор пользователя;
		             user.nickname -  отчество или никнейм (если указано);
		             */
					console.log(user);
		        } else if (response.status === 'not_authorized') { // пользователь авторизован в ВКонтакте, но не разрешил доступ приложению;
		 
		        } else if (response.status === 'unknown') { // пользователь не авторизован ВКонтакте.
		 
		        }
		 
		      },
		      // права доступа (integer)
		      // допустимые значения:
		      // AUDIO:8
		      // FRIENDS:2
		      // MATCHES:32
		      // PHOTOS:4
		      // QUESTIONS:64
		      // VIDEO:16
		      // WIKI:128
		      VK.access.PHOTOS
		    );
		   });
		}
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

