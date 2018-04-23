/*
 * @Author: malun
 * @Date: 2018-04-18 01:14:20
 * @Last Modified by: malun
 * @Last Modified time: 2018-04-23 13:48:26
 */

require([
  'template',
  'js/E',
  'jquery',
  'js/tmpl/user',
  'js/tmpl/header'
], function(template, E, $, userTpl, headTpl) {
  console.log(E.getUserName());
  let data = {
    title: '基本例子',
    isAdmin: true,
    list: ['文艺', '博客', '摄影', '电影', '民谣', '旅行', '吉他']
  };

  let html = template('test', data);
  let contDom = document.getElementById('content');
  contDom.innerHTML = html;

  contDom.innerHTML += headTpl('header', data);
  contDom.innerHTML += userTpl('footer', data);

  $.ajax({
    url: '/api/shoplist',
    type: 'GET',
    success: function(data) {
      console.log(data);
    }
  });
});
