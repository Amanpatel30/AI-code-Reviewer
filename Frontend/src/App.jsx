import { React, useEffect, useState } from "react";
import prism from "prismjs";
import Editor from "react-simple-code-editor";
import "./App.css";
import axios from "axios";
import "prismjs/themes/prism-tomorrow.css";
import Markdown from "react-markdown";
import rehypehighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { FaCodepen } from "react-icons/fa";
import { FaRegImage } from "react-icons/fa";

const App = () => {
  const [code, setCode] = useState(`function(){
    return a+b
}`);
  const [review, setReview] = useState();
  const [model, setModel] = useState("Gemini 2.0 Flask");
  const [isLoading, setIsLoading] = useState(false);
  const [Tab, setTab] = useState("Review");
  const [Image, setImage] = useState("./output.png");
  const [prompt, setPrompt] = useState("");

  useEffect(() => {
    prism.highlightAll();
  }, []);

  async function fetch() {
    try {
      setIsLoading(true);
      if (model === "Gemini 2.0 Flask") {
        const response = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/GeminiAi/get-review`,
          { code }
        );
        setReview(response.data);
      } else if (model === "Deepseek") {
        const response = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/DeepseekAi/get-review`,
          { code }
        );
        setReview(response.data);
      }
    } catch (error) {
      console.error("Error fetching review:", error);
      setReview("❌ Error: Failed to get review. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  async function fetchImage() {
    // console.log(prompt)
    const text = prompt;
    try {
      setIsLoading(true);
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/ImageGenerate/get-Image`,
        { text }
      );
      setImage("./output.png");
      console.log(response);
      // console.log("Image generated successfully:", response.data.ImageUrl);
      // Ensure the backend returns the correct key for the image URL
      // console.log(response)
      // setImage(response.data.imageUrl); // Replace with correct response key
    } catch (error) {
      console.error("Error generating image:", error);
    } finally {
      setIsLoading(false);
      // setImage("./output.png");
    }
  }

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex flex-col gap-4 animate-pulse">
          <div className="h-6 bg-gray-700 rounded w-3/4"></div>
          <div className="h-24 bg-gray-700 rounded"></div>
          <div className="h-6 bg-gray-700 rounded w-1/2"></div>
          <div className="h-32 bg-gray-700 rounded"></div>
          <div className="h-6 bg-gray-700 rounded w-2/3"></div>
        </div>
      );
    }

    return review ? (
      <Markdown rehypePlugins={rehypehighlight}>{review}</Markdown>
    ) : Tab === "Review" ? (
      <div className="text-gray-400 text-xl">
        Enter your code and click Review to get feedback 🚀
      </div>
    ) : (
      ""
    );
  };

  return (
    <>
      <main className="flex w-full h-full p-10 gap-2.5">
        <div className="bg-[#2d2d30] rounded-2xl w-[50%] h-full relative text-white p-6 text-3xl flex flex-col">
          <div className="flex text-lg items-center border-gray-700 border-1 rounded-md">
            <div
              onClick={() => {
                setTab("Review");
              }}
              className="flex items-center bg-[rgba(36,36,36)]  hover:bg-[rgba(30,30,30)] p-3 w-1xl h-full gap-2 "
            >
              <button>Review</button>
              <FaCodepen />
            </div>
            <div
              onClick={() => {
                setTab("Image");
              }}
              className="flex items-center bg-[rgba(36,36,36)]  hover:bg-[rgba(30,30,30)] w-1xl h-full p-3 gap-2"
            >
              <button>Image</button>
              <FaRegImage />
            </div>
            {/* <button>Image Generation<FaRegImage /></button> */}
          </div>
          {Tab === "Review" ? (
            <Editor
              value={code}
              onValueChange={setCode}
              highlight={(code) =>
                prism.highlight(code, prism.languages.javascript, "javascript")
              }
              padding={10}
              className="Editor bg-[#2d2d30] text-white font-mono text-lg flex-1"
              style={{
                height: "100%",
                width: "100%",
                borderRadius: "1rem",
                // border: "1px solid #212121",
                outline: "none",
                boxShadow: "none",
                overflow: "auto",
                fontFamily: "monospace",
                fontSize: "1.5rem",
                color: "white",
                backgroundColor: "#2d2d30",
              }}
            />
          ) : (
            ""
          )}
          {Tab === "Image" ? (
            <div
              className="p-5"
              style={{
                height: "100%",
                width: "100%",
                borderRadius: "1rem",
                // border: "1px solid #212121",
                outline: "none",
                boxShadow: "none",
                overflow: "auto",
                fontFamily: "monospace",
                fontSize: "1.5rem",
                color: "white",
                backgroundColor: "#2d2d30",
              }}
            >
              <h1>Enter Prompt</h1>
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="bg-amber-50 text-black text-lg"
              />
            </div>
          ) : (
            ""
          )}

          <div className="flex justify-between items-end mt-6">
            <div className="text-xl">
              {Tab === "Review" ? (
                <div className="relative flex items-center gap-2">
                  <label htmlFor="model" className="mb-0">
                    Choose Model :
                  </label>
                  <select
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    name="model"
                    id="model"
                    className="bg-[#232326] text-white p-2 rounded-lg text-lg w-60"
                    disabled={isLoading}
                  >
                    <option value="Deepseek">Deepseek</option>
                    <option value="Gemini 2.0 Flask">Gemini 2.0 Flask</option>
                  </select>
                  {model === "Deepseek" && (
                    <div className="text-sm text-gray-400 mt-1 ml-1 animate-pulse">
                      Slower
                    </div>
                  )}
                </div>
              ) : (
                ""
              )}{" "}
              {Tab === "Image" ? (
                <div className="relative flex items-center gap-2">
                  <label htmlFor="model" className="mb-0">
                    Choose Model :
                  </label>
                  <select
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    name="model"
                    id="model"
                    className="bg-[#232326] text-white p-2 rounded-lg text-lg w-60"
                    disabled={isLoading}
                  >
                    <option value="stable-diffusion-v1-6">
                      stable-diffusion-v1-6
                    </option>
                  </select>
                  {model === "Deepseek" && Tab === "Review" ? (
                    <div className="text-sm text-gray-400 mt-1 ml-1 animate-pulse">
                      Slower
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              ) : (
                ""
              )}
            </div>
            {Tab === "Review" ? (
              <button
                className={`flex items-center justify-center w-[120px] text-black font-sans p-2 text-lg rounded-lg cursor-pointer transition ${
                  isLoading
                    ? "bg-blue-300 cursor-not-allowed"
                    : "bg-blue-400 hover:bg-blue-500"
                }`}
                onClick={fetch}
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                    <span>Loading</span>
                  </div>
                ) : (
                  "Review"
                )}
              </button>
            ) : (
              ""
            )}
            {Tab === "Image" ? (
              <button
                className={`flex items-center justify-center w-[120px] text-black font-sans p-2 text-lg rounded-lg cursor-pointer transition ${
                  isLoading
                    ? "bg-blue-300 cursor-not-allowed"
                    : "bg-blue-400 hover:bg-blue-500"
                }`}
                onClick={fetchImage}
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                    <span>Loading</span>
                  </div>
                ) : (
                  "Generate"
                )}
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="overflow-scroll bg-[rgba(36,36,36)] rounded-2xl w-[50%] h-full p-6 text-2xl text-white">
          {renderContent()}
          {/* {Tab === "Image" ? <img src="/Users/aman/Vs Code/AI code Reviewer/Backend/output.png" alt="" /> : ""} */}
          {Tab === "Image" ? (
            <img
              src={Image}
              width={400}
              height={400}
              alt="Generated Output"
              className="rounded-lg border border-gray-700"
              onError={() => console.error("❌ Image failed to load:", Image)}
            />
          ) : (
            <></>
          )}
        </div>
      </main>
    </>
  );
};

export default App;
