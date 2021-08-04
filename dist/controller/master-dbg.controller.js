sap.ui.define(
	["hckt/manifest/controller/baseController"],
	function(baseController) {
		return baseController.extend("hckt.manifest.controller.master", {
			onInit: function() {
				this.oRouter = this.getOwnerComponent().getRouter();
			},
			onItemPress: function(oEvent) {
				var oListItem = oEvent.getParameter("listItem");
				var index = this.passListItem(oListItem);
					this.oRouter.navTo("master_fruit", {
						productId: index
					});
			},
			onNext: function() {
				this.next();
			},
			onLiveSearch: function(oEvent) {
				var sQuery = oEvent.getParameter("newValue");
				this.getLiveSearch("product", sQuery, "idList");
			},
			onRefresh: function(oEvent) {
				var oRefresh = oEvent.getParameter("refreshButtonPressed");
				this.getRefresh(oRefresh);
			}
		});
	});