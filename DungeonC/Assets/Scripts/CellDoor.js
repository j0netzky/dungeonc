#pragma strict

var open : boolean = false;
var clip : AudioClip;
var ArchGate : ArchGateOpen =  GetComponent(ArchGateOpen); // referenssi toiseen scripttiin

function Start () {

}

function OpenCellDoor () {

	if(open == false && ArchGate.GateOpen == true){ // Ei avaa ovea, vaikka avain, jos porttia ei ole avattu. Ulisee nyt jostain muttei estä pyörittämistä
	
		open = true;
		AudioSource.PlayClipAtPoint(clip, transform.position); // Miten saa siten että toistaa vain ekalla kerralla?
		transform.parent.gameObject.GetComponent.<Animation>().Play("OpenDoorB1");
		transform.parent.gameObject.GetComponent.<Animation>().Play("OppnaDoorB");
	}

}