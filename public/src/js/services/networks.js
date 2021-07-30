'use strict';

angular.module('insight.networks')
	.factory('Networks',
		function(Constants, ArtcoinCoreLib) {
			return {
				getCurrentNetwork: function () {
					return ArtcoinCoreLib.Networks.get(Constants.NETWORK);
				}
			}
		});