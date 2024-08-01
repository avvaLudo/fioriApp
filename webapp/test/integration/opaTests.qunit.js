QUnit.config.autostart = false;

sap.ui.require(["sap/ui/core/Core"], async(Core) => {
	"use strict";

	await Core.ready();

	sap.ui.require([
		"project1/localService/mockserver",
		"project1/test/integration/NavigationJourney"
	], (mockserver) => {
		// initialize the mock server
		mockserver.init();
		QUnit.start();
	});
});