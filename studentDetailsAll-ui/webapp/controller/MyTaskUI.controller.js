sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("studentDetailsAllui.studentDetailsAllui.controller.MyTaskUI", {
            onInit: function () {

            },

            onSubmitStudent: function () {
                var sId = this.getView().byId("idInput").getValue();
                var sName = this.getView().byId("nameInput").getValue();
                var sBranch = this.getView().byId("branchInput").getValue();
                var sFee = this.getView().byId("feeInput").getValue();

                if (!sId || !sName || !sBranch || !sFee) {
                    MessageToast.show("Please fill in all fields.");
                    return;
                }


                var oStudentData = {
                    id: sId,
                    name: sName,
                    branch: sBranch,
                    fee: sFee
                };

   
                console.log("All student Data ", oStudentData);
                
                MessageToast.show("Details for " + sName + " fetched successfully!");
            }
        });
    });
