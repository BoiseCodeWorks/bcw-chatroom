/* global Firebase */
var app = angular.module('fireChat', []);

app.constant('config', config()); 

function config(){
      var _root = 'https://bcw-firechat.firebaseio.com/';            
      return {
      dbPaths: {
            root: _root,
            chats: _root + 'chats/'         
      },
      author: ''
      }              
};