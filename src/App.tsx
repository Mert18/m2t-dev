import React from "react";
import { useQuery, gql } from "@apollo/client";
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";
import activities from "./data/activities.json";
import Activity from "./components/Activity/Activity";

function App() {
  console.log(activities);
  return (
    <>
      <Header />
      <main className="grid grid-cols-12 mt-8">
        <aside className="col-start-2 col-end-4">
          <div>
            {activities.map((activity: any) => (
              <Activity activity={activity.activity} date={activity.date} />
            ))}
          </div>
          <div>{/* Spotify */}</div>
        </aside>
        <section className="col-start-5 col-end-12 border border-black">
          <article></article>
          <article></article>
          <article></article>
          <article></article>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
