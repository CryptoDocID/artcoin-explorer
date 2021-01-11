'use strict';

angular.module('insight.artcoincorelib').factory('ArtcoinCoreLib',
    function() {
        var ArtcoinCoreLib = require('artcoincore-lib');
        return ArtcoinCoreLib;
    });

