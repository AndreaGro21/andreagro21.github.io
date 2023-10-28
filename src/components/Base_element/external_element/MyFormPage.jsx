import React, { useEffect } from 'react';
import gmail from "../../../assets/img/linkLogo/gmail.png"
function MyFormPage() {
  useEffect(() => {
    // Includi qui il tuo snippet JavaScript di Typeform
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


/* 
style="all:unset;font-family:Helvetica,Arial,sans-serif;display:inline-block;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;background-color:#0445AF;color:#fff;font-size:20px;border-radius:25px;padding:0 33px;font-weight:bold;height:50px;cursor:pointer;line-height:50px;text-align:center;margin:0;text-decoration:none;"

*/