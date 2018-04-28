require.config({
  paths: {
    template: '/lib/arttemplate/template-web',
    jquery: 'https://cdn.bootcss.com/jquery/1.12.4/jquery.min',
    service: '/service/index'
  }
});
require(['template', 'jquery', '../../js/tmpl/student', 'service'], function(
  template,
  $,
  student,
  service
) {
  $('.con').html(student('stuList', { name: '3334' }));
  $('.con2').html(student('userList', service.getStudents()));
});
