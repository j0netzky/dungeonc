#pragma strict
// Käytössä vain buttonille(1).
var clip : AudioClip;
var ButtonDown : boolean;

var ArchGate : ArchGateOpen = GetComponent(ArchGateOpen);
var ArchGate2 : ArchGateOpen = GetComponent(ArchGateOpen);
public var ButtonTwoActivate : PlayerCollisions = GetComponent(PlayerCollisions);

var buttonEnabled : boolean = false;
var buttonDisabled : boolean = false;

function Start () {

}

function ButtonEnable(){

	buttonEnabled = true;
}

function Update () {

	if (Input.GetKeyDown("return") && buttonEnabled == true){

		print("This is a button");
		ButtonPress ();
		//if (gameObject.name == ("Wall_A")){// Dunno what is wrong
		ArchGate.OpenGate();
		ArchGate2.OpenGate();

	}
	
	if (Input.GetKeyDown("return") && buttonDisabled == true){
		
		print("Nothing");
	}

}

function ButtonPress () { 
	if(ButtonDown) return;
	ButtonDown = true;
	
		if (gameObject.name == ("Button (1)")){

			AudioSource.PlayClipAtPoint(clip, transform.position);
			GetComponent.<Animation>().Play("PressButton1");

	}
}