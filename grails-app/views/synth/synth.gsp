<!DOCTYPE html>
<html ng-app="synth">
<head>
<asset:javascript src="vendor/angular.js" />
<asset:javascript src="vendor/angular-route.js" />
<asset:javascript src="vendor/angular-resource.js" />
<asset:javascript src="vendor/angular-ui-router.js" />

<!-- order matters here -->
<asset:javascript src="vendor/audiosynth.js" />
<asset:javascript src="musicPlayer.js" />
<asset:javascript src="synth.js" />


<link data-require="bootstrap-css@*" data-semver="3.0.0"
	rel="stylesheet"
	href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" />

</head>
<body>
	<div>
		<div>Welcome to magical world of music!</div>
		
		<div ui-view="content"></div>
	</div>
</body>
</html>
