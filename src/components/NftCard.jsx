import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext"; // Importar AuthContext
import { db } from "../../firebaseConfig"; // Configuración de Firebase
import { collection, addDoc } from "firebase/firestore";
import { BookOpen, Heart } from "lucide-react";
import React from "react";

export default function NftCard({ item }) {
  const { user } = useContext(AuthContext); // Obtener el usuario actual
  const navigate = useNavigate();

  const handleSaveAndRedirect = async () => {
    if (!user) {
      alert("Debes iniciar sesión para agregar este item.");
      return;
    }

    try {
      // Guardar en Firestore
      await addDoc(collection(db, "user_activities"), {
        userId: user.uid,
        itemId: item.id,
        title: item.title,
        image: item.image,
        price: item.price,
        likes: item.likes,
        timestamp: new Date(),
      });

      // Redirigir a la página de actividad
      navigate("/activity");
    } catch (error) {
      console.error("Error guardando la actividad:", error);
    }
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="relative">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-64 object-cover"
        />
        <button
          className="absolute top-4 right-4 btn btn-circle btn-sm"
          onClick={handleSaveAndRedirect}
        >
          <BookOpen size={16} />
        </button>
      </figure>
      <div className="card-body">
        <h3 className="card-title">{item.title}</h3>
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-600">Price: {item.price} ETH</div>
          <div className="flex items-center">
            <Heart size={16} className="mr-1" />
            <span className="text-sm">{item.likes}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

