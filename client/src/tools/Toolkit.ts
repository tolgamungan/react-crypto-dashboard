import { Console } from "console";

// randomly generates a number between the range of low and high
function getRandom(low:number = 1, high:number = 10) {
    let randomNumber:number;
    // calculate random number
    randomNumber = Math.round(Math.random() * (high - low)) + low;
    // returning value
    return randomNumber;
}

function addKey(functionToCall:Function, myKeyCode:string = "Enter") {
    // this example exposes issue with scoping and event handlers and how it is solved with arrow function

    // wire up event listener
    document.addEventListener("keydown", (e:KeyboardEvent) => {
        // is the key released the provided key? Check keyCode via Event object
        if (e.code === myKeyCode) {
            // pressing the enter key will force some browsers to refresh
            // this command stops the event from going further
            e.preventDefault();
            // call provided callback to do everything else that needs to be done
            functionToCall();
            // this also helps the event from propagating in some browsers
            return false;
        }
    });
}

function getXMLData(retrieveScript:string, success:Function, failure:Function) {
    // send out AJAX request
    let xmlhttp:XMLHttpRequest = new XMLHttpRequest();
    xmlhttp.addEventListener("load", (e:Event) => {
        // has the response been received successfully?
        if (xmlhttp.status === 200) {
            // data retrieved - call success method and pass along XML object response
            success(xmlhttp.responseXML);
        } else {
            failure();
        }
    });
    xmlhttp.addEventListener("error", (e:Event) => {
        failure();
    });
    xmlhttp.open("GET", retrieveScript, true);
    xmlhttp.send();
}

function sendJSONData(sendScript:string, jsonString:string, success:Function, failure:Function) {
    // send out AJAX request
    let xmlhttp:XMLHttpRequest = new XMLHttpRequest();
    xmlhttp.addEventListener("load", (e:Event) => {
        // has the response been received successfully?
        if (xmlhttp.status === 200) {
            // data retrieved - call success method and pass along XML object response
            success(xmlhttp.responseText);
        } else {
            failure();
        }
    });
    xmlhttp.addEventListener("error", (e:Event) => {
        failure();
    });
    xmlhttp.open("POST", sendScript, true);
    // setting the content-type of the request so the server knows what format that data is coming as
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.send(jsonString);
}

function deleteJSONData(deleteScript:string, id:string, success:Function, failure:Function) {
    // send out AJAX request
    let xmlhttp:XMLHttpRequest = new XMLHttpRequest();
    xmlhttp.addEventListener("load", (e:Event) => {
        // has the response been received successfully?
        if (xmlhttp.status === 200) {
            // data retrieved - call success method and pass along XML object response
            success(xmlhttp.responseText);
        } else {
            failure();
        }
    });
    xmlhttp.addEventListener("error", (e:Event) => {
        failure();
    });
    xmlhttp.open("DELETE", deleteScript, true);
    // setting the content-type of the request so the server knows what format that data is coming as
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.send('{"_id":'+'"'+id+'"'+'}');
}
function editJSONData(editScript:string, sendString:string, success:Function, failure:Function) {
    // send out AJAX request
    let xmlhttp:XMLHttpRequest = new XMLHttpRequest();
    xmlhttp.addEventListener("load", (e:Event) => {
        // has the response been received successfully?
        if (xmlhttp.status === 200) {
            // data retrieved - call success method and pass along XML object response
            success(xmlhttp.responseText);
        } else {
            failure();
        }
    });
    xmlhttp.addEventListener("error", (e:Event) => {
        failure();
    });
    xmlhttp.open("PUT", editScript, true);
    // setting the content-type of the request so the server knows what format that data is coming as
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.send(sendString);
}

function getJSONData(retrieveScript:string, success:Function, failure:Function) {
    fetch(retrieveScript)
        .then((response:Response) => response.json())
        .then((data:any) => success(data))
        .catch((err:Error) => failure());
}

export {getRandom, addKey, getXMLData, editJSONData ,deleteJSONData ,sendJSONData, getJSONData};