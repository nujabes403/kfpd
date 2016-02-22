'use strict';

/**
 * @ngdoc function
 * @name initApp.controller:NewcustomerCtrl
 * @description
 * # NewcustomerCtrl
 * Controller of the initApp
 *
 * 거래처명: NAME
 * 거래처 구분: isIndvidual
 * 대표자: PRESIDENT
 * 사업자본호: BUSINESS_NO
 * 우편번호: ZIPCODE
 * 주소: ADDRESS
 * 전화번호: TEL_NO
 * 휴대폰번호: MOBILE_NO
 * 팩스번호: FAX_NO
 * 거래시작일: DEAL_BEGIN_DT
 * 주거래은행: BANK_CD
 * 계좌번호: ACCOUNT_NO
 * 예금주: DEPOSITOR
 * 매입처 여부: SUPPLIER_YN
 * 매출처 여부: SALES_YN
 * 미수현황 표시 여부: RECEIVABLE_YN
 * 미수현황비고: RECEIVABLE_NOTE
 * 블랙리스트 여부: BLACKLIST_YN
 * 표시 노트: DISP_NOTE
 */
angular.module('initApp')
  .controller('NewcustomerCtrl', function ($rootScope, $scope, $location, FBURL, CustomerService, $firebaseObject) {

    var ref = new Firebase(FBURL).child('customers');
    $scope.showHints = true;
    $scope.customerForm = null;
    $scope.isDup = false;
    $scope.customerObj = {};
    $scope.checkDuplicate = function(){
      console.log('check');
      if($scope.customerForm.name.length !== 0){
        var result = $firebaseObject(ref.child($scope.customerForm.name));
        result.$loaded().then(function(data){
          console.log(data)
          if(data.name==null){
            $scope.isDup = false;
          }
          else{
            $scope.isDup = true;
          }
        })
      }


    }
    $scope.createCustomer = function(){

      //var customersRef = new Firebase(FBURL).child('customers').orderByChild('name').equalTo($scope.customerForm.name).once('value', function(snap) {
      //  // the keys are the user ids, the values are objects containing each user record that matched (presumably 1?)
      //  console.log( snap.val());
      //  if(snap.val()!== null){
      //    alert("중복되는 데이터 입니다");
      //  }
      //  else{
      //    CustomerService.addNewCustomer($scope.customerForm);
      //  }
      //});

      //CustomerService.addNewCustomer($scope.customerForm);
      var customerRef = new Firebase(FBURL).child('customers');
      var onComplete = function(error) {
        if (error) {
          alert('[에러]:'+error);
        } else {
          alert('성공적으로 저장되었습니다.');
          $rootScope.$apply(function() {
            $location.path("/customer");})
        }
      };
      var newCustomer = customerRef.child($scope.customerForm.name);
      newCustomer.set($scope.customerForm, onComplete);

    }

  });
