app.service('FirechatService', FirechatService);

function FirechatService(config){
	
	var fb_chatStream = new Firebase(config.dbPaths.chats);
	
	this.getChatStream = function(){
		return fb_chatStream;
	} 
	
	this.sendChat = function(message){
		if(config.author){
			var chat = {
				body: message,
				timestamp: Date.now(),
				author: config.author
			}
			fb_chatStream.push(chat);	
		}
	}
	
}