export const TagList = (props: {
  tags: string[];
  hiddenTags: string[];
  setHiddenTags: any;
}) => {
  const { tags, hiddenTags, setHiddenTags } = props;

  const handleTagClick = (tag: string) => {
    let hiddenTagsNew = structuredClone(hiddenTags);
    if (hiddenTagsNew.includes(tag)) {
      let filteredList = hiddenTagsNew.filter((e) => {
        return e != tag;
      });
      setHiddenTags(filteredList);
    } else {
      // At least one tag needs to be selected
      if (!(hiddenTags.length + 1 == tags.length)) {
        hiddenTagsNew.push(tag);
        setHiddenTags(hiddenTagsNew);
      }
    }
  };
  return (
    <ul className=" [&>li]:list-none flex justify-start">
      {tags.map((tag) => {
        return (
          <li className="pr-3">
            <button
              className={`rounded-full py-1 px-5 ${
                !hiddenTags.includes(tag)
                  ? "bg-black text-white"
                  : "bg-white text-black outline-grey outline outline-[2px]"
              }`}
              onClick={() => {
                handleTagClick(tag);
              }}
            >
              {tag}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
