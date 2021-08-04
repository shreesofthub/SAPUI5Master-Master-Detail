sap.ui.define(
    ["hckt/manifest/controller/baseController"],
    function (baseController) {
        return baseController.extend("hckt.manifest.controller.detail", {
            onInit: function () {
                this.oRouter = this.getOwnerComponent().getRouter();
                this.oRouter.attachRoutePatternMatched(this.bindElement, this);

            },
            bindElement: function (oParams) {
                var sPath = oParams.getParameters().arguments.productId;
                if (oParams.getParameters().arguments.type === "fruits") {
                    sPath = "/fruits/" + sPath;
                    this.getView().bindElement(sPath);
                    this.getView().byId("idFlowerForm").setVisible(false);
                    this.getView().byId("idFruitForm").setVisible(true);
                } else {
                    sPath = "/flowers/" + sPath;
                    this.getView().bindElement(sPath);
                    this.getView().byId("idFruitForm").setVisible(false);
                    this.getView().byId("idFlowerForm").setVisible(true);
                }
            },
            onBack: function () {
                this.oRouter.navTo("master");
            }
        });
    });