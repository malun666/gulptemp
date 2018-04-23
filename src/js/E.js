/*
 * @Author: malun
 * @Date: 2018-04-23 11:05:52
 * @Last Modified by: malun
 * @Last Modified time: 2018-04-23 11:07:30
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

    /**
     * 设置用户名
     * @param {string} name
     * @memberof Demo
     */
    setUserName(name) {
      name && (this._userName = name);
    }
  }
  return new Demo();
});
