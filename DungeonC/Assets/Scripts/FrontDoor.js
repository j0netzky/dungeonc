#pragma strict

var open : boolean = true;
var clip : AudioClip;


function Start () {

}

function OnTriggerEnter(col : Collider){

	if(col.gameObject.tag == "Player" && open == true){
		
		Close();
	}
}

function Close(){

	print("close");
	if(open == true){
	
		GetComponent.<Animation>().Play("DoorClose2");
		open = false;
		AudioSource.PlayClipAtPoint(clip, transform.position);

	}
}