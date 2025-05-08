export const SliderItem = (props: any) => {
  const { element, itemWidth } = props;
  return (
    <div className="mx-10">
      <div className={`w-[${itemWidth}px] h-[320px] bg-white`}>
        <img
          src={`src/assets/img/${element.image}`}
          className=" object-cover w-full h-full"
        ></img>
      </div>
      <div className="my-2 w-full h-[2px] bg-black" />
      <h1 className="text-xl font-semibold text-black">{element.name}</h1>
    </div>
  );
};
