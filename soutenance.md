# Les différents points de la soutenance :

## Chronologie de la soutenance :

"La maquette est comme un contrat."

- Start :

  - Présentation
  - Sommaires/Resumé de ce qui va être présenter

- Front :

  - Présentation du front
  - Démonstration

- Back :
  - Présentation du back
  - Démonstration

## Les 4 axes du front :

- Intégration de la maquette :

  - wireframe
  - maquette
  - zonning
  - prototypage
  - charte graphique (Logo, Couleur, Font)
  - figma

- SEO (Search Engine Optimization) :

  - head à définir avec parcimonie (metadonées, metadescription, title, etc...)
  - balise sémentique
  - accesibilité (ex: alt dans image)
    -h1
  - w3validator
  - Footer (link)

- Responsive :

  - MediaQuerries :

    - Screenshots du code
    - Screenshots du rendu
    - `flexbox`, `grid`

  - BreakPoint (Size of screen) :
    - Mobile size
    - Tablet size
    - Desktop size

- Securité côté front (forms, validation des forms) :

  - Patterns (regex, verifications des données du clients)
  - Require (formik)
  - Thunder Client (Postman)
  - schema librairie
  - chek <htpps://lacnil.fr>

## Les 4 axes du back :

- Créer une base de données :

  - MCD(Modéle Conceptuel de données) (schéma de la database) :

    - Clé primaire (autoincrement)
    - Cardinalités
    - Table de relation (ou on retrouve les deux clé primaire des tables liés)

  - PHPMyadmin :

    - Importe la database. Outils utilisé pour créer la base de données

  - Wamp (serveur web locale qui heberge ton site et ta databse)

- MVC (Model View Controller) :

  - Model (données)
  - View (interface)
  - Controller (logique)
  - CRUD (Create Read Update Delete) :
  - Requête SQL :
    - Expliquer sequelize et ce que fait l'ORM sequelize

- Securité côté back :

  - Password hash :
    - Hashing (encryption)
    - Salting (encryption)
  - Create
  - Authentification/Login :
    - tokens (jwt) :
      - Json Web Token
      - Utilisé pour authentifier un utilisateur
      - Contient un temps de session/timestamp
      - Contient des informations sur l'utilisateur
      - Contient un secretKey
    - dotenv :
      - .env -> fichier caché dans un projet ou l'on trouve les variables d'environnement pour configurer un projet
    - Logout
    - Register

## Failles de securité :

- SQL injection
- XSS
- CSRF
- Brute force
- Ransomware
- Phishing

## Mots techniques :

- UserExperience
- UserInterface
- UserInterfaceDesign
- UI/UX
