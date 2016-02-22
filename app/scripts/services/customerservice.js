'use strict';

/**
 * @ngdoc service
 * @name initApp.CustomerService
 * @description
 * # CustomerService
 * Factory in the initApp.
 *
 * Data Types
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
 *
 * 사용여부: USE_YN
 * 삭제여부: DEL_YN
 * 등록자아이디: REG_ID
 * 등록일시: REG_DT
 * 수정자 아이디: MODE_ID
 * 수정일시: MOD_DT
 *
 */
angular.module('initApp')
  .factory('CustomerService', function ($location, FBURL, $firebaseArray, $firebaseObject) {
    var customerRef = new Firebase(FBURL).child('customers');
    var onComplete = function(error) {
      if (error) {
        alert('[에러]:'+error);
      } else {
        $location.path('customer');
        alert('성공적으로 저장되었습니다.');
      }
    };
    // Public API here
    return {
      addNewCustomer: function (custObj) {
        console.log(custObj);
        var newCustomer = customerRef.child(custObj.name);
        newCustomer.set(custObj, onComplete);
      },
      updateCustomer: function(custId, custObj) {

      },
      deleteCustomer: function(custId){

      },
      findCustomer: function(custId){

      },
      listCustomer: function(limit, type){
        return $firebaseArray(customerRef);
      }
    };
  });
