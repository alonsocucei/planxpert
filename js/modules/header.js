/**
 * Header module
 */

/**
 * 
 * @param {type} ko
 * @param {type} oj
 * @returns {header_L9.HeaderViewModel}
 */
define(['view-models/header/ToggleButtonViewModel',
    'view-models/header/MenuViewModel',
    'view-models/header/ToolBarViewModel'],
        function (ToggleButtonViewModel, MenuViewModel, ToolBarViewModel) {
            /**
             * The view model for the header module
             */

            function HeaderViewModel() {
                var self = this;
                self.toggleButton = new ToggleButtonViewModel();
                self.homeMenu = new MenuViewModel();
                self.toolBar = new ToolBarViewModel();

                // Data for application name
                var appName = {
                    "id": "qs",
                    "name": "Plan eXpert"
                };

                self.appId = appName.id;
                self.appName = appName.name;
            }
            return HeaderViewModel;
        });
