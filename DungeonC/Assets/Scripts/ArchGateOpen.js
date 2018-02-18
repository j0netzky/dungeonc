#pragma strict

var open : boolean = false;
var clip : AudioClip;
var GateOpen : boolean = false;

var SoundPlayed : boolean;

function Start () {

}

function OpenGate () {

	if(SoundPlayed) return;
	SoundPlayed = true;

	if(open == false){
	
		open = true;
		AudioSource.PlayClipAtPoint(clip, transform.position); // Miten saa siten että toistaa vain ekalla kerralla?
		GetComponent.<Animation>().Play("OpenArchGate");
		GetComponent.<Animation>().Play("OpenArchGate1");
		GateOpen = true;
	}

}