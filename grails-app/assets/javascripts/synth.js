'use strict'
/* App Declaration and Config */
var synth = angular.module('synth', [ 'ngRoute', 'ui.router' ]);

synth.controller('SynthController', [ '$scope', '$location', '$filter',
		function($scope, $location, $filter) {
	
			var trackTest = new MusicPlayer();
			trackTest.load(trackTest.defaultMelody);
			trackTest.setDebug(true);
	
			var player = new MusicPlayer();
			
			//TODO turn debug off at some point
			player.setDebug(true);

			// data
			$scope.currentSong = "original hit";
			$scope.instrument = player.defaultInstrument;
			$scope.instruments = player.instrumentOptions;
			$scope.song = player.defaultRhythm;
			$scope.songs = player.builtInSongs;
			
			function playBoth(){
				player.play();
				trackTest.play();
			}
			
			function stopBoth(){
				player.stop();
				trackTest.stop();
			}
			
			var loadEditSong = function(){
				player.changeSong($scope.editSong);
			}
			
			// actions
			$scope.playSong = player.play;
//			$scope.playSong = playBoth;
			$scope.stopSong = player.stop;
//			$scope.stopSong = stopBoth;
			$scope.loadSong = loadEditSong;
			
			$scope.$watch('instrument', function(newValue, oldValue) {
				player.switchInstrument(newValue);
			});
//			$scope.$watch('editSong', function(newValue, oldValue) {
//				$scope.currentSong = newValue;
//				player.changeSong(newValue);
//			});
			$scope.$watch('song', function(newValue, oldValue) {
				$scope.currentSong = newValue;
				player.load(newValue);
			});
			
		} ]);

synth.config(function($stateProvider, $urlRouterProvider) {
	// first time in or default
	$urlRouterProvider.otherwise("/synth");

	// application states
	$stateProvider.state('synth', {
		url : "/synth",
		views : {
			"content" : {
				templateUrl : "synth/synthFragment",
				controller : "SynthController"
			}
		}
	});
});
