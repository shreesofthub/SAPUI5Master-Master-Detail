sap.ui.define(
	["hckt/manifest/controller/baseController"
		//, "hckt/manifest/model/model"
	],
	function(baseController
	// , model
	) {
		return baseController.extend("hckt.manifest.controller.appView", {
			onInit: function() {
				// var jsonModel = model.getJModel("model/mockData/rawData.json");
				// var resourceModel = model.getRModel("i18n/i18n.properties");
				// this.setModel(jsonModel);
				// this.setModel(resourceModel,"i18n");
				// var splitAppId = this.getId("idApp--idSplitApp");
				// var splitAppId = this.getView().byId("idSplitApp");
				// var oMaster = new sap.ui.view("idMaster", {
				// 	viewName: "hckt.manifest.view.master",
				// 	type: sap.ui.core.mvc.ViewType.XML
				// });
				// var oDetail = new sap.ui.view("idDetail", {
				// 	viewName: "hckt.manifest.view.Detail",
				// 	type: sap.ui.core.mvc.ViewType.XML
				// });
				// var oMaster1 = new sap.ui.view("idMaster1", {
				// 	viewName: "hckt.manifest.view.master1",
				// 	type: sap.ui.core.mvc.ViewType.XML
				// });
				// var oMaster2 = new sap.ui.view("idMaster2", {
				// 	viewName: "hckt.manifest.view.master2",
				// 	type: sap.ui.core.mvc.ViewType.XML
				// });
				// splitAppId.addMasterPage(oMaster);
				// splitAppId.addMasterPage(oMaster1);
				// splitAppId.addMasterPage(oMaster2);
				// // splitAppId.setInitialMaster(oMaster2);
				// splitAppId.addDetailPage(oDetail);
			}
		});
	});