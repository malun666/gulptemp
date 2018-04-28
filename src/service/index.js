define([], function() {
  let service = {
    getStudents: function(page, pageSize) {
      return { count: 19, page: 2, list: [] };
    }
  };
  return service;
});
