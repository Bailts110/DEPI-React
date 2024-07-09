const tracks = [
    {
    id: 1,
    name: "Keynote",
    speaker: "Dr. Jane Smith",
    time: "9:00 AM - 10:00 AM",
    room: "Main Hall",
    },
    {
    id: 2,
    name: "Web Development",
    speaker: "Alice Johnson",
    time: "11:00 AM - 12:00 PM",
    room: "Room A",
    },
    {
    id: 3,
    name: "Data Science",
    speaker: "Charlie Green",
    time: "11:00 AM - 12:00 PM",
    room: "Room B",
    },
    {
    id: 4,
    name: "Cloud Computing",
    speaker: "Eva Black",
    time: "11:00 AM - 12:00 PM",
    room: "Room C",
    },
];

$(document).ready(function() {
    tracks.forEach((e) => {
        $('#main').append(`<div id="${e.id}" class="card">
        <h4>Name : ${e.name}</h4>
        <h4>Speaker : ${e.speaker}</h4>
        <h4>Time : ${e.time}</h4>
        <h4>Room : ${e.room}</h4>
        </div>`);
    });
    });