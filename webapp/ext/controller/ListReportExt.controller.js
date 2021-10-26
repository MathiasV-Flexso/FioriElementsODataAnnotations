sap.ui.define(['sap/m/MessageToast'],
function (MessageToast){
    "use strict";
    return {
        onInit: function (){
            this.oDialog;
        },
        
        onBeforeRebindTableExtension:function(oEvent){
            var tableData = oEvent.getParameters().bindingParams;
            var oSelectControl = this.byId("filterid").getSelectedItem();
            
            if(oSelectControl){
                let sVal = oSelectControl.getText();
                var newFilter = new sap.ui.model.Filter( "OrderID",
                    sap.ui.model.FilterOperator.EQ,
                    sVal 
                );
                tableData.filters.push( newFilter );
            }
        },

        onCustomAction: function(){
            if(this.oDialog == undefined){
                this.oDialog = sap.ui.xmlfragment(this.getView().getId(), "com.flexso.northwindtestodata.ext.fragments.CustomFilter", this);
			    this.getView().addDependent(this.oDialog);
            }
            this.oDialog.open();
        },

        onSave: function(){
            console.log("Saved.");
            this.oDialog.close();
        },

        onCancel: function(){
            console.log("Closed.");
            this.oDialog.close();
        }
    };
});