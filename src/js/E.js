/*
 * @Author: malun
 * @Date: 2018-04-18 01:13:50
 * @Last Modified by:   malun
 * @Last Modified time: 2018-04-18 01:13:50
 * 仅用于演示
 */

'use strict';

define(function() {
  class Demo {
    constructor(opt) {
      console.log(123);
      this._userName = 1234;
    }

    getUserName() {
      return this._userName;
    }
    setUserName(name) {
      name && (this._userName = name);
    }
  }
  return new Demo();
});
