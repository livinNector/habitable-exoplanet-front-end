function classifyStarType(temperature:number, radius:number) {
    if (temperature > 30000 && radius > 6.6) {
        return "O-type";
    } else if (temperature >= 10000 && temperature <= 30000 && radius >= 1.8 && radius <= 6.6) {
        return "B-type";
    } else if (temperature >= 7500 && temperature < 10000 && radius >= 1.4 && radius < 1.8) {
        return "A-type";
    } else if (temperature >= 6000 && temperature < 7500 && radius >= 1.15 && radius < 1.4) {
        return "F-type";
    } else if (temperature >= 5200 && temperature < 6000 && radius >= 0.84 && radius < 1.15) {
        return "G-type (Sun)";
    } else if (temperature >= 3700 && temperature < 5200 && radius >= 0.7 && radius < 0.96) {
        return "K-type";
    } else if (temperature >= 2400 && temperature < 3700 && radius >= 0.1 && radius < 0.7) {
        return "M-type (Red Dwarfs)";
    } else if (temperature >= 3500 && temperature <= 5000 && radius >= 10 && radius <= 100) {
        return "Red Giants";
    } else if (temperature > 10000) { // Blue Giants have variable radius
        return "Blue Giants";
    } else if (radius >= 10 && radius <= 1000) { // Supergiants have variable temperature
        return "Supergiants";
    } else if (temperature >= 100000 && radius <= 0.01) {
        return "White Dwarfs";
    } else if (temperature < 2400 && radius >= 0.01 && radius <= 0.08) {
        return "Brown Dwarfs";
    } else if (radius <= 0.01) { // Neutron Stars have extremely small radius
        return "Neutron Stars";
    } else if (temperature >= 1300 && temperature < 2400 && radius >= 0.01 && radius <= 0.08) {
        return "L-type (Brown Dwarfs)";
    } else if (temperature < 1300 && radius >= 0.01 && radius <= 0.08) {
        return "T-type (Brown Dwarfs)";
    } else {
        return "Unknown";
    }
}

const G = 6.67430e-11;
function toJupiterMass(m:number){
    return m/1.899e27;
}
function fromJupiterMass(m:number){
    return m *1.899e27
}
function fromJupiterRadius(r:number){
    return r * 7.149e7
}
function fromSolarRadius(r:number){
    return r*6.957e8
}
function surafaceGravity(M:number, R:number) :number{
    M = fromJupiterMass(M)
    R = fromJupiterRadius(R)
    const a = (G * M) / (R * R);
    return a;
}
function equilibriumTemperature(Ts:number,Rs:number,D:number,A:number):number{
    return Ts * Math.sqrt(Rs/(2*D))* Math.pow((1-A),1/4)
}
function stellarLuminosity(R:number,T:number):number{
    return 4*Math.PI*Math.pow(R,2)*(5.67e-8)*Math.pow(T,4)
}

function stellarFlux(Rs:number,Ts:number,d:number):number{
    return stellarLuminosity(Rs,Ts)/(4*Math.PI*Math.pow(d,2))
}

function esi(Rs:number,Ts:number,d:number ,Rp:number):number{
    let Re = 6.378e6;
    let SFe = 3.828e26;
    let Sf = stellarFlux(Rs, Ts, d)
    let term1 = ((Sf - SFe) / (Sf + SFe)) ** 2
    let term2 = ((Rp - Re) / (Rp + Re)) ** 2
    return 1 - Math.sqrt(0.5 * (term1 + term2))
}

function fromAU(d:number){
    return 1.496e11 * d
}

export {surafaceGravity,classifyStarType, fromSolarRadius, fromJupiterRadius,fromAU,equilibriumTemperature, esi};

