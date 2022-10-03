import React from 'react';
import MarkerIcon from '../../../assets/img/marker.png';
import { useDispatch, useSelector } from 'react-redux';
import { selectData } from '../../../redux/actions/selectedDataAction';

function MapMarker({ data }) {
  const selectedData = useSelector((state) => state.selectedData.data);
  const dispatch = useDispatch();
  const selectedCondition = selectedData && selectedData.place_name === data.place_name;

  const selectMarkerHandler = (data) => {
    dispatch(selectData(data));
  };
  return (
    <div
      className={`relative cursor-pointer ${ selectedCondition && "z-50"}`}
      onClick={() => selectMarkerHandler(data)}
    >
      <div
        className={`${
          selectedCondition
            ? 'bg-[#92D72E] left-4 pl-12 pr-4 space-y-1'
            : 'bg-[#282C37] left-2 px-3 z-30'
        } absolute top-[10%] whitespace-nowrap text-white py-2 rounded-l-full`}
      >
        <h3 className={`${ selectedCondition ? "text-[1.25rem]" : "text-[0.8rem]"}`}>{data.place_name}</h3>
        {selectedCondition && (
          <p className="text-[1em]">{data.address}</p>
        )}
      </div>
      <img
        className={`${
          selectedCondition
            ? 'w-[109px]'
            : 'w-[45px] '
        }`}
        src={MarkerIcon}
        alt={`marker-${data.place_name}`}
      />
    </div>
  );
}

export default React.memo(MapMarker);
