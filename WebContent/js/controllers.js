'use strict';

/* Controllers */

angular.module('lashesApp.controllers', [])
    .controller('MainCtrl', function ($scope, $window, $location, $http, $routeParams, $compile) {

//        $scope.$on('$viewContentLoaded', function(event){
//            // Tracking current page
//            ga('send', 'pageview', {'page': $location.path()});
//
//
//        });
    })
    .controller('ContactCtrl', function () {

    })
    .controller('AboutCtrl', [function() {

    }]);

function largeCarouselCtrl($scope, $http) {
    $scope.myInterval = 5000;
    var slides = $scope.slides = [];

    $http.get('data/carousel.json').success(function(data) {
        $scope.slides = data;
    });

}

function calendarCtrl($scope) {

        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();
        /* event source that pulls from google.com */
        $scope.eventSource = {
            //url: "http://www.google.com/calendar/feeds/usa__en%40holiday.calendar.google.com/public/basic",
           url: "https://www.google.com/calendar/feeds/1j8aalenfldo4bgufs1rkg8d30%40group.calendar.google.com/public/basic",
            className: 'gcal-event'
            //,           // an option!
            //currentTimezone: 'Australia/Melbourne' // an option!
        };

        /* alert on eventClick */
        $scope.alertDayOnClick = function( date, allDay, jsEvent, view ){
            $scope.$apply(function(){
                $scope.alertMessage = ('Day Clicked ' + date);
                alert(date);
                return false;
            });
        };
        /* alert on eventClick */
        $scope.alertEventOnClick = function( date, allDay, jsEvent, view ){
            $scope.$apply(function(){
                $scope.alertMessage = ('Day Clicked ' + date);
                return false;
            });
        };
        /* alert on Drop */
        $scope.alertOnDrop = function(event, dayDelta, minuteDelta, allDay, revertFunc, jsEvent, ui, view){
            $scope.$apply(function(){
                $scope.alertMessage = ('Event Droped to make dayDelta ' + dayDelta);
            });
        };
        /* alert on Resize */
        $scope.alertOnResize = function(event, dayDelta, minuteDelta, revertFunc, jsEvent, ui, view ){
            $scope.$apply(function(){
                $scope.alertMessage = ('Event Resized to make dayDelta ' + minuteDelta);
            });
        };


        /* remove event */
        $scope.remove = function(index) {
            $scope.events.splice(index,1);
        };
        /* Change View */
        $scope.changeView = function(view,calendar) {
            calendar.fullCalendar('changeView',view);
        };
        /* config object */
        $scope.uiConfig = {
            calendar:{
                defaultView : 'agendaWeek',
                height: 450,
                editable: false,
                header:{
                    left: 'title',
                    center: '',
                    right: 'today prev,next'
                },
                dayClick: $scope.alertDayOnClick,
                eventClick: $scope.alertEventOnClick,
                eventDrop: $scope.alertOnDrop,
                eventResize: $scope.alertOnResize,
                minTime: 10,
                maxTime: 20,
                allDaySlot: false
            }
        };
        /* event sources array*/
        //$scope.eventSources = [$scope.events, $scope.eventSource, $scope.eventsF];
    $scope.eventSources = [$scope.eventSource];
    }


/**
function GooglePlusCtrl($scope) {
    gapi.page.go();

}
  */