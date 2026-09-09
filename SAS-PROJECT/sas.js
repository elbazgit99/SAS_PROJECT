var prompt = require('prompt-sync')();

function addStudent() {
    console.log("Success");
    
}

function main() {
    let n;
    do {
        console.log("************************");
        console.log("1. add Student");
        console.log("2. Afficher Std");
        console.log("3. Rechercher Std");
        console.log("4. Modifier Std");
        console.log("5. Supprimer Std");
        console.log("6. Quitté");
        console.log("************************");
    
        n = Number(prompt("Tapez un choix (1-6)"))
        switch (n) {
            case 1:
                ajoouterStd()
                break;
            case 2:
                
                break;
            case 3:
                
                break;
            case 4:
                
                break;
            case 5:
                
                break;
            case 6: break;
        
            default:
                console.log("Votre reposne n'etait pas acceptable, Svp donne moi une valeur entre 1 et 6");
                break;
        }
    } while (n!=6)
}

main()