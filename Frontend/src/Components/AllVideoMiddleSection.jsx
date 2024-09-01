import React, { useCallback } from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function AllVideoMiddleSection() {

  const navigate = useNavigate()
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios({
          method: "GET",
          url: "/api/v1/videos",
        });
        setVideos(res.data.data.docs);
        console.log(videos); 
      } catch (err) {
        setError(err.message || "Failed to fetch videos");
      } finally {
        setLoading(false);
      }
    };
    fetchVideos();
  }, [loading, error]);
  // console.log(videos[0].duration);
  if (loading) return <p>Loading videos...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <>
      <section className="w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4 p-4">
          {videos.length > 0 ? (
            videos.map((video, index) => (
              <div className="w-full" key={index}>
                <div className="relative mb-2 w-full pt-[56%]">
                  <div className="absolute inset-0">
                    <button onClick={() => navigate(`/video/${video._id}`)}>
                      <video
                        src={video.thumbnail} // Provide a default image if thumbnail is missing
                        alt={video.title}
                        className="h-full w-full"
                      />
                    </button>
                  </div>
                  <span className="absolute bottom-1 right-1 inline-block rounded bg-black px-1.5 text-sm">
                    {video.duration.toFixed(2)}
                  </span>
                </div>
                <div className="flex gap-x-2">
                  <div className="h-10 w-10 shrink-0">
                    <img
                      src={video.ownerDetails?.avatar || "default-avatar.jpg"} // Provide a default avatar if missing
                      alt={video.ownerDetails?.username || "Username"}
                      className="h-full w-full rounded-full"
                    />
                  </div>
                  <div className="w-full">
                    <h6 className="mb-1 font-semibold">{video.title}</h6>
                    <p className="flex text-sm text-gray-200">
                      {video.views} Views ·{" "}
                      {Math.floor(
                        (new Date() - new Date(video.updatedAt)) /
                          (1000 * 60 * 60 * 24)
                      )}{" "}
                      day ago
                    </p>
                    <p className="text-sm text-gray-200">
                      {video.ownerDetails?.username || "Unknown"}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No videos available.</p>
          )}
        </div>
      </section>
    </>
  );
}

export default AllVideoMiddleSection;
