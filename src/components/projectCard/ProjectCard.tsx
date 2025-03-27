export const ProjectCard = (props: any) => {
  const { project } = props;

  return (
    <div className="bg-blue min-w-[320px] w-[22vw] h-[500px] my-5">
      <div className="relative w-[100%] h-[80%]">
        <img
          src={`src/assets/img/${project.image}`}
          className=" object-cover w-full h-full"
        ></img>
      </div>
      <h1 className="text-2xl font-semibold">{project.name}</h1>
      <p>{project.descriptionLong}</p>
    </div>
  );
};
