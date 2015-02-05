'use strict'
var MusicPlayer = function() {
	// songs
	var defaultSong = [{note:'G', interval:4, duration:2},{note:'D', interval:4, duration:2}];
	var happyBirthdaySong = [{note:'C', interval:4, duration:.5},{note:'C', interval:4, duration:.5},{note:'D', interval:4, duration:1},{note:'C', interval:4, duration:1},{note:'F', interval:4, duration:1},{note:'E', interval:4, duration:2}];
	var builtInSongs = [{label:'Default', value:defaultSong},{label:'Birthday', value:happyBirthdaySong}];
	
	// instruments
	var defaultInstrument = 'piano';
	var _instrument = Synth.createInstrument(defaultInstrument);
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
	} ];
	
	// more default configs
	var _debug = false;
	var _playing;
	var _bpm = 60;
	var _song = defaultSong;
	var _index = 0;
	
	var playNote = function (){
		makeSound(_song[_index].note, _song[_index].interval, _song[_index].duration);
		_index++;
		if(_index  >= _song.length){
			_index = 0;
		}
	}
	
	var play = function() {
		debug('player gonna play');
		this._playing = window.setInterval(playNote, _bpm/60 * 1000);
	}

	var stop = function() {
		debug('player stop');
		window.clearInterval(this._playing);
	}

	var switchInstrument = function(newInstrument) {
		debug('new instrument: ' + newInstrument);
		_instrument = Synth.createInstrument(newInstrument);
	}
	
	var changeSong = function(newSong){
		debug('changing song');
		_song = newSong;
	}

	function makeSound(note, interval, seconds) {
		debug('playing..');
		_instrument.play(note, interval, seconds);
	}
	
	function debug(message){
		if (console && _debug && message){
			console.log(message);
		}
	}
	
	function setDebug(flag){
		_debug = flag;
	}

	return {
		play : play,
		stop : stop,
		instrumentOptions : instrumentOptions,
		switchInstrument : switchInstrument,
		setDebug : setDebug,
		changeSong : changeSong,
		builtInSongs : builtInSongs,
		defaultSong : defaultSong,
		defaultInstrument : defaultInstrument
	}
};

/* App Declaration and Config */
var synth = angular.module('synth', [ 'ngRoute', 'ui.router' ]);

synth.controller('SynthController', [ '$scope', '$location', '$filter',
		function($scope, $location, $filter) {
			var player = new MusicPlayer();
			
			//TODO turn debug off at some point
			player.setDebug(true);

			// data
			$scope.currentSong = "original hit";
			$scope.instrument = player.defaultInstrument;
			$scope.instruments = player.instrumentOptions;
			$scope.song = player.defaultSong;
			$scope.songs = player.builtInSongs;
			
			// actions
			$scope.playSong = player.play;
			$scope.stopSong = player.stop;
			$scope.$watch('instrument', function(newValue, oldValue) {
				player.switchInstrument(newValue);
			});
			$scope.$watch('song', function(newValue, oldValue) {
				player.changeSong(newValue);
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
