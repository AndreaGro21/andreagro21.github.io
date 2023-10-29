import React, { useEffect } from 'react';
import gmail from "../../../assets/img/linkLogo/gmail.png"
function MyFormPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {

      document.body.removeChild(script);
    };
  }, []);

  return (
    <button data-tf-popup="IPk2Zqn4" data-tf-opacity="100" data-tf-size="100" data-tf-iframe-props="title=Mail Contact Form" data-tf-transitive-search-params data-tf-medium="snippet" ><img src={gmail} alt="Gmail" ></img></button>
  );
}

export default MyFormPage;
