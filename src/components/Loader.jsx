import { useState, useEffect } from "react";
import { FadeLoader } from "react-spinners";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // adjust the delay time as needed

    return () => clearTimeout(timer);
  }, []);

  if (!loading) {
    return null;
  }

  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <FadeLoader color="#01497C" />
    </div>
  );
}

