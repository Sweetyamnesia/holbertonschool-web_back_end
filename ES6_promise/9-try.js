export default function guardrail(mathFunction) {
	let queue = [];
	if (mathFunction) {
		console.log("Guardrail was processed");
		return queue;
	}
	else {
		console.log("Guardrail was processed");
		return Error();
		
	}
}