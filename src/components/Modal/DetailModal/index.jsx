import React from 'react';
import { useSelector } from 'react-redux';

// image source
import browse from '../../../assets/img/browse_icon_deatail.png';
import marker from '../../../assets/img/marker_icon_detail.png';

function DetailModal() {
  const data = useSelector((state) => state.selectedData.data);
  return (
    data && (
      <aside className="absolute right-0 h-screen w-[349px] text-white bg-[#313541] z-20">
        <figure className="mt-[125px]">
          <img className='h-[250px] w-full object-cover' src={data.img} alt="img-detail" />
          <figcaption className="px-[30px] py-[10px] bg-[#72cdd2] text-xl">
            {data.place_name}
          </figcaption>
        </figure>

        <div className="detail-description text-sm px-[30px] mt-[15px]">
          <p>{data.description}</p>

          <div className="mt-10 flex items-center space-x-2">
            <img src={marker} alt="" />
            <span>{data.address}</span>
          </div>
          <div className="mt-2 flex items-center space-x-2">
            <img src={browse} alt="" />
            <a href={data.website}>{data.website}</a>
          </div>
        </div>
      </aside>
    )
  );
}

export default DetailModal;
