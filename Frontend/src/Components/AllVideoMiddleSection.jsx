import React, { useCallback } from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
function AllVideoMiddleSection() {
  const navigate = useNavigate();
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const {userName = ''} = useParams()

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios({
          method: "GET",
          url: "/api/v1/videos",
        });
        if (userName === '') {
          setVideos(res.data.data.docs);
        } else {
          const userVideo = res.data.data.docs.filter(
            (vd) => vd.ownerDetails.userName === userName
          );
          setVideos(userVideo);
        }
      } catch (err) {
        setError(err.message || "Failed to fetch videos");
      } finally {
        setLoading(false);
      }
    };
    fetchVideos();
  }, [loading, error]);

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
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={() => navigate(`/video/${video._id}`)}
                      className="w-full h-full"
                    >
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="h-full w-full object-cover"
                      />
                    </button>
                  </div>
                  <span className="absolute bottom-1 right-1 inline-block rounded bg-black px-1.5 text-sm text-white">
                    {video.duration.toFixed(2)}
                  </span>
                </div>

                <div className="flex gap-x-2">
                  <button
                    onClick={() =>
                      navigate(
                        `/userProfile/${video.ownerDetails?.userName}/videos`
                      )
                    }
                    className="flex w-full p-0 hover:bg-gray-800 rounded-md transition-colors duration-200"
                  >
                    {/* Avatar Section */}
                    <div className="h-10 w-10 shrink-0 mr-3">
                      <img
                        src={video.ownerDetails?.avatar || "default-avatar.jpg"} // Provide a default avatar if missing
                        alt={video.ownerDetails?.userName || "Username"}
                        className="h-full w-full rounded-full object-cover"
                      />
                    </div>

                    {/* Video Details Section */}
                    <div className="flex flex-col justify-start ml-0">
                      <h6 className="flex font-semibold text-white">
                        {video.title}
                      </h6>
                      <p className="flex text-sm text-gray-400">
                        {video.views} Views ·{" "}
                        {Math.floor(
                          (new Date() - new Date(video.updatedAt)) /
                            (1000 * 60 * 60 * 24)
                        )}{" "}
                        day ago
                      </p>
                      <p className="flex text-sm text-gray-400">
                        {video.ownerDetails?.userName || "Unknown"}
                      </p>
                    </div>
                  </button>
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
