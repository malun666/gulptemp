require.config({
  paths: {
    template: '/lib/arttemplate/template-web',
    jquery: 'https://cdn.bootcss.com/jquery/1.12.4/jquery.min'
  }
});
require(['template', 'jquery', '../../js/tmpl/student'], function(
  template,
  $,
  student
) {
  $('.con').html(student('stuList', { name: '3334' }));
});
