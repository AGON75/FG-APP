// Connexion Supabase
const SUPABASE_URL = "https://ckolzmqarfizoxjgolft.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNrb2x6bXFhcmZpem94amdvbGZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2Nzg3NTYsImV4cCI6MjA2NTI1NDc1Nn0.ZlpERz1uznM0fn--GR9YgM2vjwe_kw-qiPF8KHJvMpI";

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Affichage dynamique du formulaire d'inscription
document.body.innerHTML += `
  <form id="signup-form">
    <input type="text" id="name" placeholder="Ton prénom ou pseudo" required style="padding:10px;margin:10px;">
    <button type="submit" style="padding:10px;">S'inscrire</button>
  </form>
  <div id="result"></div>
`;

document.getElementById('signup-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();

  if (!name) {
    document.getElementById('result').innerText = "⛔ Merci d'entrer un nom.";
    return;
  }

  const { data, error } = await supabase
    .from('players')
    .insert([{ name }]);

  if (error) {
    document.getElementById('result').innerText = "❌ Erreur : " + error.message;
  } else {
    document.getElementById('result').innerText = "✅ Inscription réussie !";
    document.getElementById('signup-form').remove();
  }
});
