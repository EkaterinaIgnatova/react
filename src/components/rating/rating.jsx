export const Rating = ({currentRating, maxRating}) => {
    
    let stars = [];
    for(let i = 0; i < maxRating; i++) {
        stars.push(
            <i className="fa-solid fa-star" style={{color: i < currentRating ? '#ffd43b' : '#ececec'}}></i>
        )
    }
        
    return (stars);
}