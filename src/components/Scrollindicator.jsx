import React, { useEffect, useState } from "react";

function Scrollindicator() {
  const [scrolltop, setScrolltop] = useState(0);

  const onscroll = () => {
    const winScroll = document.documentElement.scrollTop;
    console.log(winScroll)
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
      console.log(height)
      console.log()
      

    const scrolled = (winScroll / height) * 100;
    setScrolltop(scrolled);
  };
  useEffect(() => {
    window.addEventListener("scroll", onscroll);
  }, []);

  return (
    <div className="wrapper">
      <div className="boxscroll">
        <div
          className="scrollindlitor"
          style={{ width: `${scrolltop}%` }}
        ></div>
      </div>
    </div>
  );
}

export default Scrollindicator;
