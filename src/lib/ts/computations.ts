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
function surafaceGravity(M:number, R:number) :number{
    const a = (G * M) / (R * R);
    return a;
}
function toJupiterMass(m:number){
    return m/1.899e27;
}
function fromJupiterMass(m:number){
    1.899e27
}
let geological_activity_by_age = {
    "Young": {
        "Plate Tectonics": "Thicker lithosphere, limited tectonic activity.",
        "Volcanic Activity": "High volcanic activity due to leftover internal heat."
    },
    "Early Geological Activity": {
        "Plate Tectonics": "Thinner lithosphere, initiation of plate tectonics.",
        "Volcanic Activity": "Gradual decrease in volcanic activity."
    },
    "Mature Geological Activity": {
        "Plate Tectonics": "Complex tectonic dynamics, subduction, mountain formation.",
        "Volcanic Activity": "Predictable volcanic activity at specific locations."
    },
    "Old Geological Activity": {
        "Plate Tectonics": "Tectonic activity slows or ceases as the planet cools.",
        "Volcanic Activity": "Volcanic activity becomes rare as the mantle cools."
    },
    "Ancient": {
        "Plate Tectonics": "Limited or no active plate tectonics.",
        "Volcanic Activity": "Limited or no volcanic activity."
    }
}

export {surafaceGravity,classifyStarType};

