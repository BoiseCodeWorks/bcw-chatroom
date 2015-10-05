app.controller('FirechatController', FirechatController);

function FirechatController(config, FirechatService){
	var vm = this;

	vm.setAuthor = function(){
		vm.author = vm.authorName;
		config.author = vm.author;
	}
	
	var stream = FirechatService.getChatStream();
	stream.on('value', function(data){
		vm.stream = data.val();
	});
	
	vm.sendChat = function(){
		if(vm.newChat){
			FirechatService.sendChat(vm.newChat);	
			vm.newChat = '';
		}
	}
	
}