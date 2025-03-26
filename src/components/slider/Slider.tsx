import { useState } from "react";
import { SliderItem } from "./SliderItem";

export const Slider = (props: any) => {
  const { selected, content, itemsPerPage } = props;
  let [page, setPage] = useState(0);
  let pageCount = Math.ceil(selected.length / itemsPerPage);
  return (
    <div className="w-full h-full">
      <div className="flex justify-end mr-10">
        <button
          onClick={() => {
            setPage((state) => {
              return Math.abs((state - 1) % pageCount);
            });
          }}
          className="text-white text-4xl"
        >
          &lt;
        </button>
        <button
          onClick={() => {
            setPage((state) => {
              return (state + 1) % pageCount;
            });
          }}
          className="text-white text-4xl"
        >
          &gt;
        </button>
      </div>
      <div className="flex justify-between">
        {selected
          .filter((_, index) => {
            return (
              index >= page * itemsPerPage && index < (page + 1) * itemsPerPage
            );
          })
          .map((element: any, index: any) => {
            return <SliderItem element={element} />;
          })}
      </div>
    </div>
  );
};
