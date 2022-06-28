
const usuarios = new Map();

usuarios.set("Luiz", "Admin");
usuarios.set("Arison", "Admin");
usuarios.set("Polly", "User");
usuarios.set("Hugo", "User");

function getAdmins(map) {

    let admins = [];

    for([key, value] of map) {
        if(value === "Admin") {
            admins.push(key);
        }
    }
    return admins;
}

console.log(getAdmins(usuarios));
