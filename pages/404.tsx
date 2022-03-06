import Layout from "../components/Layout";
import { useState, useEffect } from "react";

const beKindToWhoisLost = [
  "You are lost. Just like me after watched I Am Thinking Of Ending Things.",
];

export default function NotFound() {
  const [siteyt, setSiteyt] = useState(beKindToWhoisLost[0]);

  useEffect(() => {
    let random = Math.trunc(Math.random() * beKindToWhoisLost.length);
    setSiteyt(beKindToWhoisLost[random]);
  }, []);
  return (
    <Layout>
      <div>
        <p>{siteyt}</p>
      </div>
    </Layout>
  );
}
