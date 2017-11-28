Ext.define('theLaw.store.lawStore', {
    extend: 'Ext.data.TreeStore',

    config: {
      //model for the store
      model: 'theLaw.model.lawModel',
      //root element in store
      defaultRootProperty: 'items',
      //storeId: 'lawStore',
      proxy: {
        type: 'ajax',
        url : 'data.json',
        reader: {
          type: 'json'
        }
      },
      autoLoad: true
    }
});
