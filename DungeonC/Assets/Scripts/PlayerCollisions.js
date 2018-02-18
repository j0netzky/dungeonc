#pragma strict

var message : GameObject;
//var CellDoor : CellDoor = GetComponent(CellDoor);
//public var ButtonTwoActivate : boolean = true;
//var Items : Items = GetComponent(Items);
public var button : boolean = false;
//public var mute: boolean;
var audio : AudioSource;


function Start () {

}

function Update () {

	var hit : RaycastHit;
	
	if(Physics.Raycast(transform.position, transform.forward, hit, 5)){
	
		print(hit.collider.gameObject.name);
		if(hit.collider.gameObject.name == "Door_B"){
		
			if(Items.key == true){ // key on variable
			
				hit.collider.gameObject.SendMessage("OpenCellDoor");//CellDoor.OpenDoor();
			}
//			else if(message.activeSelf == false){
//			
//				print("Find the key first!"); 
//				message.SetActive(true);
//				Invoke("HideMessage", 2);
//							
//			}									
		}
		
			if(hit.collider.gameObject.tag == "Button"){
			
				//Items.PickButton();
				print("button enable");
				button = true;
				hit.collider.gameObject.SendMessage("ButtonEnable");
			}
			
//			if(hit.collider.gameObject.tag != "Button"){
//			
//				//Items.PickButton();
//				//print("button disable");
//				button = true;
//				hit.collider.gameObject.SendMessage("ButtonDisable");
//			}
		
				if(button == true){
				
					//ButtonTwoActivate = false;
					//hit.collider.gameObject.SendMessage("OpenCellDoor");//CellDoor.OpenDoor();
				}
	}
	
//	if(Input.GetKeyDown(KeyCode.Space)) {
//		 	if(audio.mute)
//				audio.mute = false;
//			else
//				audio.mute = true;
//		}
	
		if (Input.GetKeyDown(KeyCode.M)) {
	
		var audio : AudioSource = GetComponent.<AudioSource>();
		audio.Play();
	
	}
		
	}

	
//	if(Physics.Raycast(transform.position, transform.forward, hit, 5)){
//	
//		print(hit.collider.gameObject.name);
//		
//			if(hit.collider.gameObject.tag == "Button"){
//			
//				//Items.PickButton();
//				print("button enable");
//				button = true;
//			}
//		
//				if(button == true){
//				
//					ButtonTwoActivate = false;
//					//hit.collider.gameObject.SendMessage("OpenCellDoor");//CellDoor.OpenDoor();
//				}
//	}
//}
	//else if(Physics.Raycast(transform.position, transform.forward, hit, 5)){
	
	//	print(hit.collider.gameObject.name);
	//	if(hit.collider.gameObject.name == "Arch_Gate"){
		
	//		if(Items.button == true){ // button on variable
			
	//			hit.collider.gameObject.SendMessage("OpenArchGate");//CellDoor.OpenDoor();
	//		}
	//		else if(message.activeSelf == false){
	//		
	//			print("Press the buttons first!"); 
	//			message.SetActive(true);
	//			Invoke("HideMessage", 2);
							
	//		}									
	//	}
	
	//}
	


function HideMessage(){

	message.SetActive(false);
}