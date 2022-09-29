import React from "react";
import Slider from "react-slick";
import Card from "./Card";
import { useSelector } from "react-redux";
import { selectAlltasks } from '../features/slice/taskSlice'

const Alltasks = () => {
     const tasks = useSelector(selectAlltasks)
     var settings = {
          dots: true,
          infinite: false,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 0,
          responsive: [
               {
                    breakpoint: 1024,
                    settings: {
                         slidesToShow: 3,
                         slidesToScroll: 3,
                         infinite: true,
                         dots: true
                    }
               },
               {
                    breakpoint: 600,
                    settings: {
                         slidesToShow: 2,
                         slidesToScroll: 2,
                         initialSlide: 2
                    }
               },
               {
                    breakpoint: 480,
                    settings: {
                         slidesToShow: 1,
                         slidesToScroll: 1
                    }
               }
          ]
     };
     return (
          <div className="mb-5">
               <h1 className="text-white text-uppercase pb-1 ls-1"> Tasks </h1>
               <Slider {...settings}>
                    {tasks.map((item) => {
                         return (
                              <Card id={item.id} title={item.tasktitle} context={item.taskcontext} status={item.status} type="allTasks" />
                         )
                    })}
               </Slider>
          </div>

     );
}

export default Alltasks;
