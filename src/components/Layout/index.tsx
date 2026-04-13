import React from 'react';
import { useEffect } from "react";
import { useRouter } from "next/router";
import Header from "./Header";


type LayoutProps = {
  children: any;
};

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const { pathname, query } = router;

  useEffect(() => {
    //To reset incase an action is to be performed
    // dispatch(shouldRefresh(true));
    if (location.pathname == "/") {
      router.push("/home");
    }
  }, []);

  return (
    <div className="flex h-screen overflow-y-auto">

      <div className="flex-2 w-full">
        <div className=" mb-2">
          <Header  />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
