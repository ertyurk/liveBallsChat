app.controller('indexController', ['$scope', 'indexFactory', ($scope, indexFactory) =>{
  const connectionOptions = {
    reconnectionAttempts: 3,
    reconnectionDelay: 600
  };

  indexFactory.connectSocket('http://localhost:3000',connectionOptions)
    .then((socket) =>{
    console.log('Connection Successfull', socket);
    }).catch ((err)=>{
    console.log(err);
    });
}]);
