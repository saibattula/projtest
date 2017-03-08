sap.ui.jsview("testgit.gitview", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf testgit.gitview
	*/ 
	getControllerName : function() {
		return "testgit.gitview";
		//br2
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf testgit.gitview
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page({
			title: "Git Page Modify",
			content: [
			
			]
		});
	}

});