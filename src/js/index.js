/*
 * @Author: malun
 * @Date: 2018-04-18 01:14:20
 * @Last Modified by: malun
 * @Last Modified time: 2018-04-18 02:22:19
 */

require(['template', 'js/E', 'jquery'], function(template, E, $) {
  console.log(E.getUserName());
  let data = {
    title: '基本例子',
    isAdmin: true,
    list: ['文艺', '博客', '摄影', '电影', '民谣', '旅行', '吉他']
  };
  let html = template('test', data);
  document.getElementById('content').innerHTML = html;
  console.log($);
  $.ajax({
    url: '/api/shoplist',
    type: 'GET',
    success: function(data) {
      console.log(data);
    }
  });
});
