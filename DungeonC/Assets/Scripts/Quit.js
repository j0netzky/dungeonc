#pragma strict

//var ReadyToEnd : boolean = false;

function Start () {

}

function Update () {

//	if (Input.GetKeyDown("escape") && ReadyToEnd == true){
//		
//		print("Ready to End");
//		Application.LoadLevel("End");
//	}

}

function OnTriggerEnter(col : Collider){

	if(col.gameObject.tag == "Player"){
		
		//ReadyToEnd = true;
		yield WaitForSeconds(3);
		print("Ready to End");
		Application.LoadLevel("End");
		
	}

}