import { Fragment, useState, useEffect } from "react";

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Update the year when the component mounts
    setYear(new Date().getFullYear());
  }, []);

  return (
    <Fragment>
      <div className="pt-lg-10 p-6 footer text-xl md:text-3xl font-mono font-semibold">
        <p>{`©${year} - Burhanuddin Vora`}</p>
      </div>
    </Fragment> 
  );
};

export default Footer;