hljs.registerLanguage('operator', function () {
  return {
    keywords:{
      keyword: 'bike mountain clothing',
      built_in: 'AND OR NOT'
    },
    contains: [
      {
        className: 'comment',
        begin: '^---?'
      },
      {
        className: 'string',
        begin: '^\\w+:'
      },
      {
        className: 'literal',
        begin: '\\{\\{', end: '\\}\\}'
      },
      {
        className: 'string',
        begin: '\\.\\w+'
      }
    ]
  };
})