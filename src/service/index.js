define(['jquery'], function($) {
  let service = {
    getStudents: function(page, pageSize) {
      return {
        count: 19,
        page: 2,
        list: [
          {
            icon: 'hed.png',
            id: 156654,
            message: 7,
            type: '教师',
            user: '张三'
          },
          {
            icon: 'hed.png',
            id: 156655,
            message: 7,
            type: '教师',
            user: '张三'
          },
          {
            icon: 'hed.png',
            id: 156656,
            message: 7,
            type: '教师',
            user: '张三'
          },
          {
            icon: 'hed.png',
            id: 156656,
            message: 7,
            type: '教师',
            user: '张三'
          },
          {
            icon: 'hed.png',
            id: 156656,
            message: 7,
            type: '教师',
            user: '张三'
          },
          {
            icon: 'hed.png',
            id: 15665,
            message: 7,
            type: '教师',
            user: '张三'
          },
          {
            icon: 'hed.png',
            id: 15665,
            message: 7,
            type: '教师',
            user: '张三'
          },
          {
            icon: 'hed.png',
            id: 15665,
            message: 7,
            type: '教师',
            user: '张三'
          }
        ]
      };
    }
  };
  return service;
});
