export default function LogoVideo() {
  return (
    <div className="video__container">
      <video className="video" controls autoPlay="true">
        <source src={require("../assets/Lucy_Pizza.mp4")} type="video/mp4" />
      </video>
    </div>
  );
}
