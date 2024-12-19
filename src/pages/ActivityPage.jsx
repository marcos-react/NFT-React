import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { db } from "../../firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

export default function ActivityPage() {
  const { user } = useContext(AuthContext); // User Authentication
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      if (!user) return;

      try {
        const activitiesRef = collection(db, "user_activities");
        const q = query(activitiesRef, where("userId", "==", user.uid));
        const querySnapshot = await getDocs(q);

        const userActivities = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setActivities(userActivities);
      } catch (error) {
        console.error("Error fetching activities:", error);
      }
    };

    fetchActivities();
  }, [user]);

  if (!user) {
    return <p>You must log in to bookmark</p>;
  }

  return (
    <section className="py-16 md:px-16 sm:px-8">
      <h2 className="text-3xl font-bold mb-8">My Activities</h2>
      <div className="grid grid-cols-4 gap-6">
        {activities.map((activity) => (
          <div key={activity.id} className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-64 object-cover"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title">{activity.title}</h3>
              <div className="text-sm text-gray-600">
                Price: {activity.price} ETH
              </div>
              <div className="flex items-center">
                {/* <Heart size={16} className="mr-1" /> */}
                <span className="text-sm">{activity.likes} likes</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
