import React from 'react';
import { useEffect, useState } from 'react';

const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        fetch('rooms.json')
            .then(res => res.json())
            .then(data => setRooms(data))
    }, [])
    return (
        <div>
            <div style={{ backgroundImage: "url(https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" }} className='bg-fixed h-500 bg-no-repeat bg-cover bg-center pt-6'>

                <div className='flex justify-center'>
                    <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-7 '>
                        {
                            rooms.map(room => <Room room={room} key={room.id}></Room>)
                        }

                    </div>
                </div>

            </div>

        </div>
    );


};

const Room = ({ room }) => {
    const { name, img } = room;
    console.log(room);
    return (
        <div className="card w-96 glass">
            <figure><img src={img} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>How to park your car at your garage?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Book Now</button>
                </div>
            </div>
        </div>
    );
}

export default Rooms;