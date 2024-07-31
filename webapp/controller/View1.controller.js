sap.ui.define([
    "sap/ui/core/mvc/Controller", 
    "sap/m/MessageToast", 
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
],
function (Controller, MessageToast, JSONModel, ResourceModel) {
    "use strict";

    return Controller.extend("project1.controller.View1", {
		onShowHello() {
			// read msg from i18n model
			const oBundle = this.getView().getModel("i18n").getResourceBundle();
			const sRecipient = this.getView().getModel().getProperty("/recipient/name");
			const sMsg = oBundle.getText("helloMsg", [sRecipient]);
            debugger;
			// show message
			MessageToast.show(sMsg);
		},
        async onOpenDialog() {
            // create dialog lazily
            this.oDialog ??= await this.loadFragment({
                name: "project1.view.HelloDialog"
            });
        
            this.oDialog.open();
        },

		onCloseDialog() {
			// note: We don't need to chain to the pDialog promise, since this event handler
			// is only called from within the loaded dialog itself.
			this.byId("helloDialog").close();
		}
    });
});
