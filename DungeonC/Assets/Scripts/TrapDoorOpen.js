#pragma strict

var open : boolean = false;

function Start () {

}

function OnTriggerEnter(col : Collider){

	if(col.gameObject.tag == "Player" && open == false){
		
		Open();
	}
}

function Open(){

	print("Open");
	if(open == false){
	
		GetComponent.<Animation>().Play("OpenTrapFloorA8");
		open = true;
	}
}