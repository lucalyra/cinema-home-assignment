export default function moviePipe(movieObj){
    for (let elem in movieObj) {  
            if(/^[a-zA-Z0-9$$!%?&#^-_. +]+$/.test(movieObj[elem]) === false){
                movieObj[elem] = movieObj[elem].replace(/[^a-zA-Z0-9!?&-.+]/g, "")
            }
            if( isNaN(movieObj[elem]) ){
                movieObj[elem] = movieObj[elem].toLowerCase()
                    .split(' ')
                    .map((letter) => letter.charAt(0).toUpperCase() + letter.substring(1))
                    .join(' ');
            }
    }
    return movieObj
}

