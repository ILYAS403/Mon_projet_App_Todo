import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
  // Vérifier que l'en-tête Authorization existe
  const token = req.headers.authorization?.split(' ')[1]; // "Bearer <token>"

  if (!token) {
    return res.status(403).json({ message: "Accès interdit. Token manquant." });
  }

  try {
    // Décoder le token et obtenir les informations (ID de l'utilisateur)
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id; // Ajoute l'ID de l'utilisateur à la requête
    next(); // Passe à la prochaine étape (route suivante)
  } catch (error) {
    return res.status(401).json({ message: "Token invalide ou expiré." });
  }
};

export default authMiddleware;
