sap.ui.define(
    ["sap/ui/core/mvc/Controller",
        "sap/ui/model/Filter",
        "sap/ui/model/FilterOperator"
    ],
    function (controller, oFilter, oFilterOperator) {
        return controller.extend("hckt.manifest.controller.baseController", {
            _oCore: new sap.ui.getCore(),
            getId: function (id) {
                return this._oCore.byId(id);
            },
            setModel: function (model, name) {
                return this._oCore.setModel(model, name);
            },
            getModel: function (model) {
                return this._oCore.getModel(model);
            },
            goBack: function () {
                var oApp = this.getView().getParent().getParent();
                oApp.backMaster();
            },
            next: function () {
                // var oApp = this.getId("idApp--idSplitApp");
                var oApp = this.getView().getParent().getParent();
                var oDetail = oApp.getDetailPages()[0];
                oApp.to(oDetail);
            },
            passListItem: function (listItem) {
                var oPath = listItem.getBindingContextPath();
                var index = oPath.split("/")[oPath.split("/").length - 1];
                return index;
            },
            getLiveSearch: function (name, query, id) {
                var filter = new oFilter(name, oFilterOperator.Contains, query);
                var aFilter = [filter];
                var oList = this.getView().byId(id);
                oList.getBinding("items").filter(aFilter);
            },
            getRefresh: function (refreshQuery) {
                if (refreshQuery) {
                    var oList = this.getView().byId("idList");
                    oList.getBinding("items").filter(null);
                }
            },
            getPopup: function (sPath, name, desc, oMaster) {
                var popUpFragment = new sap.ui.xmlfragment("hckt.manifest.fragments.popup", this);
                oMaster.addDependent(popUpFragment);
                popUpFragment.bindAggregation("items", {
                    path: sPath,
                    template: new sap.m.StandardListItem({
                        title: name,
                        description: desc
                    })
                });
                return popUpFragment.open();
            },
            
        });
    });