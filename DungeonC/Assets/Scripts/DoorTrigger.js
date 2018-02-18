#pragma strict

var Door_C : GameObject;
var clip : AudioClip;

function Start () {

}

function OnTriggerEnter(col : Collider){

	if(col.gameObject.tag == "Player"){
		
		Door_C.SendMessage("Close");
		yield WaitForSeconds(0.2);
		AudioSource.PlayClipAtPoint(clip, transform.position);
		Destroy(gameObject);
		
	}

}