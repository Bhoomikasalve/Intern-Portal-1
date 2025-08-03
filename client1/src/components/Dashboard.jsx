import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

function Dashboard() {
  const [intern, setIntern] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIntern = async () => {
      try {
        const docRef = doc(db, 'interns', 'alice'); // Replace with your intern ID
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setIntern(docSnap.data());
        } else {
          console.error("No such document!");
        }
      } catch (error) {
        console.error("Error fetching intern:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchIntern();
  }, []);

  if (loading) return <div className="text-center mt-6">Loading...</div>;
  if (!intern) return <div className="text-center mt-6">No intern data found.</div>;

  const { name, referralCode, donationsRaised } = intern;

  // Reward logic (basic example)
  const reward =
    donationsRaised >= 1000
      ? '🥈 SILVER ($1000)'
      : donationsRaised >= 500
      ? '🥉 BRONZE ($500)'
      : '🎁 PARTICIPANT';

  return (
    <>
    <div className="flex flex-col md:flex-row items-start justify-center gap-10 px-6 py-8">
      {/* Left side text */}
      <div className="max-w-md">
        <h4 className="uppercase text-sm text-blue-500 font-semibold mb-2">Dashboard</h4>
        <h2 className="text-3xl font-bold leading-snug mb-2">
          InternHub Journey <br /> And Services
        </h2>
        <p className="text-gray-600">
          your contribution on She Can Foundation and this is your record
        </p>
      </div>

      {/* Right side cards */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-green-400 text-white p-4 rounded shadow text-center">
          <p className="font-semibold text-black text-xl">NAME</p>
          <h3 className="text-lg font-bold">{name}</h3>
        </div>
        <div className="bg-teal-500 text-white p-4 rounded shadow text-center">
          <p className="font-semibold text-black text-xl">REFERRAL CODE</p>
          <h3 className="text-lg font-bold">{referralCode}</h3>
        </div>
        <div className="bg-violet-600 text-white p-4 rounded shadow text-center">
          <p className="font-semibold text-black text-xl">DONATIONS</p>
          <h3 className="text-lg font-bold">${donationsRaised}</h3>
        </div>
        <div className="bg-orange-400 text-white p-4 rounded shadow text-center">
          <p className="font-semibold text-black text-xl">REWARDS</p>
          <h3 className="text-lg font-bold">{reward}</h3>
        </div>
      </div>
      
    </div>
    <br />
   <h3 className="text-3xl font-bold text-center mb-8">Rewards</h3>
<div className="flex flex-col md:flex-row justify-center gap-8 px-4">
  {/* Gold Card */}
  <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center w-40">
    <div className="text-6xl">🥇</div>
    <p className="mt-4 text-base font-semibold text-center">Gold ($2000)</p>
  </div>

  {/* Silver Card */}
  <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center w-40">
    <div className="text-6xl">🥈</div>
    <p className="mt-4 text-base font-semibold text-center">Silver ($1000)</p>
  </div>

  {/* Bronze Card */}
  <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center w-40">
    <div className="text-6xl">🥉</div>
    <p className="mt-4 text-base font-semibold text-center">Bronze ($500)</p>
  </div>
</div>

      </>
  );
}

export default Dashboard;
