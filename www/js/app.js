/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
    }
};

app.initialize();


var walkinApp = angular.module('walkinApp',['ngCordova','ngRoute','ngMaterial','restangular','ngMessages',
    'angular-input-stars']);

walkinApp.config(function($mdThemingProvider, $mdIconProvider, $routeProvider,
    RestangularProvider){
    $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('green');
    $mdIconProvider.fontSet('fa','fontawesome');
    RestangularProvider.setBaseUrl('http://walkinanalytics.cloudapp.net/api/');
    RestangularProvider.setDefaultHeaders({'Access-Control-Allow-Origin' : '*'});
    $routeProvider
        .when("/login", {
            templateUrl :  "home.html",
            controller  : "loginController"
        })
        .when("/business", {
            templateUrl :  "business.html",
            controller : "homeController"
        })
        .when("/personal", {
            templateUrl :  "personal.html",
            controller : "shoppingDetailsController"
        })
        .when("/misc", {
            templateUrl : "misc.html",
            controller : "ratingsController"
        });
});

walkinApp.run(function($rootScope, $cordovaPreferences, $location, Restangular, categoryService){
    Restangular.one('/category').get().then(function(data){
        if(data.returnCode == "SUCCESS")
        {
            categoryService.setCategories(data.data);
        }
        else
        {

        }
    },function(error){

    });
    $location.path('/login');
});
