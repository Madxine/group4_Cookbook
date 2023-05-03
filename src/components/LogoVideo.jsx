export default function LogoVideo() {
  return (
    <div className="video__container">
      <video className="video" autoPlay={true} loop={false} muted={true}>
        <source src={require("../assets/Lucy_Pizza.mp4")} type="video/mp4" />
        YAMS delicious desserts
      </video>
    </div>
  );
}
