sap.ui.define(
    ["hckt/manifest/controller/baseController"],
    function (baseController) {
        return baseController.extend("hckt.manifest.controller.master1", {
            onInit: function () {
                this.sortOrder = "true";
                this.oRouter = this.getOwnerComponent().getRouter();
                this.oRouter.attachRoutePatternMatched(this.bindElement, this);
            },
            bindElement: function (oParams) {
                var index = oParams.getParameters().arguments.productId;
                if (oParams.getParameters().name != "detail") {
                    if (index === "0") {
                        this.getView().byId("idList").bindItems({
                            path: "/fruits",
                            template: new sap.m.ObjectListItem({
                                icon: "{image}",
                                intro: "{benifit}",
                                number: "{price}",
                                numberUnit: "{unit}",
                                title: "{name}"
                            })
                        });
                    } else {
                        this.getView().byId("idList").bindItems({
                            path: "/flowers",
                            template: new sap.m.ObjectListItem({
                                icon: "{image}",
                                intro: "{benifit}",
                                number: "{price}",
                                numberUnit: "{unit}",
                                title: "{name}"
                            })
                        });
                    }
                }
            },
            onBack: function () {
                // this.goBack();
                this.oRouter.navTo("master");
            },
            onItemSelection: function (event) {
                var listItem = event.getParameter("listItem");
                var index = this.passListItem(listItem);
                this.oRouter.navTo("detail", {
                    type: this.getView().byId("idList")._aSelectedPaths[0].split("/")[1],
                    productId: index
                });
            },
            onLiveSearch: function (oEvent) {
                var sQuery = oEvent.getParameter("newValue");
                this.getLiveSearch("name", sQuery, "idList");
            },
            onRefresh: function (oEvent) {
                var oRefresh = oEvent.getParameter("refreshButtonPressed");
                this.getRefresh(oRefresh);
            },
            onFilter: function (event) {
                var oMaster = this.getView().getParent().getParent().getMasterPages()[1];
                this.getPopup("/filter", "{price}", "", oMaster);

            },
            onValueSelect_f4: function (event) {
                var selItem = event.getParameter("selectedItem");
                var sPath = selItem.getBindingContextPath().concat("/price");
                var oModel = this.getView().getModel();
                var oSelectedFilterValue = oModel.getProperty(sPath);
                if (oSelectedFilterValue === ">15") {
                    var oFilter = new sap.ui.model.Filter("price", sap.ui.model.FilterOperator.GT, 15);
                } else if (oSelectedFilterValue === "<15") {
                    var oFilter = new sap.ui.model.Filter("price", sap.ui.model.FilterOperator.LT, 15);
                } else if (oSelectedFilterValue === "=15") {
                    var oFilter = new sap.ui.model.Filter("price", sap.ui.model.FilterOperator.EQ, 15);
                }
                var aFilter = [oFilter];
                var oList = this.byId("idList");
                oList.getBinding("items").filter(aFilter);
            },
            onSort: function () {
                if (this.sortOrder === "true") {
                    this.sortOrder = "false";
                    var oSort = new sap.ui.model.Sorter("price", true);
                } else {
                    this.sortOrder = "true";
                    var oSort = new sap.ui.model.Sorter("price", false);
                }
                var oList = this.byId("idList");
                oList.getBinding("items").sort(oSort);
            }
        });
    });