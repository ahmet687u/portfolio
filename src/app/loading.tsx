const Loading = () => {
  return (
    <div className="loading">
      <div className="loading-circle">
        {new Array(7).fill("").map((_, index) => (
          <div
            key={index}
            className="loading-circle-item"
            style={{ ["--idc" as any]: index }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Loading;
