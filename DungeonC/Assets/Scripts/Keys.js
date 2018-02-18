#pragma strict

var rotateSpeed : int = 20;
var clip : AudioClip;

function Start () {

}

function Update () {


	//transform.Rotate(Vector3.right * Time.deltaTime * this.rotateSpeed);


}

function OnTriggerEnter(col : Collider){

	if(col.gameObject.tag == "Player"){
		
		print("Pootis");
		AudioSource.PlayClipAtPoint(clip, transform.position);
		col.gameObject.SendMessage("PickDoorKey");
		Destroy(gameObject);
	}

}
