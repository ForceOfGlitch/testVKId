


const scriptsInEvents = {

	async EventSheet1_Event2_Act1(runtime, localVars)
	{
		src="https://unpkg.com/@vkontakte/vk-bridge/dist/browser.min.js"
		vkBridge.send('VKWebAppInit');
		// Подписывается на события, отправленные нативным клиентом
		vkBridge.subscribe((e) => console.log(e)); 
		    
		// Отправляет событие нативному клиенту
		console.log(999)
		
		vkBridge.send("VKWebAppInit", {});      
		    
		vkBridge.send('VKWebAppGetLaunchParams')
		  .then((data) => { 
		    if (data.vk_app_id) {
		      // Параметры запуска получены
			  console.log(data.vk_app_id)
		    }
		  })
		  .catch((error) => {
		    // Ошибка
		    console.log(error);
		  });
		
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

