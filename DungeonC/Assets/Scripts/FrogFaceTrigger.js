#pragma strict

var FrogFace : GameObject;

function Start () {

}

function Update () {

}

function OnTriggerEnter(col : Collider){

	if(col.gameObject.tag == "Player"){
		
		print("Frog");
		FrogFace.SendMessage("Froggie");
		Destroy(gameObject);
		
	}

}