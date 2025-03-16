export const Review = ({reviewInfo}) => {

    const getStars = (rating) => {
        let stars = [];
        for(let i = 0; i < rating; i++) {
            stars.push(<i className="fa-solid fa-star" style={{color: '#ffd43b'}}></i>);
        }
        
        return (stars);
    };

    return (
        <>
            <h4>{reviewInfo.user} {getStars(reviewInfo.rating)}</h4>
            <p>{reviewInfo.text}</p>
         </>
    )
}