import React from 'react'
import { useState , useEffect } from 'react';
import axios  from 'axios';
import { useNavigate } from 'react-router-dom';
function VideoDetailRightSidePannel() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate()

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
      <div className="col-span-12 flex w-full shrink-0 flex-col gap-3 lg:w-[350px] xl:w-[400px]">
        {videos.length > 0 ? (
          videos.map((video, index) => (
            <button
              onClick={() => {
                navigate(`/video/${video._id}`), window.location.reload();
              }}
              key={index}
            >
              <div className="w-full gap-x-2 border pr-2 md:flex">
                <div className="relative mb-2 w-full md:mb-0 md:w-5/12">
                  <div className="w-full pt-[56%]">
                    <div className="absolute inset-0">
                      <img
                        src={video.thumbnail}
                        alt="Video Thumbnail"
                        className="h-full w-full"
                      />
                    </div>
                    <span className="absolute bottom-1 right-1 inline-block rounded bg-black px-1.5 text-sm">
                      {(video.duration / 60).toFixed(2)}
                    </span>
                  </div>
                </div>
                <div className="flex gap-x-2 px-2 pb-4 pt-1 md:w-7/12 md:px-0 md:py-0.5">
                  <div className="h-12 w-12 shrink-0 md:hidden">
                    <img
                      src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Avatar"
                      className="h-full w-full rounded-full"
                    />
                  </div>
                  <div className="w-full pt-1 md:pt-0">
                    <h6 className="mb-1 text-sm font-semibold">
                      {video.title}
                    </h6>
                    <p className="mb-0.5 mt-2 text-sm text-gray-200">
                      {video.ownerDetails.userName}
                    </p>
                    <p className="flex text-sm text-gray-200">
                      {video.views} Views ·{" "}
                      {Math.floor(
                        (new Date() - new Date(video.updatedAt)) /
                          (1000 * 60 * 60 * 24)
                      )}{" "}
                      day ago
                    </p>
                  </div>
                </div>
              </div>
            </button>
          ))
        ) : (
          <div>No video found</div>
        )}
      </div>
    </>
  );
}

export default VideoDetailRightSidePannel
