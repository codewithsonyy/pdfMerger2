import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Hero.css";


const Hero = () => {
  const { register, handleSubmit } = useForm();
  const [pdfBlob, setPdfBlob] = useState(null);
 
  const onSubmit = async (data) => {
    const formData = new FormData();
    for (let i = 0; i < data.file.length; i++) {
      formData.append("pdfs", data.file[i]);
    }

    // data.file.forEach((file, i) => {
    //   formData.append(`pdf-${i}`, file, file.name);
    // });

    const url = await fetch("http://localhost:5000/pdfpair", {
      method: "POST",

      body: formData,
    })
      .then((res) => {
        if (res.ok) return res.blob();
      })
      .then((blob) => {
        setPdfBlob(blob);
      })
      .catch((error) => {
        console.error("Error fetching binary data:", error);
      });
  };
  const openPDFInNewTab = () => {
    if (pdfBlob) {
      const pdfURL = URL.createObjectURL(pdfBlob);
      window.open(pdfURL, "_blank");
      window.URL.revokeObjectURL(pdfURL);
      setPdfBlob(null);
    }
  };

  return (
    <div className="container">
      <div className="hero">
        <div className="hero-textbox">
          <h1 className="heading-primary">
            <span className="greenn">PdfX</span> - Your favouite{" "}
            <span className="greenn">pdf merger</span> tool!{" "}
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className="hero-description" htmlFor="inputTag">
              Select the pdf files you want to merge
              <br />
              <input
                type="file"
              
                name="pdfs"
                
                id="pdfinput"
               
                multiple
                accept=".pdf"
                {...register("file")}
              />
            </label>
            <br />
            <input className="pdfselect" type="submit" value="Submit" />
          

            <div>
              {pdfBlob && (
                <div>
                  <button onClick={openPDFInNewTab}>
                    Open PDF in New Tab or Scroll below!
                  </button>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
   
      <div>
        {pdfBlob && (
          <object
            data={URL.createObjectURL(pdfBlob)}
            type="application/pdf"
            width="100%"
            height="600px"
          >
            <p>PDF viewer not supported in this browser.</p>
          </object>
        )}
      </div>
    </div>
  );
};

export default Hero;
