Ext.define('theLaw.view.Main', {
    extend: 'Ext.NestedList',

    xtype: 'main',

    requires: [
        'Ext.TitleBar',
        'Ext.List',
        'Ext.data.Model',
        'Ext.dataview.List'
    ],

    config: {
        title: 'All The Commandments & More',
        backText: '',
        useTitleAsBackText: false,
        fullscreen: true,
        //defaultRootProperty: 'items',
        store: 'lawStore',
        grouped: true,
        itemTpl: '{text}',
        backButton: {
					iconCls: 'back',
					ui: 'plain'
				},
        styleHtmlContent: true/*,
        detailCard:{
           xtype:'panel',
           store: 'lawStore',
           styleHtmlContent: true,
           scrollable: true,
           html: '{text}'
        },
        listeners: {
            //This handler is require only if you want to update the detail card, etc.
            itemtap: function(nestedList, list, index, element, wall) {
               return this.getDetailCard().setHtml('got it');
             }

        }*/
    }
});
