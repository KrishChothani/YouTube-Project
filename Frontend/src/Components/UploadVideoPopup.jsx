import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function UploadVideoPopup() {
  const navigate = useNavigate();
  const [videoFile, setVideoFile] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleVideoFile = (event) => setVideoFile(event.target.files[0]);
  const handleThumbnail = (event) => setThumbnail(event.target.files[0]);
  const handleTitle = (event) => setTitle(event.target.value);
  const handleDescription = (event) => setDescription(event.target.value);

  function uploadVideo() {
    if (!videoFile || !thumbnail || title === "" || description === "") {
      alert("Please fill out all fields to upload the video");
      return;
    }

    const formData = new FormData();
    formData.append("videoFile", videoFile);
    formData.append("thumbnail", thumbnail);
    formData.append("title", title);
    formData.append("description", description);

    axios({
      method: "POST",
      url: "https://youtube-backend-psi.vercel.app/api/v1/videos/",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials:true,
    })
      .then((res) => {
        // console.log(res);
        navigate("/edmindashboard");
      })
      .catch((e) => {
        console.error(e);
        alert("Failed to upload video");
      });
  }
  return (
    <>
      <div className="absolute inset-0 z-10 bg-black/50 px-4 pb-[86px] pt-4 sm:px-14 sm:py-8">
        <div className="h-full overflow-auto border bg-[#121212]">
          <div className="flex items-center justify-between border-b p-4">
            <h2 className="text-xl font-semibold">Upload Videos</h2>

            <button
              className="group/btn mr-1 flex w-auto items-center gap-x-2 bg-[#ae7aff] px-3 py-2 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e]"
              //  TODO:
              onClick={() => uploadVideo()}
            >
              Save
            </button>
          </div>
          <div className="mx-auto flex w-full max-w-3xl flex-col gap-y-4 p-4">
            <div className="w-full border-2 border-dashed px-4 py-12 text-center">
              {videoFile ? (
                videoFile.name
              ) : (
                <div>
                  <span className="mb-4 inline-block w-24 rounded-full bg-[#E4D3FF] p-4 text-[#AE7AFF]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                      ></path>
                    </svg>
                  </span>

                  <h6 className="mb-2 font-semibold">
                    Drag and drop video files to upload
                  </h6>
                  <p className="text-gray-400">
                    Your videos will be private untill you publish them.
                  </p>
                  <label
                    htmlFor="upload-video"
                    className="group/btn mt-4 inline-flex w-auto cursor-pointer items-center gap-x-2 bg-[#ae7aff] px-3 py-2 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e]"
                  >
                    <input
                      type="file"
                      id="upload-video"
                      className="sr-only"
                      onChange={handleVideoFile}
                    />
                    Select Files
                  </label>
                </div>
              )}
            </div>
            <div className="w-full">
              <label htmlFor="thumbnail" className="mb-1 inline-block">
                Thumbnail<sup>*</sup>
              </label>
              <input
                id="thumbnail"
                type="file"
                className="w-full border p-1 file:mr-4 file:border-none file:bg-[#ae7aff] file:px-3 file:py-1.5"
                onChange={handleThumbnail}
              />
            </div>
            <div className="w-full">
              <label htmlFor="title" className="mb-1 inline-block">
                Title<sup>*</sup>
              </label>
              <input
                id="title"
                type="text"
                className="w-full border bg-transparent px-2 py-1 outline-none"
                value={title}
                onChange={handleTitle}
              />
            </div>

            <div className="w-full">
              <label htmlFor="desc" className="mb-1 inline-block">
                Description<sup>*</sup>
              </label>
              <textarea
                id="desc"
                className="h-40 w-full resize-none border bg-transparent px-2 py-1 outline-none"
                value={description}
                onChange={handleDescription}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UploadVideoPopup
