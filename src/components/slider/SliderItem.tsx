export const SliderItem = (props: any) => {
  const { element } = props;
  return (
    <div className="mx-10">
      <div className="w-[150px] h-[180px] bg-white"></div>
      <h1>{element.id}</h1>
    </div>
  );
};
