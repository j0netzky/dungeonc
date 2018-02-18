#pragma strict
// Varovasti sitten itse triggerin asettelussa unityssä; jos klippaavat jonkin gameobjektin jonka läpi ei tarkoitus mennä, niin siitä pääsekiin läpi
// Silti menee randomisti läpi..... ei voi selittää miten. Ei joka kerta kuitenkaan. Nvm.
var clip : AudioClip;
var clip2 : AudioClip;
var clip3 : AudioClip;
var clip4 : AudioClip;
var clip5 : AudioClip;

var SoundPlayed : boolean;
var FirstTime : boolean = false; // Tauottaa äänen toiston
var SecondTime : boolean = false; // sama

var NoPlay : boolean = false; // Estää saman pätkän toiston triggeristä poiskäynnin jälkeen

function Start () {

}

function OnTriggerEnter(col : Collider){

	//if(SoundPlayed) return;
	//SoundPlayed = true; // Tämä netistä saatu pätkä estää triggerissä eestaas kävelyn, joka aiheuttaa audion alkamisen alusta päällekkäin.
//	if (!HasPlayed){
//		
//		HasPlayed = true;
//		}

		if(FirstTime == false && SecondTime == false && NoPlay == false && col.gameObject.tag == "Player"){
		
			NoPlay = true;
			yield WaitForSeconds(0.05);
			AudioSource.PlayClipAtPoint(clip, transform.position);
			yield WaitForSeconds(9); // Odottaa aiemmin clipin loppuvan
			AudioSource.PlayClipAtPoint(clip2, transform.position);
			yield WaitForSeconds(18); // Odottaa aiempien clippien loppuvan
			AudioSource.PlayClipAtPoint(clip3, transform.position);
			yield WaitForSeconds(15);
			FirstTime = true;
			return;
		}
		
		
		
		if(FirstTime == true && SecondTime == false && NoPlay == true && col.gameObject.tag == "Player"){ // Miten saada aloittamaan vasta uudella triggerin aktivointikerralla? Jatkaa nyt vain putkeen jos kerran aktivoi
		
			NoPlay = false;
			yield WaitForSeconds(2);
			AudioSource.PlayClipAtPoint(clip4, transform.position);
			yield WaitForSeconds(15);
			SecondTime = true;
			FirstTime = false;
			return;
			
		}
		
		
		if(SecondTime == true && NoPlay == false && col.gameObject.tag == "Player"){
			
			NoPlay = true;
			yield WaitForSeconds(2);
			AudioSource.PlayClipAtPoint(clip5, transform.position);
			Destroy(gameObject); //poisto, ei aloita clipistä 4 joskus random lopun aikoina
			return;
			
			
		}
}






