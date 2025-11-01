// utils/verifyPassword.js
import bcrypt from "bcryptjs";

/**
 * Vérifie si le mot de passe en clair correspond au mot de passe stocké.
 * @param {string} plainPassword - le mot de passe fourni par l'utilisateur (req.body.mot_de_passe)
 * @param {string|null} storedPassword - le mot de passe stocké en base (haché ou éventuellement en clair)
 * @returns {Promise<boolean>} true si correspond, false sinon
 */
export default async function verifyPassword(plainPassword, storedPassword) {
  if (!plainPassword || !storedPassword) return false;

  // Si le mot de passe en base ressemble à un hash bcrypt (commence par $2)
  if (typeof storedPassword === "string" && storedPassword.startsWith("$2")) {
    try {
      return await bcrypt.compare(plainPassword, storedPassword);
    } catch (err) {
      console.error("Erreur bcrypt.compare :", err);
      return false;
    }
  }

  // *Fallback* : si pas haché (legacy) — comparaison directe (⚠️ non sécurisé)
  return plainPassword === storedPassword;
}
