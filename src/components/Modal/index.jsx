import React from 'react';

// image source
import browse from '../../assets/img/browse_icon_deatail.png';
import marker from '../../assets/img/marker_icon_detail.png';


function Modal() {
  return (
    <aside className="absolute right-0 h-screen w-[349px] text-white bg-[#313541] z-20">
      <figure className="mt-[125px]">
        <img src="pic_trulli.jpg" alt="img-detail" />
        <figcaption className="px-[30px] py-[10px] bg-[#72cdd2] text-xl">
          Merlion
        </figcaption>
      </figure>

      <div className="detail-description text-sm px-[30px] mt-[15px]">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur
          repudiandae est vel soluta accusantium deleniti aliquid, a explicabo
          velit molestiae id, illo facere? Quae neque sunt, placeat totam
          delectus magnam.
        </p>

        <div className="mt-10 flex items-center space-x-2">
          <img src={marker} alt="" />
          <span>10 Bayfont avenue, Singapore</span>
        </div>
        <div className="mt-2 flex items-center space-x-2">
          <img src={browse} alt="" />
          <span>www.lalalayeyeye.com</span>
        </div>
      </div>
    </aside>
  );
}

export default Modal;
