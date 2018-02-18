#pragma strict

function Start () {

}

function Update () {

	if(Input.GetKeyDown("return")){
		
		print("Restart!");
		Application.LoadLevel("Level2");
	}
	
	//if(Input.GetKeyDown("down")){
		
		//print("Quit!");
		//Application.Quit;
	//}

}