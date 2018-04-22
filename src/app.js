/*
 * @Author: malun
 * @Date: 2018-04-18 01:14:34
 * @Last Modified by: malun
 * @Last Modified time: 2018-04-21 17:00:54
 */

require.config({
  paths: {
    template: 'lib/arttemplate/template-web',
    index: 'js/index',
    jquery: 'https://cdn.bootcss.com/jquery/1.12.4/jquery.min',
    htmlTpl: 'js/htmlTpl'
  }
});

require(['index']);
