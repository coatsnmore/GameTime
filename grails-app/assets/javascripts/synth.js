'use strict';

var MusicPlayer = function(instrument) {
	var _instrument = Synth.createInstrument(instrument);
	var _playing;

	var play = function() {
		console.log("player gonna play");
		this._playing = window.setInterval(function() {
			makeSound('C', 4, 2)
		}, 3000);
	}

	var stop = function() {
		console.log("player stop");
		window.clearInterval(this._playing);
	}

	var switchInstrument = function(newInstrument) {
		console.log("newINstrument: " + newInstrument);
		_instrument = Synth.createInstrument(newInstrument);
	}

	function makeSound(note, interval, seconds) {
		console.log("playing..");
		_instrument.play(note, interval, seconds);
	}

	var instrumentOptions = [ {
		label : 'Piano',
		value : 'piano'
	}, {
		label : 'Acoustic',
		value : 'acoustic'
	}, {
		label : 'Organ',
		value : 'organ'
	}, {
		label : 'Electronic Dance Music',
		value : 'edm'
	} ]

	return {
		play : play,
		stop : stop,
		instrumentOptions : instrumentOptions,
		switchInstrument : switchInstrument
	}
};

/* App Declaration and Config */
var synth = angular.module('synth', [ 'ngRoute', 'ui.router' ]);

synth.controller('SynthController', [ '$scope', '$location', '$filter',
		function($scope, $location, $filter) {
			var defaultInstrument = 'piano';
			var player = new MusicPlayer(defaultInstrument);

			$scope.currentSong = "original hit";
			$scope.instrument = defaultInstrument;
			$scope.instruments = player.instrumentOptions;
			$scope.playSong = player.play;
			$scope.stopSong = player.stop;
			$scope.$watch('instrument', function(newValue, oldValue) {
				player.switchInstrument(newValue);
			});
		} ]);

synth.config(function($stateProvider, $urlRouterProvider) {
	// For any unmatched url, redirect to /state1
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
