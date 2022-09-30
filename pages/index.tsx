import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";

const Home: NextPage = () => {
  var $: any = function (elem: string) {
    return document.querySelector(elem);
  };

  const [bg, setBg] = useState("#FFFFFF");
  const [color, setColor] = useState("#000");
  const [font, setFont] = useState("sans");
  const [code, setCode] = useState(null)
  const [aligns, setAligns] = useState("left")

  let doDL = (s: any) => {
    if (typeof window !== "undefined") {
      let dataUrl = (data: any) => {return "data:x-application/text," + escape(data);}
      window.open(dataUrl(s));
    }
  }
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <script src="https://cdn.tailwindcss.com/"></script>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="pl-2.5 pt-2.5 flex fixed top-0 left-0 right-0 bg-slate-800 border-b-[1px] border-gray-500 w-[100vw] h-[40px]">
        <h1 className="font-extrabold">BrahmaUI [Mobile Design]</h1>
        <div className="flex space-x-2 absolute left-[50%] translate-x-[-50%] text-gray-500 font-bold">
          <button onClick={(e) => {
            e.preventDefault()
            alert("Downloading the file")
            doDL(code)
          }}><img src="https://img.icons8.com/metro/26/737373/save.png"/></button>
        </div>
      </nav>

      <div className="flex space-x-2">
        <div className="w-64 h-[100vw] bg-slate-800 p-2.5 text-white pt-[40px] flex flex-col space-y-2">
          <h1 className="text-3xl font-bold text-center">Body</h1>
          <div className="flex space-y-2 flex-col">
            <div className="flex space-x-2">
              <div
                className="mt-[10px] w-[20px] h-[20px] rounded-[25px] border-[1px] border-gray-500"
                id="bg-p"
              ></div>
              <input
                type="text"
                className="bg-slate-700 rounded-md w-[200px] h-[40px] focus:outline-none pl-2.5 text-gray-200"
                placeholder="Background"
                value={bg}
                onChange={(e: any) => {
                  setBg(e.target.value);

                  let bgP = $("#bg-p");
                  bgP.style.background = e.target.value;
                }}
              />
            </div>
            <div className="flex space-x-2">
              <div
                className="mt-[10px] w-[20px] h-[20px] rounded-[25px] border-[1px] border-gray-500"
                id="text-p"
              ></div>
              <input
                type="text"
                className="bg-slate-700 rounded-md w-[200px] h-[40px] focus:outline-none pl-2.5 text-gray-200"
                placeholder="Text Color"
                value={color}
                onChange={(e: any) => {
                  setColor(e.target.value);

                  let textP = $("#text-p");
                  textP.style.background = e.target.value;
                }}
              />
            </div>
            <div className="flex space-x-2">
              <div
                className="mt-[5px] w-[20px] h-[20px] font-bold text-2xl"
                id="font-p"
              >
                a
              </div>
              <input
                type="text"
                className="bg-slate-700 rounded-md w-[200px] h-[40px] focus:outline-none pl-2.5 text-gray-200"
                placeholder="Font Family"
                value={font}
                onChange={(e: any) => {
                  setFont(e.target.value);

                  let fP = $("#font-p");
                  fP.style.fontFamily = e.target.value;
                }}
              />
            </div>
            <div className="flex space-x-2">
              <div
                className="mt-[5px] w-[20px] h-[20px] font-bold text-2xl"
                id="font-p"
              >
                a
              </div>
              <input
                type="text"
                className="bg-slate-700 rounded-md w-[200px] h-[40px] focus:outline-none pl-2.5 text-gray-200"
                placeholder="Text Align"
                value={aligns}
                onChange={(e: any) => {
                  setAligns(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-2 mt-[60px]">
          <textarea value={code} onChange={(e: any) => setCode(e.target.value)} className="bg-slate-800 p-2.5 focus:outline-none w-[50vw] h-[42vw] rounded-lg border-[1px] border-gray-500"></textarea>
        </div>
        <iframe
          className="w-[360px] h-[590px] bg-white rounded-lg border-[1px] border-gray-500 mt-[50px]"
          srcDoc={`
          <DOCTYPE html>
          <html>
            <head>
              <title>idk</title>
            </head>
            <body style="background: ${bg};color: ${color};font-family: ${font};text-align: ${aligns};">
              ${code}
            </body>
          </html>
          `}
        ></iframe>
      </div>
    </div>
  );
};

export default Home;
