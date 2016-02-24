'use strict';

/**
 * @ngdoc service
 * @name initApp.doorService
 * @description
 * # doorService
 * Factory in the initApp.
 */
angular.module('initApp')
  .factory('doorService', function ($q, FBURL, $firebaseArray) {
    var doorsRef = new Firebase(FBURL).child('doors');
    var drOptionRef = new Firebase(FBURL).child('doorOptions');

    // Public API here
    return {
      addNewDoor: function (doorObj) {
        var deferred = $q.defer();
        deferred.notify('addNewDoor working with: ' + doorObj.type + '.');
        var newDoor = doorsRef.push();
        newDoor.set(doorObj, function(error) {
          if (error) {
            deferred.reject(error);
          } else {
            deferred.resolve('성공적으로 저장되었습니다.')
          }
        });
        return deferred.promise;
      },
      updateDoor: function(doorId, doorObj) {

      },
      deleteDoor: function(doorId){

      },
      findDoor: function(doorId){

      },
      listDoor: function(limit, type){
        return $firebaseArray(doorsRef);
      },
      listOptions: function(){
        var deferred = $q.defer();
        $firebaseArray(drOptionRef).$loaded()
          .then(function(data){
            deferred.resolve(data)
          })
          .catch(function(error) {
            deferred.reject(error);
          });
        return deferred.promise;
      },
      createOptions: function(name){
        var deferred = $q.defer();
        var obj = {name:name, price:0, published: true};
        //deferred.notify('addNewFrame working with: ' + obj.name + '.');
        var newOption = drOptionRef.child(obj.name)
        newOption.set(obj, function(error) {
          if (error) {
            deferred.reject(error);
          } else {
            deferred.resolve('성공적으로 저장되었습니다.')
          }
        });
        return deferred.promise;
      },
      deleteOptions: function(objId){
        var deferred = $q.defer();
        var target = drOptionRef.child(objId);
        var onComplete = function(error) {
          if (error) {
            deferred.reject(error);
          } else {
            deferred.resolve('해당 옵션을 삭제 하였습니다.')
          }
        };
        target.remove(onComplete);
        return deferred.promise;
      },
      updateOptions: function(objId, obj){
        var deferred = $q.defer();
        var target = drOptionRef.child(objId);
        var onComplete = function(error) {
          if (error) {
            deferred.reject(error);
          } else {
            deferred.resolve('해당 옵션을 저장하였습니다.');
          }
        };
        target.update(obj, onComplete);
        return deferred.promise;
      },
    };
  });
