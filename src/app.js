/*
 * @Author: malun
 * @Date: 2018-04-18 01:14:34
 * @Last Modified by: malun
 * @Last Modified time: 2019-04-04 15:09:20
 */

require.config({
  paths: {
    template: 'lib/arttemplate/template-web',
    index: 'js/index',
    jquery: 'https://cdn.bootcss.com/jquery/1.12.4/jquery.min'
  }
});

require(['index']);
