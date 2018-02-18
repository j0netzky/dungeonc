#pragma strict
// Varovasti sitten itse triggerin asettelussa unityssä; jos klippaavat jonkin gameobjektin jonka läpi ei tarkoitus mennä, niin siitä pääsekiin läpi
// Silti menee randomisti läpi..... ei voi selittää miten. Ei joka kerta kuitenkaan. Nvm.
var clip : AudioClip;

var SoundPlayed : boolean;

function Start () {

}

function OnTriggerEnter(col : Collider){

	if(SoundPlayed) return;
	SoundPlayed = true; // Tämä netistä saatu pätkä estää triggerissä eestaas kävelyn, joka aiheuttaa audion alkamisen alusta päällekkäin.

	if(col.gameObject.tag == "Player"){ // Anteeksi mutta en osaa paremmin tehdä tätä

		//yield WaitForSeconds(0.05);
		AudioSource.PlayClipAtPoint(clip, transform.position);
		Destroy(gameObject);
	}
}