#pragma strict

function Start () {
  Debug.Log("Hola");
}

function Update () {
	var vertical = Input.GetAxis("Vertical");
	var horizontal = Input.GetAxis("Horizontal");
	var movement = new Vector3(horizontal, 0, vertical);
	GetComponent.<Rigidbody>().AddForce(movement);
}