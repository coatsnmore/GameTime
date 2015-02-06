<!-- piano or something should go here -->
<div>Current Song: {{currentSong}}</div>

<div><label for="editSong">Edit Song:</label><input id="editSong" type="text" ng-model="editSong"/></div>

<section>
	<select ng-model="instrument"
		ng-options="instrument.value as instrument.label for instrument in instruments">Instrument
	</select> <select ng-model="song"
		ng-options="song.value as song.label for song in songs">Song
	</select>
	
	<button type="button" ng-click="loadSong()">Load</button>
	<button type="button" ng-click="playSong()">Play</button>
	<button type="button" ng-click="stopSong()">Stop</button>
</section>