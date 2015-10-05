app.controller('FirechatController', FirechatController);

function FirechatController(config, FirechatService, $scope){
	var vm = this;

	vm.setAuthor = function(){
		vm.author = vm.authorName;
		config.author = vm.author;
	}
	
	var stream = FirechatService.getChatStream();
	stream.on('value', function(data){
		$scope.$apply(function(){
			vm.stream = data.val()
		});
	});
	
	vm.sendChat = function(){
		if(vm.newChat){
			FirechatService.sendChat(vm.newChat);	
			vm.newChat = '';
		}
	}
	
}