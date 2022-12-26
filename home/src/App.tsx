import React, { useEffect, useRef } from "react";

import "./index.scss";

import AppFooter from "shell/AppFooter";
import AppHeader from "shell/AppHeader";
import placeVueComponent from "shell/placeVueComponent";

import MainLayout from "./MainLayout";
import mount from "./placeReactComponent";

const App = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      placeVueComponent(AppHeader, headerRef.current);
    }
    if (footerRef.current) {
      placeVueComponent(AppFooter, footerRef.current);
    }
  }, []);

  return (
    <div className='text-3xl mx-auto max-w-6xl'>
      <div ref={headerRef}></div>
      <MainLayout />
      <div ref={footerRef}></div>
    </div>
  );
};

mount(App, document.getElementById("app"));
