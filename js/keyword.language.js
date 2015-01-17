hljs.registerLanguage('keyword', function () {
  return {
    keywords:{
      keyword: 'bike mountain clothing'
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