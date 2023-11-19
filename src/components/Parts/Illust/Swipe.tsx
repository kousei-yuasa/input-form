const Swipe = ({
  src,
  handlers,
  text,
}: {
  src: string;
  handlers: any;
  text: number;
}) => {
  const style =
    text < 149
      ? { top: `${46 - text / 15}%` }
      : { top: "-500px", transition: "all 3s" };
  return (
    <>
      <div
        className="absolute left-1/2 z-30  -translate-x-1/2 "
        {...handlers}
        style={style}
      >
        <img src={src} alt="" className="h-full w-full bg-white" />
      </div>
    </>
  );
};
export default Swipe;
