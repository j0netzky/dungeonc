#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter(col : Collider){

	if(col.gameObject.tag == "Player"){
		
		print("You are Dead!");
		Application.LoadLevel("Death");
	}
}
// Pöllitään demo 2:sesta deathzone