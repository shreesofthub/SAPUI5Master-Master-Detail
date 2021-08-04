sap.ui.define(
	["sap/ui/core/UIComponent"
		// ,"hckt/manifest/model/model"
	],
	function(uiComponent
	// , model
	) {
		return uiComponent.extend("hckt.manifest.Component", {
			metadata: {
				"manifest": "json"
			},
			init: function() {
				uiComponent.prototype.init.apply(this);
				// Commented below Program lines has to be design in Manifest.json				
				// var jsonModel = model.getJModel("model/mockData/rawData.json");
				// var resourceModel = model.getRModel("i18n/i18n.properties");
				// this.setModel(jsonModel);
				// this.setModel(resourceModel, "i18n");
				var oRouter = this.getRouter();
				oRouter.initialize();
			},
			//Below Commented Program Lines, have to configured in Manifest.json			
			// createContent: function() {
			// 	var oAppView = new sap.ui.view({
			// 		id: "idApp",
			// 		viewName: "hckt.manifest.view.appView",
			// 		type: sap.ui.core.mvc.ViewType.XML
			// 	});
			// 	return oAppView;
			// },
			destroy: function() {

			}
		});
	});