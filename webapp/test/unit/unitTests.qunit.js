QUnit.config.autostart = false;

sap.ui.require(["sap/ui/core/Core"], async(Core) => {
	"use strict";

	await Core.ready();

	sap.ui.require([
		"project1/test/unit/model/formatter"
	], () => {
		QUnit.start();
	});
});
