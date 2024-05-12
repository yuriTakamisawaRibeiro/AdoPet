import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { auth, firestore } from './firebaseConfig';

// Função para obter o usuário autenticado
export const getUid = () => {
  // Obtém o usuário atualmente autenticado do Firebase Authentication
  const user = auth.currentUser;

  // Verifica se há um usuário autenticado
  if (user) {
    // Retorna o objeto de usuário autenticado
    return user.uid
} else {
    // Retorna null se não houver usuário autenticado
    return null;
  }
};

export const getCurrentUser = async () => {
  const userId = getUid();

  if (userId) {
    const userDocRef = doc(firestore, 'users', userId); // Referência ao documento do usuário com o ID igual ao ID do usuário autenticado

    try {
      const userDocSnapshot = await getDoc(userDocRef);
      if (userDocSnapshot.exists()) {
        // Se o documento existir, retorna os dados do usuário
        return userDocSnapshot.data();
      } else {
        console.log('Nenhum usuário encontrado com o ID correspondente.');
        return null;
      }
    } catch (error) {
      console.error('Erro ao buscar usuário:', error);
      return null;
    }
  } else {
    console.log('Nenhum usuário autenticado encontrado.');
    return null;
  }
};