// sap.ui.define(
// 	["sap/ui/model/json/JSONModel",
// 	"sap/ui/model/resource/ResourceModel"],
// 	function(jsonModel,resourceModel){
// 		return{
// 			getJModel:function(sPath){
// 				var jModel = new jsonModel();
// 				jModel.loadData(sPath);
// 				return jModel;
// 			},
// 			getRModel:function(sPath){
// 				var rModel = new resourceModel({
// 					bundleUrl:sPath
// 				});
// 				return rModel;
// 			}
// 		};
// 	});