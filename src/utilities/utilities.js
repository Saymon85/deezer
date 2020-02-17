// #### Deezer API sends song duration in seconds, this functions convert to format min:sec and hours minutes  #####

export const convertSecondsToMinutes = (duration) => {
    const minutes = Math.floor(duration / 60);
    let seconds = duration % 60;
    if(seconds < 10){
        seconds = "0" + seconds;
    }
    return `${minutes}:${seconds}`;
}

export const convertSecondsToHours = (duration) => {
    if (duration < 3600){
        return convertSecondsToMinutes(duration);
    }
    const hours = Math.floor(duration / 3600);
    let minutes = Math.floor((duration - (hours * 3600)) / 60);

    return `${hours} hours ${minutes} minutes`;
}

// #### Sums duration of whole playlist #### 

export const sumPlaylistDuration = (tracks) => {
    const duration = tracks.map(track => {
        return track.duration;
    }).reduce((accumulator, duration) => {
        return accumulator + duration;
    }, 0)
    return convertSecondsToHours(duration);
}

// #### Converts string in format YYYY-MM-DD to DD-MM-YYYY


export const convertReleaseDate = (releaseDate) => {

    const [,year, month, day] = /^([0-9]{4})-([0-9]{2})-([0-9]{2})$/.exec(releaseDate);

    return `${day}.${month}.${year}.`;
}