#pragma strict
// Käytössä vain buttonille. Avaa salaoven jonka takana on toinen button. Tee sille toiselle Button (1) oma scripti joka avaa portin.
var clip : AudioClip;
var ButtonDown : boolean;

var SecretWall : SecretWallOpen = GetComponent(SecretWallOpen);
public var buttonEnabled : boolean = false;
//var buttonDisabled : boolean = false;


function Start () {

}

function ButtonEnable(){

	buttonEnabled = true;
}

//function ButtonDisable(){
//
//	buttonDisabled = true;
//
//}

function Update () {

	if (Input.GetKeyDown("return") && buttonEnabled == true){

		print("This is a button");
		ButtonPress ();
		SecretWall.OpenSecretWall(); // Kutsuu sitä toisesta scripitstä


	}
	
//	if (buttonDisabled == true){
//		
//		print("derp");
//	}

}

function ButtonPress () {

	if(ButtonDown) return;
	ButtonDown = true;
	
	if (gameObject.name == ("Button")){
	
	AudioSource.PlayClipAtPoint(clip, transform.position);
	GetComponent.<Animation>().Play("PressButton");

	}
}
