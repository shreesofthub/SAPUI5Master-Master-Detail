sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/model/Filter","sap/ui/model/FilterOperator"],function(e,t,n){return e.extend("hckt.manifest.controller.baseController",{_oCore:new sap.ui.getCore,getId:function(e){return this._oCore.byId(e)},setModel:function(e,t){return this._oCore.setModel(e,t)},getModel:function(e){return this._oCore.getModel(e)},goBack:function(){var e=this.getView().getParent().getParent();e.backMaster()},next:function(){var e=this.getView().getParent().getParent();var t=e.getDetailPages()[0];e.to(t)},passListItem:function(e){var t=e.getBindingContextPath();var n=t.split("/")[t.split("/").length-1];return n},getLiveSearch:function(e,i,r){var a=new t(e,n.Contains,i);var o=[a];var s=this.getView().byId(r);s.getBinding("items").filter(o)},getRefresh:function(e){if(e){var t=this.getView().byId("idList");t.getBinding("items").filter(null)}},getPopup:function(e,t,n,i){var r=new sap.ui.xmlfragment("hckt.manifest.fragments.popup",this);i.addDependent(r);r.bindAggregation("items",{path:e,template:new sap.m.StandardListItem({title:t,description:n})});return r.open()}})});