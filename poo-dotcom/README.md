# Dojo POO en JavaScript

## Instructions
- Allez voir le fichier src/index.js pour voir comment est créé le carré rouge ci-dessus.
- Allez voir le fichier src/Dot.js et analysez le code présent dans le constructeur de la classe Dot.
- Dans src/index.js, créer un carré bleu de taille 50.

- Dans src/Dot.js analysez le code présent dans la méthode move(), qui permet de déplacer un carré aux coordonées fournies en paramètres
- Essayez de bouger le carré bleu aux coordonnées x: 300, y: 50 à l'aide de la méthode move().
- Le carré bleu doit se trouver en haut à droite dans le cadre.

- Complétez la méthode setRadius. Cette fonction prend un nombre en paramètre et ajuste le border-radius du carré pour "arrondir les angles".
- Quand le paramètre radius est en dessous de 0, le border-radius doit être nul.
Quand le paramètre radius est au dessus de 50, le border-radius doit être de 50%.
- Sinon le border-radius prend la valeur du paramètre.

- Mettre l'arroundi des bords du premier carré à 20.
- Changez l'arrondi des bords du second carré pour que ce dernier devienne un point.

- Créez un nouveau carré vert de taille 75 et déplacez-le aux coordonées x: 350, y: 250
- Ooooops, ce dernier sort du cadre... Mais ne changez rien à src/index.js !
- Adapatez plutôt la méthode move() pour faire en sorte que le carré ne sorte jamais du cadre, qui fait 400px de large et 300px de haut. - - Si votre code est correct, le carré vert est desormais "collé" aux bord du cadre en bas à droite.

## Bonus
- Dans index.js créez un evenement sur le bouton afin qu'il ajoute un point.
- Gérez une position aléatoire pour chaque nouveau point créé.
