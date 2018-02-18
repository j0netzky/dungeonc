#pragma strict

var Floor_A8 : GameObject;


function Start () {

}

function OnTriggerEnter(col : Collider){

	if(col.gameObject.tag == "Player"){
		
		Floor_A8.SendMessage("Open");
	}
}