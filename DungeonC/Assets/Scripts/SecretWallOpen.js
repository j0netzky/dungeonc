#pragma strict

var open : boolean = false;
//var clip : AudioClip;

function Start () {

}

function Update () {

}

function OpenSecretWall () { // Animaatio ei toimi

	if(open == false){
	
		print("This should open");
		open = true;
		//AudioSource.PlayClipAtPoint(clip, transform.position);
		GetComponent.<Animation>().Play("OpenWallA19"); // nyt ei hae animaatiota väärästä paikkaa
		
	}

}