#pragma strict

var Girl : GameObject;

function Start () {

}

function Update () {

}

function OnTriggerEnter(col : Collider){

	if(col.gameObject.tag == "Player"){
		
		print("Girl");
		Girl.SendMessage("PlayGirlSound");
		Destroy(gameObject);
		
	}

}