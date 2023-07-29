// send data to ls 
const sendDataLS = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
}


// Get Data from LS 

const getDataLS = (key) => {
    if (localStorage.getItem(key)) {
        return JSON.parse(localStorage.getItem(key))
    }
    return [];
};


const timeAgo = (date) => {
    const currentDate = new Date();
    const postDate = new Date(date);

    const timeDifferenceInSeconds = Math.floor((currentDate - postDate) / 1000);

    if (timeDifferenceInSeconds < 60) {
        return "just now";
    } else if (timeDifferenceInSeconds < 3600) {
        const minutes = Math.floor(timeDifferenceInSeconds / 60);
        return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
    } else if (timeDifferenceInSeconds < 86400) {
        const hours = Math.floor(timeDifferenceInSeconds / 3600);
        return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
    } else if (timeDifferenceInSeconds < 604800) {
        const days = Math.floor(timeDifferenceInSeconds / 86400);
        return `${days} ${days === 1 ? "day" : "days"} ago`;
    } else {
        return postDate.toDateString(); // Display the full date if older than a week
    }
}