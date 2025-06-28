# Finger Game App

Application web de gestion de tournoi Finger Game, avec espace joueur, classement, gestion, planning et interface arbitre.

---

## 🚀 Fonctionnalités principales

- **Espace Joueur** : Inscription, affichage du statut, des prochaines manches, de la piste, etc.
- **Classement** : Classement général, export CSV, recherche, pagination.
- **Gestion** : Ajout/suppression de joueurs, modification des points, gestion des phases (demi-finale, finale, vainqueur), exports CSV.
- **Planning** : Génération automatique ou manuelle des parties, demi-finales, finales, export planning.
- **Arbitre** : Interface dédiée pour la gestion des matchs et des phases.
- **Connexion à Supabase** : Toutes les données sont stockées et synchronisées via Supabase.

---

## 🛠️ Technologies

- **HTML/CSS/JS** (Vanilla)
- **Supabase** (Base de données et authentification)
- **Vercel** (déploiement recommandé)
- **Aucune dépendance Node.js obligatoire pour le front**

---

## 📦 Installation & Lancement

1. **Cloner le dépôt**  
   ```bash
   git clone <url-du-repo>
   cd FG-APP-vercel-ready
   ```

2. **(Optionnel) Installer Node.js**  
   Pour utiliser des outils de développement ou déployer sur Vercel/local :
   - [Télécharger Node.js](https://nodejs.org/)

3. **Installer les outils de dev (optionnel)**  
   ```bash
   npm install
   ```

4. **Lancer en local**  
   - Ouvre simplement les fichiers HTML dans ton navigateur  
   - ou utilise une extension VS Code comme "Live Server"  
   - ou lance :
     ```bash
     npm start
     ```

5. **Déploiement**  
   - Dépose le dossier sur [Vercel](https://vercel.com/) ou tout hébergeur statique.

---

## 📁 Structure du projet

```
FG-APP-vercel-ready/
│
├─ arbitre/
│   └─ index.html
├─ classement/
│   └─ index.html
├─ gestion/
│   └─ index.html
├─ joueur/
│   └─ index.html
├─ planning/
│   └─ index.html
├─ assets/
│   └─ FingerGame_logo_blanc_tagline.png
├─ README.md
└─ package.json
```

---

## 🖼️ Aperçu

Ajoute ici une capture d’écran ou un GIF de l’interface principale.

---

## ❓ FAQ

- **Q : Node.js est-il obligatoire ?**  
  R : Non, sauf pour utiliser les outils de développement (Live Server, lint…).

- **Q : Où modifier la connexion Supabase ?**  
  R : Dans chaque fichier HTML, dans le script principal.

---

## 🤝 Contribuer

1. Fork le projet
2. Crée une branche (`git checkout -b feature/ma-feature`)
3. Commit tes changements (`git commit -am 'feat: ma feature'`)
4. Push la branche (`git push origin feature/ma-feature`)
5. Ouvre une Pull Request

---

## 📝 Licence

MIT

---

## 👤 Auteur

Clément & contributors
