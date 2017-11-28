Ext.define('theLaw.model.lawModel', {
    extend: 'Ext.data.Model',

    config: {
      fields: [
        {name: 'text',  type: 'string'},
        //{name: 'precept',  type: 'string'},
        {name: 'leaf',  type: 'boolean'}
      ]
    }
});
