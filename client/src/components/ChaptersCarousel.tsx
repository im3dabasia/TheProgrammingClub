import React from 'react';
import 'tw-elements';

const ChaptersCarousel: React.FC = () => {
    
    // Data can be fetched and stored in a state, which will be used in dynamic rendering.
    const data = [
        {
            id: 1,
            src: "https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg",
            title: "AU chapter 1",
            text: "Some representative placeholder content for the 1st chapter."
        },
        {
            id: 2,
            src: "https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg",
            title: "AU chapter 2",
            text: "Some representative placeholder content for the 2nd chapter."
        },
        {
            id: 3,
            src: "https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg",
            title: "AU chapter 3",
            text: "Some representative placeholder content for the 3rd chapter."
        }
    ]
    return (
        <div>
            <div id="chaptersCarousel" className="carousel slide relative" data-bs-ride="carousel">
                <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                    <button
                        type="button"
                        data-bs-target="#chaptersCarousel"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#chaptersCarousel"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#chaptersCarousel"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>
                <div className="carousel-inner relative w-full overflow-hidden">
                    {data.map(({ id, src, text, title}) => {
                        return (
                            <div className= {`carousel-item ${id === 1 ? 'active':''} relative float-left w-full`} key={id}>
                                <img
                                    src={src}
                                    className="block w-full"
                                    alt="..."
                                />
                                <div className="carousel-caption hidden md:block absolute text-center">
                                    <h5 className="text-xl">{title}</h5>
                                    <p>{text}</p>
                                </div>
                            </div>
                        )
                    })}
                    <button
                        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                        type="button"
                        data-bs-target="#chaptersCarousel"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                        type="button"
                        data-bs-target="#chaptersCarousel"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ChaptersCarousel; 
