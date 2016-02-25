/**
 * 
 */

/**
 * 
 * @param {type} GeneralViewModel
 * @returns {home_L5.HomeViewModel}
 */
define(['view-models/GeneralViewModel', 'ojs/ojbutton'],
        function (GeneralViewModel) {

            function HomeViewModel() {
                var self = this;
                self.appTitle = GeneralViewModel.nls("appTitle");
                self.description = GeneralViewModel.nls("home.description");
                self.demoTitle = GeneralViewModel.nls("home.demoTitle");

                self.membershipsTitle = GeneralViewModel.nls("home.membershipsTitle");
                self.membershipsTableSeeMoreLabel = GeneralViewModel.nls("home.membershipsTable.seeMore");
                self.memberships = ["freeMembership", "silverMembership", "goldMembership"];
                self.membershipsTableHeaders = [GeneralViewModel.nls("home.membershipsTable.headers.permissions")];

                for (var i = 0; i < self.memberships.length; i++) {
                    var membershipTitle = GeneralViewModel.nls("home.membershipsTable.headers." + self.memberships[i]);
                    self.membershipsTableHeaders.push(membershipTitle);
                }

                var permissions = [
                    "15DaysTest1Plan", "shareAndExportPlan",
                    "createUpTo5Plans", "acceptColaborators",
                    "acceptAdministrators", "createUpTo10Plans"
                ];
                
                var membershipsPermissionsMap = {};        //free silver gold
                membershipsPermissionsMap[permissions[0]] = [true, true, true];
                membershipsPermissionsMap[permissions[1]] = [true, true, true];
                membershipsPermissionsMap[permissions[2]] = [false, true, true];
                membershipsPermissionsMap[permissions[3]] = [false, true, true];
                membershipsPermissionsMap[permissions[4]] = [false, true, true];
                membershipsPermissionsMap[permissions[5]] = [false, false, true];

                self.memberhispsTableEntries = [];

                for (var i = 0; i < permissions.length; i++) {
                    var membershipsByPermission = {
                        description: GeneralViewModel.nls("home.membershipsTable.permissions." + permissions[i]),
                        permissions: membershipsPermissionsMap[permissions[i]]
                    };

                    self.memberhispsTableEntries.push(membershipsByPermission);
                }

//                var mapProp = {
//                    center: new google.maps.LatLng(20.6997076, -103.336722),
//                    zoom: 15,
//                    mapTypeId: google.maps.MapTypeId.ROADMAP
//                };
//        
//                var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
//                google.maps.event.addDomListener(window, 'load', initialize);

            }

            return HomeViewModel;
        }
);