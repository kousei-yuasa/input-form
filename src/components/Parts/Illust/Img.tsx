import trueImg from "../../../assets/images/titleTrue.png";

const Img = ({ text }: { text: string }) => {
  return (
    <img
      src={trueImg}
      alt=""
      className={`absolute ${text} z-20 h-[94.67px] w-[106px]`}
    />
  );
};
export default Img;
