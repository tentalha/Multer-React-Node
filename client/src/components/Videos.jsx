const Videos = ({ videos }) => {
  return (
    <section className="container w-100">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center text-muted">Videos</h1>
        </div>
        {videos.length > 0 ? (
          <div className="row my-4">
            {videos.map((video) => {
              return (
                <div className="col-md-3 text-center col-sm-6 mx-2">
                  <video
                    src={video.video}
                    preload="auto"
                    width="320"
                    height="240"
                    controls
                  ></video>
                  <p>{video.name}</p>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="row">
            <h5 className="text-center" style={{ color: "red" }}>
              Oops No video to display !
            </h5>
          </div>
        )}
      </div>
    </section>
  );
};

export default Videos;
