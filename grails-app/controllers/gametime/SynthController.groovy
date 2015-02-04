package gametime

class SynthController {

	def index = {
		render view: 'synth'
	}

	def synthFragment = {
		render view : 'synthFragment'
	}
}
