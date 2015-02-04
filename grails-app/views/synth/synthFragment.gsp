<!-- piano or something should go here -->
<div>Current Song: {{currentSong}}</div>

<section>
	<select ng-model="instrument" ng-options="instrument.value as instrument.label for instrument in instruments">Instrument</select>
	<button type="button" ng-click="playSong()">Play</button>
	<button type="button" ng-click="stopSong()">Stop</button>
</section>