//function to calculate tube
function CalculateTubeVolume(r,h)
{
    let circlearea = Math.PI * r ** 2;
    let tubevolume = circlearea * h;
    return tubevolume;    
}

let tubeone = CalculateTubeVolume (7, 10);
let tubetwo = CalculateTubeVolume (14, 20);
let resultAB = tubeone + tubetwo;
console.log("Tube A + B: " + resultAB + " cm3.");

//function to calculate tube with n0-return
function CalculateTubeVolumeNoReturn(r, h)
{
    let circlearea = Math.PI * r ** 2;
    let tubevolume = circlearea * h;
    console.log("Tube Volume: " + tubevolume + " cm3.");
}

let tubethree = CalculateTubeVolumeNoReturn(7, 10);
let tubefour = CalculateTubeVolumeNoReturn(14, 20);
let resultCD = tubethree + tubefour;
console.log("Tube C + D: " + resultCD + " cm3.");