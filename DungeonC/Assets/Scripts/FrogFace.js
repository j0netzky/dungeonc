#pragma strict

function Start () {

}

function Update () {

}

function Froggie () {

	GetComponent.<Animation>().Play("HereFrogFace");
	var audio : AudioSource = GetComponent.<AudioSource>();
	audio.Play();
	yield WaitForSeconds(2.5);
	audio.Pause();

}