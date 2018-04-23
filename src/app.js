/*
 * @Author: malun
 * @Date: 2018-04-18 01:14:34
 * @Last Modified by: malun
 * @Last Modified time: 2018-04-23 13:32:05
 */

require.config({
  paths: {
    template: 'lib/arttemplate/template-web',
    index: 'js/index',
    jquery: 'https://cdn.bootcss.com/jquery/1.12.4/jquery.min'
  }
});

require(['index']);
